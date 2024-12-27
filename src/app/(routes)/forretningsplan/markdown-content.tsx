'use client';

import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownContentProps {
  content: string;
}

const MermaidDiagram: React.FC<{ content: string }> = ({ content }) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const renderDiagram = async () => {
      if (elementRef.current) {
        try {
          const { svg } = await mermaid.render(
            `mermaid-${Math.random().toString(36).substring(2)}`,
            content
          );
          elementRef.current.innerHTML = svg;
        } catch (error) {
          console.error('Error rendering Mermaid diagram:', error);
          elementRef.current.innerHTML = `<pre>${content}</pre>`;
        }
      }
    };

    renderDiagram();
  }, [content]);

  return <div ref={elementRef} className="my-8" />;
};

export function MarkdownContent({ content }: MarkdownContentProps) {
  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'neutral',
      securityLevel: 'loose',
      fontFamily: 'inherit',
    });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="prose prose-neutral lg:prose-xl max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            // Handle Mermaid code blocks
            code({ inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              if (!inline && match && match[1] === 'mermaid') {
                return <MermaidDiagram content={String(children)} />;
              }
              return (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
            // Style tables
            table({ children }) {
              return (
                <div className="overflow-x-auto my-8">
                  <table className="min-w-full divide-y divide-neutral-gray-200">
                    {children}
                  </table>
                </div>
              );
            },
            thead({ children }) {
              return <thead className="bg-neutral-gray-50">{children}</thead>;
            },
            th({ children }) {
              return (
                <th className="px-6 py-3 text-left text-sm font-semibold text-neutral-gray-900">
                  {children}
                </th>
              );
            },
            td({ children }) {
              return (
                <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-gray-700">
                  {children}
                </td>
              );
            },
            // Style other elements
            h1: ({ children }) => (
              <h1 className="text-4xl font-bold mb-8 text-neutral-gray-900">
                {children}
              </h1>
            ),
            h2: ({ children }) => (
              <h2 className="text-3xl font-semibold mb-6 text-neutral-gray-800">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-2xl font-medium mb-4 text-neutral-gray-800">
                {children}
              </h3>
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </article>
    </div>
  );
} 