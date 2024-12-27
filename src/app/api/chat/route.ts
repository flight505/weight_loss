import OpenAI from 'openai';

// Create an OpenAI API client (that can run on edge)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
});

// IMPORTANT! Set the runtime to edge
export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

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

Membership costs 299,- DKK every 4 weeks with no binding period.`,
        },
        ...messages,
      ],
    });

    // Create a streaming response
    const stream = new ReadableStream({
      async start(controller) {
        for await (const chunk of response) {
          const content = chunk.choices[0]?.delta?.content;
          if (content) {
            controller.enqueue(
              new TextEncoder().encode(`data: ${JSON.stringify({ content })}\n\n`)
            );
          }
        }
        controller.enqueue(new TextEncoder().encode('data: [DONE]\n\n'));
        controller.close();
      },
    });

    // Return the response as a streaming response
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