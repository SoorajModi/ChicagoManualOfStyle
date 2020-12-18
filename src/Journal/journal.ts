import {JournalInterface} from "./journalInterface";

const {journalInfoCitation} = require("./journalInfo");
const {createJournal} = require("./journalInterface");
const {getRange} = require("./pageRange");

function journalNote(info: JournalInterface, page: string): string {
    let citation = createJournal(info);
    return citation.authorList.note() + "\"" + citation.title + ",\" " + journalInfoCitation(citation.info) + " " + page + ".";
}

function journalBibliography(info: JournalInterface): string {
    let citation = createJournal(info);
    return citation.authorList.bibliography() + "\"" + citation.title + ".\" " + journalInfoCitation(citation.info) + " " + getRange(info.startRange, info.endRange) + ".";
}

function eJournalNote(info: JournalInterface, page: string, url: string): string {
    return ((journalNote(info, page)).replace(/.$/, ", ") + url + ".");
}

function eJournalBibliography(info: JournalInterface, url: string): string {
    return (journalBibliography(info) + " " + url + ".");
}

module.exports = {
    journalNote: journalNote,
    journalBibliography: journalBibliography,
    eJournalNote: eJournalNote,
    eJournalBibliography: eJournalBibliography
};