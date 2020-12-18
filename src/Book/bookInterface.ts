import {AuthorList} from "../Author/authorList";

export interface BookInterface {
    title: string;
    authorList?: { first: string, last: string }[];
    publisher?: string;
    placeOfPublication?: string;
    yearOfPublication?: string;
    url?: string;
}

function createBook(info: BookInterface) {
    return {
        title: info.title,
        authorList: new AuthorList(info.authorList || []),
        info: {
            publisher: info.publisher || "",
            placeOfPublication: info.placeOfPublication || "",
            yearOfPublication: info.yearOfPublication || ""
        }
    }
}

module.exports = {
    createBook: createBook
};