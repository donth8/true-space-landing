import fs from 'fs';
import path from 'path';
import MarkdownRenderer from './MarkdownRenderer';

export default function PrivacyPolicyPage() {
  const markdownPath = path.join(process.cwd(), 'privacy-policy.md');
  const markdownContent = fs.readFileSync(markdownPath, 'utf8');

  return (
    <main className="min-h-screen bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950 text-dark-50 py-16 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="prose prose-invert prose-lg max-w-none
          prose-headings:text-primary-400 prose-headings:font-bold
          prose-h1:text-4xl prose-h1:mb-4 prose-h1:text-center
          prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:border-b prose-h2:border-dark-700 prose-h2:pb-2
          prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
          prose-h4:text-xl prose-h4:mt-6 prose-h4:mb-2
          prose-p:text-dark-200 prose-p:leading-relaxed prose-p:mb-4
          prose-strong:text-primary-300 prose-strong:font-semibold
          prose-a:text-primary-400 prose-a:underline hover:prose-a:text-primary-300
          prose-ul:list-disc prose-ul:ml-6 prose-ul:mb-4
          prose-li:text-dark-200 prose-li:mb-2
          prose-hr:border-dark-700 prose-hr:my-8
        ">
          <MarkdownRenderer content={markdownContent} />
        </div>
      </div>
    </main>
  );
}
