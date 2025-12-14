import { GoogleGenerativeAI } from "@google/generative-ai";
import { AiAnalysisResponse } from "../types";

const apiKey = process.env.API_KEY;
const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;

export const evaluateAppIdea = async (idea: string): Promise<AiAnalysisResponse> => {
  if (!genAI) {
    throw new Error("Missing API key for AI evaluation.");
  }

  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = `
    You are a venture capitalist and senior tech architect based in Union City, NJ (Hudson County area).
    Analyze the following app idea or business integration request.
    Provide a JSON response with a viability score (0-100), a one-sentence punchy summary, and a specific recommendation on how to build it using modern tech (AI, React, etc.).
    Tone: Professional, encouraging, but realistic. Mention "Hudson Valley Tech" or "Union City Innovation" potential if applicable.

    Idea: ${idea}
  `;

  try {
    const result = await model.generateContent(prompt);
    const text = result.response.text();

    if (!text) throw new Error("No response from AI");

    return JSON.parse(text) as AiAnalysisResponse;
  } catch (error) {
    console.error("AI Evaluation failed:", error);
    throw new Error("Failed to evaluate idea.");
  }
};
