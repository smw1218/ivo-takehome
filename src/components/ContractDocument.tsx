import React, { useMemo } from 'react';
import { ContractDocument as ContractDocumentType, ContractNode, ClauseNode } from '../types/contract';
import { ContractNodeRenderer } from './ContractNodeRenderer';

interface ContractDocumentProps {
  document: ContractDocumentType;
}

export const ContractDocument: React.FC<ContractDocumentProps> = ({ document }) => {
  const processedDocument = useMemo(() => {
    const doc = { ...document };
    let currentNumber = 1;

    const traverse = (node: ContractNode) => {
      if ('type' in node && node.type === 'clause') {
        const clauseNode = node as ClauseNode;
        clauseNode.number = currentNumber++;
      }
      if ('children' in node && node.children) {
        node.children.forEach(traverse);
      }
    };

    if (doc.children) {
      doc.children.forEach(traverse);
    }
    return doc;
  }, [document]);

  if (!processedDocument.children) {
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      {processedDocument.children.map((node, index) => (
        <ContractNodeRenderer key={index} node={node} />
      ))}
    </div>
  );
}; 