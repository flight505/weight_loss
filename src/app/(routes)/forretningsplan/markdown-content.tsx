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
            themeVariables: {
              background: '#ffffff',
              primaryColor: '#f3d0d7',
              secondaryColor: '#f0ebe3',
              tertiaryColor: '#fff',
              primaryBorderColor: '#fda4af',
              secondaryBorderColor: '#e5e0d8',
              tertiaryBorderColor: '#d1d5db',
              primaryTextColor: '#1f2937',
              secondaryTextColor: '#4b5563',
              tertiaryTextColor: '#6b7280',
              lineColor: '#9ca3af',
              fontSize: '16px',
              fontFamily: 'inherit'
            },
            securityLevel: 'loose',
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
      className="my-8 p-6 bg-white rounded-lg shadow-sm border border-neutral-gray-200"
    />
  );
};

export function MarkdownContent({ content }: MarkdownContentProps) {
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
                  <table className="min-w-full divide-y divide-neutral-gray-200 bg-white rounded-lg shadow-sm">
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
                <th className="px-6 py-3 text-left text-sm font-semibold text-neutral-gray-900 border-b">
                  {children}
                </th>
              );
            },
            td({ children }) {
              return (
                <td className="px-6 py-4 text-sm text-neutral-gray-700 border-b border-neutral-gray-100">
                  {children}
                </td>
              );
            },
            // Style other elements
            h1: ({ children }) => (
              <h1 className="text-4xl font-bold mb-8 text-neutral-gray-900 border-b pb-4">
                {children}
              </h1>
            ),
            h2: ({ children }) => (
              <h2 className="text-3xl font-semibold mb-6 text-neutral-gray-800 border-b pb-3">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-2xl font-medium mb-4 text-neutral-gray-800">
                {children}
              </h3>
            ),
            p: ({ children }) => (
              <p className="text-neutral-gray-700 leading-relaxed mb-4">
                {children}
              </p>
            ),
            ul: ({ children }) => (
              <ul className="list-disc list-outside pl-6 mb-4 space-y-2 text-neutral-gray-700">
                {children}
              </ul>
            ),
            ol: ({ children }) => (
              <ol className="list-decimal list-outside pl-6 mb-4 space-y-2 text-neutral-gray-700">
                {children}
              </ol>
            ),
            li: ({ children }) => (
              <li className="leading-relaxed">
                {children}
              </li>
            ),
            blockquote: ({ children }) => (
              <blockquote className="border-l-4 border-accent-rose-main pl-4 italic text-neutral-gray-600 my-4">
                {children}
              </blockquote>
            ),
            a: ({ children, href }) => (
              <a 
                href={href} 
                className="text-accent-rose-dark hover:text-accent-rose-main underline decoration-1 underline-offset-2"
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