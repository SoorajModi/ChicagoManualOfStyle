import {BookInterface} from "./Book/bookInterface";
import {Book} from "./Book/book";
import {JournalInterface} from "./Journal/journalInterface";
import {WebpageInterface} from "./Website/webpageInterface";
import {LectureInterface} from "./Lecture/lectureInterface";

const {webpageNote, webpageBibliography} = require("./Website/webpage");
const {lectureNote, lectureBibliography} = require("./Lecture/lecture");
const {journalNote, journalBibliography, eJournalNote, eJournalBibliography} = require("./Journal/journal");

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
    let bib = journalBibliography(info);

    let notes: string[] = [];

    for (let page of pages) {
        notes.push(journalNote(info, page));
    }

    return {bibliography: bib, notes: notes};
}

function createEJournalCitation(info: JournalInterface, pages: string[]) {
    if (!info.url) throw new Error("URL not specified");

    let bib = eJournalBibliography(info, info.url);

    let notes: string[] = [];
    for (let page of pages) {
        notes.push(eJournalNote(info, page, info.url));
    }

    return {bibliography: bib, notes: notes};
}

function createWebpageCitation(info: WebpageInterface) {
    let note: string = webpageNote(info);
    let bib: string = webpageBibliography(info);
    return {bibliography: bib, note: [note]};
}

function createLectureCitation(info: LectureInterface) {
    let note: string = lectureNote(info);
    let bib: string = lectureBibliography(info);
    return {bibliography: bib, note: [note]};
}

module.exports = {
    createBookCitation: createBookCitation,
    createEBookCitation: createEBookCitation,
    createJournalCitation: createJournalCitation,
    createEJournalCitation: createEJournalCitation,
    createWebpageCitation: createWebpageCitation,
    createLectureCitation: createLectureCitation
};