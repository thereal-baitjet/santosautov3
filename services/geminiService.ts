import { GoogleGenAI, Type } from "@google/genai";
import { AiAnalysisResponse } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const evaluateAppIdea = async (idea: string): Promise<AiAnalysisResponse> => {
  const model = "gemini-2.5-flash";
  
  const prompt = `
    You are a venture capitalist and senior tech architect based in Union City, NJ (Hudson County area).
    Analyze the following app idea or business integration request.
    Provide a JSON response with a viability score (0-100), a one-sentence punchy summary, and a specific recommendation on how to build it using modern tech (AI, React, etc.).
    Tone: Professional, encouraging, but realistic. Mention "Hudson Valley Tech" or "Union City Innovation" potential if applicable.

    Idea: ${idea}
  `;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            score: { type: Type.NUMBER },
            summary: { type: Type.STRING },
            recommendation: { type: Type.STRING }
          },
          required: ["score", "summary", "recommendation"]
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    
    return JSON.parse(text) as AiAnalysisResponse;
  } catch (error) {
    console.error("AI Evaluation failed:", error);
    throw new Error("Failed to evaluate idea.");
  }
};