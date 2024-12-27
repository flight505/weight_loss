import { Configuration, OpenAIApi } from 'openai-edge';

// Create an OpenAI API client (that's edge friendly!)
const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

// IMPORTANT! Set the runtime to edge
export const runtime = 'edge';

interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export async function POST(req: Request) {
  // Extract the `messages` from the body of the request
  const { messages }: { messages: Message[] } = await req.json();

  // Ask OpenAI for a streaming chat completion given the prompt
  const response = await openai.createChatCompletion({
    model: 'gpt-4',
    stream: true,
    messages: [
      {
        role: 'system',
        content: `You are a helpful weight loss clinic assistant. You help users with questions about:
- Weight loss programs
- Medications like Wegovy
- Booking appointments
- General health advice
- Clinic information

Always be professional, empathetic, and encouraging. If users ask about specific medical advice, remind them to consult with Dr. Peyman directly.

The clinic offers:
- Online consultations
- Wegovy treatment programs
- Personalized weight loss plans
- Regular follow-ups
- Community support

Membership costs 299,- DKK every 4 weeks with no binding period.`,
      },
      ...messages,
    ],
  });

  // Return the response as a streaming response
  return new Response(response.body, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    },
  });
} 