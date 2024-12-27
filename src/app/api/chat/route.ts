import { OpenAIStream, StreamingTextResponse } from 'ai';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const runtime = 'edge';

export async function POST(req: Request) {
  const { messages } = await req.json();

  const response = await openai.chat.completions.create({
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

  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
} 