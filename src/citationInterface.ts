import {Author} from "./author";

export interface CitationInterface {
    title: string;
    author?: Author;
    authorList?: {first: string, last: string}[];
    publisher?: string;
    placeOfPublication?: string;
    yearOfPublication?: string;
    volume?: string;
    issue?: string;
    pageRange?: string;
    url?: string;
}
