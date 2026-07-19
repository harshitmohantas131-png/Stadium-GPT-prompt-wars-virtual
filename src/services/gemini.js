import { GoogleGenerativeAI } from '@google/generative-ai';
import { SYSTEM_PROMPT } from '../utils/systemPrompt';

// Initialize the API with the key from environment variables
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
let genAI = null;

if (apiKey) {
  genAI = new GoogleGenerativeAI(apiKey);
}

/**
 * Sends a message to the Gemini API and returns the response.
 * @param {string} message - The user's message
 * @param {Array} history - Previous chat history
 * @param {string} context - The dynamic context generated from current selections
 * @returns {Promise<string>} The AI's response text
 */
export const sendMessage = async (message, history = [], context = '') => {
  if (!apiKey) {
    throw new Error('API Key is missing. Please set VITE_GEMINI_API_KEY.');
  }
  
  if (!genAI) {
    throw new Error('Gemini SDK not initialized properly.');
  }

  try {
    const combinedSystemPrompt = `${SYSTEM_PROMPT}\n\n${context}`;
    
    // Initialize model per request to inject dynamic context
    const model = genAI.getGenerativeModel({
      model: 'gemini-flash-latest',
      systemInstruction: combinedSystemPrompt,
    });
    const chat = model.startChat({
      history: history,
    });
    
    const result = await chat.sendMessage(message);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Gemini API Error:', error);
    throw new Error(`API Error: ${error.message}`);
  }
};
