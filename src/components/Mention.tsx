import React from 'react';
import { MentionNode } from '../types/contract';
import { processText } from '../utils/textProcessing';

interface MentionProps {
  node: MentionNode;
}

export const Mention: React.FC<MentionProps> = ({ node }) => {
  return (
    <span
      className="px-1 rounded text-white"
      style={{ backgroundColor: node.color }}
      title={node.title}
      dangerouslySetInnerHTML={{ __html: processText(node.children[0].text) }}
    />
  );
}; 