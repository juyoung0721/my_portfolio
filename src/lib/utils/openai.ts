import { OpenAI } from "openai";
import { tools, findClosestProject } from "./tools";
import { basicPrompt, projectPrompt } from './prompt';
import { projects } from "../data/projects";

// OpenAI 클라이언트 초기화
const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true // 클라이언트 사이드에서 사용
});

export async function getChatCompletion(message: string): Promise<string> {
    try {
        const completion = await openai.chat.completions.create({
            messages: [
                {
                role: "system",
                content: basicPrompt    
                },
                {
                role: "user",
                content: message
                }
            ],
            model: "gpt-4o-mini",
        });

        return completion.choices[0].message.content || "죄송합니다. 응답을 생성할 수 없습니다.";
    } catch (error) {
        console.error('OpenAI API Error:', error);
        return "죄송합니다. 응답을 생성하는 중에 오류가 발생했습니다.";
    }
}

export async function* getChatCompletionStream(message: string) {
    try {
        // 1. 첫 번째 호출: Tool 사용 여부 결정
        const firstResponse = await openai.chat.completions.create({
            messages: [
                {
                    role: "system",
                    content: basicPrompt
                },
                {
                    role: "user",
                    content: message
                }
            ],
            model: "gpt-4o-mini",
            tools: tools,
            tool_choice: "auto"
        });

        const firstMessage = firstResponse.choices[0].message;

        // Tool 호출이 필요한 경우
        if (firstMessage.tool_calls) {
            const toolCall = firstMessage.tool_calls[0];
            const args = JSON.parse(toolCall.function.arguments);
            
            // 프로젝트 검색
            const project = await findClosestProject(args.query);
            const projectContext = `
            프로젝트 제목: ${project.title}
            설명: ${project.description}
            개요: ${project.overview || '없음'}
            기술 스택: ${project.technology?.join(', ') || '없음'}
            역할: ${project.role || '없음'}
            GitHub 링크: ${project.gitLink || '없음'}
            `;
            
            // 2. 두 번째 호출: 검색 결과를 포함한 최종 답변
            const stream = await openai.chat.completions.create({
                messages: [
                    {
                        role: "system",
                        content: projectPrompt
                    },
                    {
                        role: "user",
                        content: message
                    },
                    {
                        role: "assistant",
                        content: projectContext
                    }
                ],
                model: "gpt-4o-mini",
                max_tokens: 1000,
                stream: true
            });

            for await (const chunk of stream) {
                const content = chunk.choices[0]?.delta?.content;
                if (content) {
                    yield content;
                }
            }
        } else {
            // Tool 호출이 필요 없는 경우: 첫 번째 응답을 스트리밍
            yield firstMessage.content || "죄송합니다. 응답을 생성할 수 없습니다.";
        }
    } catch (error) {
        console.error('OpenAI API Error:', error);
        yield "죄송합니다. 응답을 생성하는 중에 오류가 발생했습니다.";
    }
} 