import {AuthorList} from "../Author/authorList";
import {BookInfoInterface} from "./bookInfoInterface";

export interface BookInterface {
    title: string;
    authorList?: { first: string, last: string }[];
    publisher?: string;
    placeOfPublication?: string;
    yearOfPublication?: string;
    url?: string;
}

function createBook(info: BookInterface): {title: string, authorList: AuthorList, info: BookInfoInterface} {
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

export {createBook};
