import {Author} from "./author";

export interface CitationInterface {
    title: string;
    author?: Author;
    publisher?: string;
}
