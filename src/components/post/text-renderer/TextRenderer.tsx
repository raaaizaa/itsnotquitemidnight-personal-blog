import type { PostNode } from '@/types/post';
import React from 'react';

type TextRendererProps = {
  node: PostNode;
  index?: number;
};

export default function TextRenderer({ node, index }: TextRendererProps) {
  if (node.type === 'text') {
    return <>{node.text}</>;
  }

  const children = 'children' in node
    ? node.children.map((child, childIndex) => (
        <TextRenderer key={childIndex} node={child} index={childIndex} />
      ))
    : null;

  switch (node.type) {
    case 'heading':
      return node.level === 1 ? (
        <h1
          key={index}
          className="font-road-rage text-[44px] md:text-[48px] lg:text-[56px] mb-2">
          {children}
        </h1>
      ) : (
        <h2
          key={index}
          className="font-road-rage text-[28px] md:text-[32px] lg:text-[40px] mb-2">
          {children}
        </h2>
      );

    case 'paragraph':
      return (
        <p key={index} className="leading-8 mb-4">
          {children}
        </p>
      );

    case 'blockquote':
      return (
        <blockquote key={index} className="border-l-2 pl-4 italic">
          {children}
        </blockquote>
      );

    case 'strong':
      return <strong>{children}</strong>;

    case 'emphasis':
      return <em>{children}</em>;

    case 'link':
      return (
        <a href={node.url} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );

    case 'embed':
      return (
        <div className="left-0 w-full h-[156px] relative">
          <iframe
            src={node.url}
            className="top-0 left-0 w-full h-[156px] absolute border-none rounded-[12px]"
            allow="clipboard-write *; encrypted-media *; fullscreen *; picture-in-picture *;"></iframe>
        </div>
      );

    default:
      return children ?? null;
  }
}
