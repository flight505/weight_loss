'use client';

import { useState } from 'react';
import { useAssistant } from 'ai/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MessageCircle, X, Send, Phone, Mail } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useAssistant({
    api: '/api/chat',
  });

  const handleContactSupport = (type: 'phone' | 'email') => {
    if (type === 'phone') {
      window.location.href = 'tel:+4512345678'; // Replace with actual phone number
    } else {
      window.location.href = 'mailto:support@example.com'; // Replace with actual email
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
              <AvatarImage src="/logo.png" alt="Assistant" />
              <AvatarFallback>WL</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <CardTitle className="text-lg">Weight Loss Support</CardTitle>
              <p className="text-sm text-muted-foreground">
                {isLoading ? 'Typing...' : 'Online'}
              </p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="ml-auto rounded-full"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </CardHeader>
          
          <CardContent className="flex-grow p-4 overflow-hidden">
            <ScrollArea className="h-full pr-4">
              {messages.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                  <MessageCircle className="h-12 w-12 text-muted-foreground" />
                  <div className="space-y-2">
                    <h3 className="font-semibold">Welcome to our Support Chat</h3>
                    <p className="text-sm text-muted-foreground">
                      Ask us about our weight loss programs, medications, or book an appointment.
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
                        Typing...
                      </div>
                    </div>
                  )}
                </div>
              )}
            </ScrollArea>
          </CardContent>

          <div className="p-4 border-t space-y-4">
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="flex-1"
                onClick={() => handleContactSupport('phone')}
              >
                <Phone className="h-4 w-4 mr-2" />
                Call Us
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex-1"
                onClick={() => handleContactSupport('email')}
              >
                <Mail className="h-4 w-4 mr-2" />
                Email Us
              </Button>
            </div>
            <Separator />
            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input
                value={input}
                onChange={handleInputChange}
                placeholder="Type your message..."
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

