import {AuthorList} from "../Author/authorList";

export interface WebpageInterface {
    title: string;
    nameOfSite: string;
    url: string;
    authorList?: { first: string, last: string }[];
    publisher?: string;
    date?: string;
}

function createWebpage(info: WebpageInterface): any {
    return {
        title: info.title,
        nameOfSite: info.nameOfSite,
        url: info.url,
        authorList: new AuthorList(info.authorList || []),
        publisher: info.publisher || "",
        date: info.date || "",
    }
}

module.exports = {
  createWebpage: createWebpage
};