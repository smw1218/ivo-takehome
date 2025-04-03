import React, { useMemo } from 'react';
import { ContractDocument as ContractDocumentType, ContractNode, ClauseNode } from '../types/contract';
import { ContractNodeRenderer } from './ContractNodeRenderer';

interface ContractDocumentProps {
  document: ContractDocumentType;
}

const getClauseIndicator = (number: number, level: number): string => {
  // For level 1, convert number to lowercase letter (1 -> 'a', 2 -> 'b', etc)
  if (level === 1) {
    const letter = String.fromCharCode(97 + (number - 1)); // 97 is ASCII for 'a'
    return `(${letter}) `;
  }
  return `${number}. `;
};

export const ContractDocument: React.FC<ContractDocumentProps> = ({ document }) => {
  const processedDocument = useMemo(() => {
    const doc = { ...document };


    const traverse = (node: ContractNode, clauseLevel: number, currentNumber: number) => {
      if ('type' in node && node.type === 'clause') {
        const clauseNode = node as ClauseNode;
        currentNumber++
        clauseNode.clauseIndicator = getClauseIndicator(currentNumber, clauseLevel);

        if ('children' in node && node.children) {
          let childNumber = 0;
          for (const child of node.children) {
            childNumber = traverse(child, clauseLevel + 1, childNumber);
          }
        }
      } else {
        if ('children' in node && node.children) {
          for (const child of node.children) {
            currentNumber = traverse(child, clauseLevel, currentNumber);
          }
        }
      }
      
      return currentNumber;
    };

    if (doc.children) {
      let currentNumber = 0;
      for (const child of doc.children) {
        currentNumber = traverse(child, 0, currentNumber);
      }
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