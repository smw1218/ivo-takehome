import React from 'react';
import { ClauseNode } from '../types/contract';
import { ContractNodeRenderer } from './ContractNodeRenderer';

interface ClauseProps {
  node: ClauseNode;
}

export const Clause: React.FC<ClauseProps> = ({ node }) => {
  return (
    <div className="my-4">
      <div className="flex items-start">
        <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center font-bold mr-2">
          {node.number || 1}
        </div>
        <div className="flex-grow">
          {node.title && (
            <h3 className="text-lg font-semibold mb-2">{node.title}</h3>
          )}
          {node.children?.map((child, index) => (
            <ContractNodeRenderer key={index} node={child} />
          ))}
        </div>
      </div>
    </div>
  );
}; 