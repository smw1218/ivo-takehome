export const processText = (text: string): string => {
  return text
    .replace(/\n/g, '<br />')
    .replace(/\s{2,}/g, (match) => '&nbsp;'.repeat(match.length));
}; 