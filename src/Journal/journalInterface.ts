export interface JournalInterface {
    title: string;
    authorList?: { first: string, last: string }[];
    publisher?: string;
    yearOfPublication?: string;
    volume?: string;
    issue?: string;
    startRange?: string,
    endRange?: string,
    url?: string;
}