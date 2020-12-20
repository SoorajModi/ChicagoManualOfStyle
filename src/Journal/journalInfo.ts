import { JournalInfoInterface, createJournalInfo } from './journalInfoInterface';

export default function journalInfoCitation(info: JournalInfoInterface): string {
  let citation = createJournalInfo(info);
  return (noPublishingInfo(citation)) ? '' : createJournalCitation(citation.journal, citation.volume, citation.issue, citation.date);
}

function noPublishingInfo(info: JournalInfoInterface): boolean {
  return (info.journal === '' && info.volume === '' && info.issue === '' && info.date === '');
}

function createJournalCitation(title: string, vol: string, iss: string, date: string): string {
  return `${titleCitation(title, vol) + volumeCitation(vol, iss, date) + issueCitation(iss) + dateCitation(date)}:`;
}

function titleCitation(title: string, vol: string): string {
  return (title !== '' && vol !== '') ? `${title} ` : title;
}

function volumeCitation(vol: string, iss: string, date: string): string {
  return (iss !== '' || date !== '') ? `${vol},` : vol;
}

function issueCitation(iss: string): string {
  return (iss !== '') ? ` no. ${iss}` : iss;
}

function dateCitation(date: string): string {
  return (date !== '') ? ` (${date})` : date;
}
