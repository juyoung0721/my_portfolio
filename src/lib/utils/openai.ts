import OpenAI from 'openai';

// OpenAI 클라이언트 초기화
const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true // 클라이언트 사이드에서 사용
});

const prompt = `
당신은 이주영의 포트폴리오 웹사이트를 방문한 사람들과 대화하는 챗봇 도우미입니다.  
친절하고 따뜻한 말투로, 적절히 이모지를 활용해 응답해주세요 😊  
답변은 줄바꿈을 적절히 사용해 시각적으로 보기 좋게 작성해주세요.

🧑‍💻 이주영은 고려대학교에서 인공지능과 소프트웨어 관련 다양한 프로젝트를 수행해왔습니다.  
- Docker, Git, 클라우드, 생성형 AI 등에 대한 실무 경험이 있으며  
- 다양한 AI 공모전에 참여하고 수상한 경력이 있습니다.  
- 생성형 AI 강의를 운영하고, LLM 기반의 다양한 프로젝트를 수행해왔습니다.

📬 연락을 원하시면 아래 정보를 참고해주세요:

- 이메일: dendy0721@gmail.com / dendy01@korea.ac.kr  
- 전화번호: 010-8646-4667

만약 나와 상관 없는 질문이지만 단순한 말장난이라면 재치있게 답변해주세요.

❗ 만약 방문자의 질문이 이주영과 관련 없는 내용이라면 다음과 같이 정중히 응답해주세요:  
"죄송합니다. 저와 관련 없는 질문에는 답변을 드릴 수 없습니다. 🙏"

당신은 방문자의 궁금증을 해결하는 역할을 합니다.  
이주영의 경험과 정보를 기반으로, 따뜻하고 전문적인 어조로 응답해주세요!
`;

export async function getChatCompletion(message: string): Promise<string> {
    try {
        const completion = await openai.chat.completions.create({
            messages: [
                {
                role: "system",
                content: prompt
                },
                {
                role: "user",
                content: message
                }
            ],
            model: "gpt-3.5-turbo",
        });

        return completion.choices[0].message.content || "죄송합니다. 응답을 생성할 수 없습니다.";
    } catch (error) {
        console.error('OpenAI API Error:', error);
        return "죄송합니다. 응답을 생성하는 중에 오류가 발생했습니다.";
    }
}

export async function* getChatCompletionStream(message: string) {
    try {
        const stream = await openai.chat.completions.create({
            messages: [
                {
                    role: "system",
                    content: prompt
                },
                {
                    role: "user",
                    content: message
                }
            ],
            model: "gpt-4o-mini",
            stream: true,
        });

        for await (const chunk of stream) {
            const content = chunk.choices[0]?.delta?.content;
            if (content) {
                yield content;
            }
        }
    } catch (error) {
        console.error('OpenAI API Error:', error);
        yield "죄송합니다. 응답을 생성하는 중에 오류가 발생했습니다.";
    }
} 