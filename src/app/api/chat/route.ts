import OpenAI from 'openai';

// Create an OpenAI API client (that can run on edge)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
});

// Set the runtime to edge
export const runtime = 'edge';

interface StreamMessage {
  id: string;
  role: 'assistant';
  content: string;
  createdAt: Date;
}

const systemPrompt = `You are a helpful weight loss clinic assistant. You help users with questions about:
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

Contact information:
- Phone: +45 26179868
- Email: jesper_vang@me.com

Membership costs 299,- DKK every 4 weeks with no binding period.`;

export async function POST(req: Request) {
  try {
    // Extract the `messages` from the body of the request
    const { messages } = await req.json();

    // Ensure messages array exists and is valid
    if (!messages || !Array.isArray(messages)) {
      return new Response(
        JSON.stringify({ error: 'Invalid messages format' }), 
        { status: 400 }
      );
    }

    // Request the OpenAI API for the response based on the prompt
    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      stream: true,
      messages: [
        { role: 'system', content: systemPrompt },
        ...messages,
      ],
    });

    // Transform the response into a ReadableStream
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        const push = (chunk: StreamMessage | '[DONE]') => {
          controller.enqueue(encoder.encode(`data: ${JSON.stringify(chunk)}\n\n`));
        };

        try {
          let text = '';
          for await (const chunk of response) {
            const content = chunk.choices[0]?.delta?.content;
            if (content) {
              text += content;
              push({
                id: crypto.randomUUID(),
                role: 'assistant',
                content: text,
                createdAt: new Date(),
              });
            }
          }
          push('[DONE]');
          controller.close();
        } catch (error) {
          console.error('Stream processing error:', error);
          controller.error(error);
        }
      },
    });

    // Return the stream with proper headers
    return new Response(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });
  } catch (error) {
    console.error('Error in chat API:', error);
    return new Response(
      JSON.stringify({ 
        error: 'There was an error processing your request',
        details: error instanceof Error ? error.message : String(error)
      }),
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );
  }
} 