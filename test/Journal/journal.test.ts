import {
    journalNote,
    journalBibliography,
    eJournalNote,
    eJournalBibliography,
    journalShortNote
} from "../../src/Journal/journal";

let journal = {
    title: "Title", authorList: [{first: "First", last: "Last"}], publisher: "Publisher",
    yearOfPublication: "Year", volume: "vol", issue: "iss", startRange: "1", endRange: "10"
};
let noAuthor = {
    title: "Title", publisher: "Publisher", yearOfPublication: "Year", volume: "vol",
    issue: "iss", startRange: "1", endRange: "10"
};
let twoAuth = {
    title: "Title",
    authorList: [{first: "Author", last: "One"}, {first: "Author", last: "Two"}],
    publisher: "Publisher",
    yearOfPublication: "Year",
    volume: "vol",
    issue: "iss",
    startRange: "1",
    endRange: "10"
};
let threeAuth = {
    title: "Title",
    authorList: [{first: "Author", last: "One"}, {first: "Author", last: "Two"}, {first: "Author", last: "Three"}],
    publisher: "Publisher",
    yearOfPublication: "Year",
    volume: "vol",
    issue: "iss",
    startRange: "1",
    endRange: "10"
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
});

describe("journal.eNote() testing", () => {
    test("should create bibliography citation for electronic journal", () => {
        expect(eJournalNote(journal, {page: "1"}, "www.test.com")).toBe("First Last, \"Title,\" Publisher vol, no. iss (Year): 1, www.test.com.");
    });
});

describe("journal.eBibliography() testing", () => {
    test("should create bibliography citation for electronic journal", () => {
        expect(eJournalBibliography(journal, "www.test.com")).toBe("Last, First. \"Title.\" Publisher vol, no. iss (Year): 1-10. www.test.com.");
    });
});
