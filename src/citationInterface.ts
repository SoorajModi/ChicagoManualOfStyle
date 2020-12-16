export interface CitationInterface {
    title: string;
    authorList?: { first: string, last: string }[];
    publisher?: string;
    placeOfPublication?: string;
    yearOfPublication?: string;
    volume?: string;
    issue?: string;
    pageRange?: string;
    url?: string;
}
