import React from 'react';
import { ContractNode, TextNode, MentionNode, ClauseNode, BlockNode, HeadingNode, ParagraphNode, ListNode, ListItemNode, ListItemContentNode } from '../types/contract';
import { Mention } from './Mention';
import { Clause } from './Clause';
import { processText } from '../utils/textProcessing';

interface ContractNodeRendererProps {
  node: ContractNode;
}

export const ContractNodeRenderer: React.FC<ContractNodeRendererProps> = ({ node }) => {
  if ('text' in node) {
    const textNode = node as TextNode;
    return (
      <span
        className={`${textNode.bold ? 'font-bold' : ''} ${
          textNode.italic ? 'italic' : ''
        } ${textNode.underline ? 'underline' : ''}`}
        dangerouslySetInnerHTML={{ __html: processText(textNode.text) }}
      />
    );
  }

  if (node.type === 'mention') {
    return <Mention node={node as MentionNode} />;
  }

  if (node.type === 'clause') {
    return <Clause node={node as ClauseNode} />;
  }

  if (node.type === 'block') {
    const blockNode = node as BlockNode;
    if (!blockNode.children) return null;
    return (
      <div className="my-4">
        {blockNode.children.map((child, index) => (
          <ContractNodeRenderer key={index} node={child} />
        ))}
      </div>
    );
  }

  if (node.type === 'h1' || node.type === 'h4') {
    const headingNode = node as HeadingNode;
    const Tag = headingNode.type;
    if (!headingNode.children) return null;
    return (
      <Tag className="font-bold my-4">
        {headingNode.children.map((child, index) => (
          <ContractNodeRenderer key={index} node={child} />
        ))}
      </Tag>
    );
  }

  if (node.type === 'p') {
    const paragraphNode = node as ParagraphNode;
    if (!paragraphNode.children) return null;
    return (
      <p className="my-2">
        {paragraphNode.children.map((child, index) => (
          <ContractNodeRenderer key={index} node={child} />
        ))}
      </p>
    );
  }

  if (node.type === 'ul') {
    const listNode = node as ListNode;
    if (!listNode.children) return null;
    return (
      <ul className="list-disc pl-4 my-2">
        {listNode.children.map((child, index) => (
          <ContractNodeRenderer key={index} node={child} />
        ))}
      </ul>
    );
  }

  if (node.type === 'li') {
    const listItemNode = node as ListItemNode;
    if (!listItemNode.children) return null;
    return (
      <li>
        {listItemNode.children.map((child, index) => (
          <ContractNodeRenderer key={index} node={child} />
        ))}
      </li>
    );
  }

  if (node.type === 'lic') {
    const listItemContentNode = node as ListItemContentNode;
    if (!listItemContentNode.children) return null;
    return (
      <span>
        {listItemContentNode.children.map((child, index) => (
          <ContractNodeRenderer key={index} node={child} />
        ))}
      </span>
    );
  }

  return null;
}; 