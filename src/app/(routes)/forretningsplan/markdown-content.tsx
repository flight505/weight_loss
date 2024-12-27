'use client';

import { useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import mermaid from 'mermaid';
import { styles } from '@/lib/theme';

interface MarkdownContentProps {
  content: string;
}

export function MarkdownContent({ content }: MarkdownContentProps) {
  const mermaidRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      mermaid.initialize({
        startOnLoad: true,
        theme: 'neutral',
        securityLevel: 'loose',
        fontFamily: 'arial',
        fontSize: 16,
      });
    }
  }, []);

  return (
    <div className={styles.containers.default}>
      <div className="py-16">
        <article 
          ref={mermaidRef}
          className="prose prose-lg max-w-none prose-headings:text-neutral-gray-800 prose-p:text-neutral-gray-600 prose-a:text-accent-rose-dark prose-strong:text-neutral-gray-800"
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '');
                if (match && match[1] === 'mermaid') {
                  return (
                    <div className="mermaid bg-white rounded-lg p-4 my-4 shadow-sm">
                      {String(children).replace(/\n$/, '')}
                    </div>
                  );
                }
                return (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
              table: ({ node, ...props }) => (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-neutral-gray-200" {...props} />
                </div>
              ),
              th: ({ node, ...props }) => (
                <th className="px-6 py-3 bg-neutral-gray-50 text-left text-xs font-medium text-neutral-gray-500 uppercase tracking-wider" {...props} />
              ),
              td: ({ node, ...props }) => (
                <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-gray-600" {...props} />
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        </article>
      </div>
    </div>
  );
} 