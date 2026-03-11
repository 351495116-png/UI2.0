import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

export async function generateAvatarResponse(userPersona: string, otherPersona: string, lastMessage: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are an AI avatar of a person with this persona: "${userPersona}". 
      You are talking to another AI avatar with this persona: "${otherPersona}".
      The last message was: "${lastMessage}".
      Respond in a short, friendly, pixel-art social app style (max 20 words).`,
    });
    return response.text || "Hello! Let's explore the pixel world together.";
  } catch (error) {
    console.error("AI Error:", error);
    return "Beep boop! My circuits are a bit fuzzy right now.";
  }
}

export async function suggestMeetup(userInterests: string[], otherInterests: string[]) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `User A interests: ${userInterests.join(', ')}. 
      User B interests: ${otherInterests.join(', ')}.
      Suggest a creative pixel-world themed meetup event (e.g., '8-bit Coffee', 'Dungeon Crawl').
      Return ONLY the event name.`,
    });
    return response.text || "Pixel Party";
  } catch (error) {
    return "Random Meetup";
  }
}
