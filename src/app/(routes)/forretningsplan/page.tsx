import fs from 'fs';
import path from 'path';
import { MarkdownContent } from '@/app/(routes)/forretningsplan/markdown-content';

export const metadata = {
  title: 'Forretningsplan - SlankLet.dk',
  description: 'Forretningsplan for Dansk Online Vægttabsklinik',
};

export default function ForretningsplanPage() {
  // Read the markdown file
  const markdownPath = path.join(process.cwd(), 'forretningsplan.md');
  const content = fs.readFileSync(markdownPath, 'utf8');

  return (
    <div className="min-h-screen bg-neutral-gray-50">
      <MarkdownContent content={content} />
    </div>
  );
} 