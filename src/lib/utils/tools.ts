import { ChatCompletionTool } from "openai/resources/chat/completions";
import { OpenAI } from "openai";
import { projectEmbeddings } from "../data/project-embeddings";
import { projects, ProjectType } from "../data/projects";

// 코사인 유사도 계산 함수
function cosineSimilarity(a: number[], b: number[]): number {
    if (a.length !== b.length) {
        throw new Error("Vectors must have the same length");
    }
    
    let dotProduct = 0;
    let normA = 0;
    let normB = 0;
    
    for (let i = 0; i < a.length; i++) {
        dotProduct += a[i] * b[i];
        normA += a[i] * a[i];
        normB += b[i] * b[i];
    }
    
    normA = Math.sqrt(normA);
    normB = Math.sqrt(normB);
    
    return dotProduct / (normA * normB);
}

const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
});

export async function findClosestProject(query: string): Promise<ProjectType> {
    const embeddingRes = await openai.embeddings.create({
        input: query,
        model: "text-embedding-3-small"
    });
    const inputVec = embeddingRes.data[0].embedding;

    // 프로젝트와 유사도 점수를 저장하는 배열
    const projectScores = projectEmbeddings.map(p => ({
        title: p.title,
        score: cosineSimilarity(inputVec, p.embedding)
    }));

    // 유사도 점수 기준으로 내림차순 정렬
    projectScores.sort((a, b) => b.score - a.score);

    const project = projects.find(p => p.title === projectScores[0].title);

    if (!project) {
        throw new Error('No similar project found');
    }

    return project;
}

export const tools: ChatCompletionTool[] = [
    {
        type: "function",
        function: {
            name: "findClosestProject",
            description: "질문 의도와 가장 유사한 프로젝트를 찾아줍니다.",
            parameters: {
                type: "object",
                properties: {
                    query: {
                        type: "string",
                        description: "사용자의 자연어 질문"
                    }
                },
                required: ["query"]
            }
        }
    }
]; 