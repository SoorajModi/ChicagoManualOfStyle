import { createNewspaper, NewspaperInterface, validNewspaperInterface } from './newspaperInterface';

export function newspaperNote(info: NewspaperInterface): string {
  let citation: validNewspaperInterface = createNewspaper(info);
  return `${citation.authors.note()}"${citation.articleTitle}," ${citation.newspaperTitle}, ${citation.date}${newspaperNoteAppend(citation)}`;
}

export function newspaperBibliography(info: NewspaperInterface): string {
  let citation: validNewspaperInterface = createNewspaper(info);
  return `${citation.authors.bibliography()}"${citation.articleTitle}." ${citation.newspaperTitle}${addEditionInfo(citation.edition)}, ${citation.date}.${addURLBibliography(citation.url)}`;
}

function newspaperNoteAppend(citation: validNewspaperInterface): string {
  return `${addEditionInfo(citation.edition) + addURLNoteInfo(citation.url)}.`;
}

function addEditionInfo(edition: string): string {
  return (edition === '') ? '' : `, ${edition}`;
}

function addURLNoteInfo(url: string): string {
  return (url === '') ? '' : `, ${url}`;
}

function addURLBibliography(url: string): string {
  return (url === '') ? '' : ` ${url}.`;
}
