import {BookInterface} from "./Book/bookInterface";
import {Book} from "./Book/book";
import {JournalInterface} from "./Journal/journalInterface";
import {Journal} from "./Journal/journal";
import {WebpageInterface} from "./Website/webpageInterface";
import {Webpage} from "./Website/webpage";
import {LectureInterface} from "./Lecture/lectureInterface";
import {Lecture} from "./Lecture/lecture";

function createBookCitation(info: BookInterface, pages: string[]) {
    let citation: Book = new Book(info);

    let notes: string[] = [];

    for (let page of pages) {
        notes.push(citation.note(page));
    }

    return {bibliography: citation.bibliography(), notes: notes};
}

function createEBookCitation(info: BookInterface, pages: string[]) {
    if (!info.url) throw new Error("URL not specified");
    let citation: Book = new Book(info);

    let notes: string[] = [];

    for (let page of pages) {
        notes.push(citation.eNote(page, info.url));
    }

    return {bibliography: citation.eBibliography(info.url), notes: notes};
}

function createJournalCitation(info: JournalInterface, pages: string[]) {
    let citation: Journal = new Journal(info);

    let notes: string[] = [];

    for (let page of pages) {
        notes.push(citation.note(page));
    }

    return {bibliography: citation.bibliography(), notes: notes};
}

function createEJournalCitation(info: JournalInterface, pages: string[]) {
    if (!info.url) throw new Error("URL not specified");
    let citation: Journal = new Journal(info);

    let notes: string[] = [];

    for (let page of pages) {
        notes.push(citation.eNote(page, info.url));
    }

    return {bibliography: citation.eBibliography(info.url), notes: notes};
}

function createWebpageCitation(info: WebpageInterface) {
    let citation: Webpage = new Webpage(info);
    return {bibliography: citation.bibliography(), note: [citation.note()]};
}

function createLectureCitation(info: LectureInterface) {
    let citation: Lecture = new Lecture(info);
    return {bibliography: citation.bibliography(), note: [citation.note()]};
}

module.exports = {
    createBookCitation: createBookCitation,
    createEBookCitation: createEBookCitation,
    createJournalCitation: createJournalCitation,
    createEJournalCitation: createEJournalCitation,
    createWebpageCitation: createWebpageCitation,
    createLectureCitation: createLectureCitation
};