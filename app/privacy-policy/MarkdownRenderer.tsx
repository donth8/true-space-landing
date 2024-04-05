'use client';

import Markdown from 'react-markdown';

export default function MarkdownRenderer({ content }: { content: string }) {
  return <Markdown>{content}</Markdown>;
}
