import { AssistantResponse } from 'ai';
import OpenAI from 'openai';

// Create an OpenAI API client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
});

// Set the runtime to edge for best performance
export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    const { messages, threadId: existingThreadId } = await req.json();
    
    // Create a thread if needed
    const threadId = existingThreadId ?? (await openai.beta.threads.create({})).id;

    // Add the user's message to the thread
    await openai.beta.threads.messages.create(threadId, {
      role: 'user',
      content: messages[messages.length - 1].content,
    });

    // Use AssistantResponse to handle the streaming
    return AssistantResponse(
      { threadId, messageId: messages[messages.length - 1].id },
      async ({ forwardStream }) => {
        const run = await openai.beta.threads.runs.create(threadId, {
          assistant_id: process.env.ASSISTANT_ID!,
        });

        const stream = await openai.beta.threads.runs.stream(threadId, run.id);
        await forwardStream(stream);
      }
    );
  } catch (error) {
    console.error('Error in chat API:', error);
    return new Response(
      JSON.stringify({ error: 'There was an error processing your request' }),
      { status: 500 }
    );
  }
}

