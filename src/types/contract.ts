export interface Mark {
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
}

export interface TextNode {
  type: 'text';
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
}

export interface MentionNode {
  type: 'mention';
  color: string;
  title: string;
  children: TextNode[];
  id: string;
  value: string;
  variableType?: string;
}

export interface ClauseNode {
  type: 'clause';
  title?: string;
  children: ContractNode[];
  number?: number;
}

export interface BlockNode {
  type: 'block';
  title?: string;
  children: ContractNode[];
}

export interface HeadingNode {
  type: 'h1' | 'h4';
  title?: string;
  children: TextNode[];
}

export interface ParagraphNode {
  type: 'p';
  title?: string;
  children: (TextNode | MentionNode)[];
}

export interface ListNode {
  type: 'ul';
  title?: string;
  children: ListItemNode[];
}

export interface ListItemNode {
  type: 'li';
  children: ListItemContentNode[];
}

export interface ListItemContentNode {
  type: 'lic';
  children: (TextNode | MentionNode)[];
}

export type ContractNode = 
  | BlockNode 
  | ClauseNode 
  | HeadingNode 
  | ParagraphNode 
  | ListNode 
  | ListItemNode 
  | ListItemContentNode 
  | TextNode 
  | MentionNode;

export interface ContractDocument {
  title: string;
  type: 'block';
  children: ContractNode[];
} 