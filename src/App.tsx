import React from 'react';
import { ContractDocument } from './components/ContractDocument';
import { ContractDocument as ContractDocumentType } from './types/contract';
import contractData from './input.json';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      {contractData.map((doc, index) => (
        <ContractDocument key={index} document={doc as ContractDocumentType} />
      ))}
    </div>
  );
}

export default App;
