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
          mermaid.initialize({
            startOnLoad: true,
            theme: 'base',
            flowchart: {
              htmlLabels: true, // Enables better text handling
              nodeSpacing: 100, // Adjust node spacing
              rankSpacing: 80,
              useMaxWidth: true,
            },
            themeVariables: {
              fontSize: '99%', // Adjust font size for readability
              background: '#ffffff',
              primaryColor: '#f3d0d7',
              primaryBorderColor: '#e5e7eb',
              primaryTextColor: '#1f2937',
              fontFamily: 'inherit',

            },
            securityLevel: 'strict',
          });

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

  return (
    <div 
      ref={elementRef} 
      className="my-6 p-4 bg-white rounded-lg shadow-sm"
    />
  );
};

export function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <article className="prose prose-sm max-w-none text-xs">
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
                <code className={`${className} text-xs`} {...props}>
                  {children}
                </code>
              );
            },
            // Style tables
            table({ children }) {
              return (
                <div className="overflow-x-auto my-4">
                  <table className="min-w-full divide-y divide-neutral-gray-200 bg-white rounded-lg shadow-sm text-xs">
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
                <th className="px-4 py-2 text-left text-xs font-semibold text-neutral-gray-900 border-b">
                  {children}
                </th>
              );
            },
            td({ children }) {
              return (
                <td className="px-4 py-2 text-xs text-neutral-gray-700 border-b border-neutral-gray-100">
                  {children}
                </td>
              );
            },
            // Style other elements
            h1: ({ children }) => (
              <h1 className="text-2xl font-bold mb-4 text-neutral-gray-900 border-b pb-2">
                {children}
              </h1>
            ),
            h2: ({ children }) => (
              <h2 className="text-xl font-semibold mb-3 text-neutral-gray-800 border-b pb-2">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-lg font-medium mb-2 text-neutral-gray-800">
                {children}
              </h3>
            ),
            p: ({ children }) => (
              <p className="text-xs text-neutral-gray-700 leading-relaxed mb-3">
                {children}
              </p>
            ),
            ul: ({ children }) => (
              <ul className="list-disc list-outside pl-4 mb-3 space-y-1 text-xs text-neutral-gray-700">
                {children}
              </ul>
            ),
            ol: ({ children }) => (
              <ol className="list-decimal list-outside pl-4 mb-3 space-y-1 text-xs text-neutral-gray-700">
                {children}
              </ol>
            ),
            li: ({ children }) => (
              <li className="leading-relaxed text-xs">
                {children}
              </li>
            ),
            blockquote: ({ children }) => (
              <blockquote className="border-l-4 border-accent-rose-main pl-3 italic text-xs text-neutral-gray-600 my-3">
                {children}
              </blockquote>
            ),
            a: ({ children, href }) => (
              <a 
                href={href} 
                className="text-xs text-accent-rose-dark hover:text-accent-rose-main underline decoration-1 underline-offset-2"
              >
                {children}
              </a>
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </article>
    </div>
  );
} 