'use client';

import { useState } from 'react';
import { useChat } from 'ai/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MessageCircle, X, Send, Phone, Mail, AlertCircle } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { useEffect, useRef } from 'react';

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { messages, input, handleInputChange, handleSubmit, isLoading, error, reload } = useChat({
    api: '/api/chat',
    initialMessages: [
      {
        id: 'welcome',
        role: 'assistant',
        content: 'Hej! Jeg er her for at hjælpe dig med din vægttabsrejse. Du er velkommen til at spørge mig om vores programmer, medicin som Wegovy, eller booking af en konsultation.'
      }
    ],
    onError: (error) => {
      console.error('Chat error:', error);
    }
  });

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollArea = scrollAreaRef.current;
      scrollArea.scrollTop = scrollArea.scrollHeight;
    }
  }, [messages]);

  const handleContactSupport = (type: 'phone' | 'email') => {
    if (type === 'phone') {
      window.location.href = 'tel:+4526179868';
    } else {
      window.location.href = 'mailto:jesper_vang@me.com';
    }
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    try {
      await handleSubmit(e);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <>
      {!isOpen && (
        <Button
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
          onClick={() => setIsOpen(true)}
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-[400px] h-[600px] flex flex-col shadow-xl animate-in slide-in-from-bottom-6 duration-300">
          <CardHeader className="flex flex-row items-center border-b px-4 py-3">
            <Avatar className="h-8 w-8 mr-2">
              <AvatarImage src="/logo.png" alt="Assistent" />
              <AvatarFallback>SL</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <CardTitle className="text-lg">SlankLet Support</CardTitle>
              <p className="text-sm text-muted-foreground">
                {isLoading ? 'Skriver...' : 'Online'}
              </p>
            </div>
            <button
              type="button"
              className="ml-auto p-2 rounded-full hover:bg-gray-100 transition-colors"
              onClick={() => setIsOpen(false)}
              aria-label="Luk chat"
            >
              <X className="h-5 w-5" />
            </button>
          </CardHeader>
          
          <CardContent className="flex-grow p-4 overflow-hidden">
            <ScrollArea className="h-full pr-4" ref={scrollAreaRef}>
              {messages.length === 1 ? (
                <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                  <MessageCircle className="h-12 w-12 text-muted-foreground" />
                  <div className="space-y-2">
                    <h3 className="font-semibold">Velkommen til vores Support Chat</h3>
                    <p className="text-sm text-muted-foreground">
                      Spørg os om vores vægttabsprogrammer, medicin eller book en tid.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={cn(
                        'flex',
                        message.role === 'user' ? 'justify-end' : 'justify-start'
                      )}
                    >
                      <div
                        className={cn(
                          'rounded-lg px-4 py-2 max-w-[85%] shadow-sm',
                          message.role === 'user'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted'
                        )}
                      >
                        {message.content}
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-muted rounded-lg px-4 py-2 animate-pulse">
                        Skriver...
                      </div>
                    </div>
                  )}
                  {error && (
                    <div className="flex justify-center">
                      <div className="bg-destructive/10 text-destructive rounded-lg px-4 py-2 flex items-center gap-2">
                        <AlertCircle className="h-4 w-4" />
                        <span>Der opstod en fejl. Prøv igen eller kontakt support.</span>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </ScrollArea>
          </CardContent>

          <div className="p-4 border-t space-y-4">
            {error && (
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1"
                  onClick={() => reload()}
                >
                  Prøv igen
                </Button>
              </div>
            )}
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="flex-1"
                onClick={() => handleContactSupport('phone')}
              >
                <Phone className="h-4 w-4 mr-2" />
                Ring til os
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex-1"
                onClick={() => handleContactSupport('email')}
              >
                <Mail className="h-4 w-4 mr-2" />
                Email os
              </Button>
            </div>
            <Separator />
            <form onSubmit={handleFormSubmit} className="flex gap-2">
              <Input
                value={input}
                onChange={handleInputChange}
                placeholder="Skriv din besked..."
                disabled={isLoading}
                className="flex-1"
              />
              <Button type="submit" disabled={isLoading} size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </Card>
      )}
    </>
  );
} 