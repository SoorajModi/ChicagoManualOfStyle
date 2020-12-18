import {AuthorList} from "../Author/authorList";

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

function createJournal(info: JournalInterface) {
    return {
        title: info.title,
        authorList: new AuthorList(info.authorList || []),
        info: {
            journal: info.publisher || "",
            date: info.yearOfPublication || "",
            volume: info.volume || "",
            issue: info.issue || ""
        },
        startRange: info.startRange || "",
        endRange: info.endRange || "",
        url: info.url || ""
    }
}

module.exports = {
    createJournal: createJournal
};