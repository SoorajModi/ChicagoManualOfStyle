export interface WebpageInterface {
    title: string;
    nameOfSite: string;
    url: string;
    authorList?: { first: string, last: string }[];
    publisher?: string;
    date?: string;
}
