import {
    journalBibliography,
    journalNote,
    journalShortNote
} from "../../src/Journal/journal";

let journal = {
    title: "Title", authors: [{first: "First", last: "Last"}], publisher: "Publisher",
    yearOfPublication: "Year", volume: "vol", issue: "iss", startRange: "1", endRange: "10"
};
let noAuthor = {
    title: "Title", publisher: "Publisher", yearOfPublication: "Year", volume: "vol",
    issue: "iss", startRange: "1", endRange: "10"
};
let twoAuth = {
    title: "Title",
    authors: [{first: "Author", last: "One"}, {first: "Author", last: "Two"}],
    publisher: "Publisher",
    yearOfPublication: "Year",
    volume: "vol",
    issue: "iss",
    startRange: "1",
    endRange: "10"
};
let threeAuth = {
    title: "Title",
    authors: [{first: "Author", last: "One"}, {first: "Author", last: "Two"}, {first: "Author", last: "Three"}],
    publisher: "Publisher",
    yearOfPublication: "Year",
    volume: "vol",
    issue: "iss",
    startRange: "1",
    endRange: "10"
};
let urlJournal = {
    title: "Title",
    authors: [{first: "First", last: "Last"}],
    publisher: "Publisher",
    yearOfPublication: "Year",
    volume: "vol",
    issue: "iss",
    startRange: "1",
    endRange: "10",
    url: "URL"
};

describe("journalNote() testing", () => {
    test("should create note citation with one author", () => {
        expect(journalNote(journal, {page: "1"})).toBe("First Last, \"Title,\" Publisher vol, no. iss (Year): 1.")
    });

    test("should create note citation with two authors", () => {
        expect(journalNote(twoAuth, {page: "1"})).toBe("Author One and Author Two, \"Title,\" Publisher vol, no. iss (Year): 1.")
    });

    test("should create note citation with three authors", () => {
        expect(journalNote(threeAuth, {page: "1"})).toBe("Author One, Author Two, and Author Three, \"Title,\" Publisher vol, no. iss (Year): 1.")
    });

    test("should create note citation with no authors", () => {
        expect(journalNote(noAuthor, {page: "1"})).toBe("\"Title,\" Publisher vol, no. iss (Year): 1.")
    });

    test("should create bibliography citation for journal with URL", () => {
        expect(journalNote(urlJournal, {page: "1"})).toBe("First Last, \"Title,\" Publisher vol, no. iss (Year): 1, URL.");
    });
});

describe("journalShortNote() testing",() => {
   test("should create short note citation", () => {
       expect(journalShortNote(journal, {page: "1"})).toBe("Last, 1.");
   });

    test("should create short note citation with no author", () => {
        expect(journalShortNote(noAuthor, {page: "1"})).toBe("\"Title,\" 1.");
    });
});

describe("journalBibliography() testing", () => {
    test("should create bibliography citation with one author", () => {
        expect(journalBibliography(journal)).toBe("Last, First. \"Title.\" Publisher vol, no. iss (Year): 1-10.");
    });

    test("should create bibliography citation with two author", () => {
        expect(journalBibliography(twoAuth)).toBe("One, Author, and Author Two. \"Title.\" Publisher vol, no. iss (Year): 1-10.");
    });

    test("should create bibliography citation with three authors", () => {
        expect(journalBibliography(threeAuth)).toBe("One, Author, Author Two, and Author Three. \"Title.\" Publisher vol, no. iss (Year): 1-10.");
    });

    test("should create bibliography citation with no authors", () => {
        expect(journalBibliography(noAuthor)).toBe("\"Title.\" Publisher vol, no. iss (Year): 1-10.");
    });

    test("should create bibliography citation for journal with URL", () => {
        expect(journalBibliography(urlJournal)).toBe("Last, First. \"Title.\" Publisher vol, no. iss (Year): 1-10. URL.");
    });
});
