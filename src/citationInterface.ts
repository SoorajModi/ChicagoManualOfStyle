import {Author} from "./author";

export interface CitationInterface {
    title: string;
    author?: Author;
    publisher?: string;
    placeOfPublication?: string;
    yearOfPublication?: string;
    url?: string;
}
