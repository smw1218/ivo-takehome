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
        <div className="flex-grow">
          {node.children?.map((child, index) => {
            const clausePassThrough = node.clauseIndicator && index === 0 ? node.clauseIndicator : undefined;
            return (
            <ContractNodeRenderer 
              key={index} 
              node={child} 
              clauseIndicator={clausePassThrough}
            />
          )})}
        </div>
      </div>
    </div>
  );
}; 