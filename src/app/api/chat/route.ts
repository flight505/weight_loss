import OpenAI from 'openai';

// Create an OpenAI API client (that can run on edge)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
});

// IMPORTANT! Set the runtime to edge
export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    // Parse the request body
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      throw new Error('Invalid messages format');
    }

    console.log('Processing chat request with messages:', messages);

    // Ask OpenAI for a streaming chat completion
    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      stream: true,
      temperature: 0.7,
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

Contact information:
- Phone: +45 26179868
- Email: jesper_vang@me.com

Membership costs 299,- DKK every 4 weeks with no binding period.`,
        },
        ...messages,
      ],
    });

    // Transform the response into a ReadableStream
    const encoder = new TextEncoder();
    const decoder = new TextDecoder();
    
    const stream = new ReadableStream({
      async start(controller) {
        const push = (chunk: string) => {
          controller.enqueue(encoder.encode(chunk));
        };

        for await (const chunk of response) {
          const content = chunk.choices[0]?.delta?.content;
          if (content) {
            push(`data: ${JSON.stringify({ role: "assistant", content })}\n\n`);
          }
        }
        
        push('data: [DONE]\n\n');
        controller.close();
      },
    });

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
          'Content-Type': 'application/json'
        }
      }
    );
  }
} 