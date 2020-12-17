export interface BookInterface {
    title: string;
    authorList?: { first: string, last: string }[];
    publisher?: string;
    placeOfPublication?: string;
    yearOfPublication?: string;
    url?: string;
}