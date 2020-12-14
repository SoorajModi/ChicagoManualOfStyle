import {Author} from "../src/author";
import {Journal} from "../src/journal";

let author = new Author("Jay", "Gatsby");

let journal = new Journal({
    title: "Periodical 123",
    author: author,
    publisher: "Oxford",
    yearOfPublication: "2000"
}, "42", "7", "1", "10");

let noAuthorJournal = new Journal({
    title: "Periodical 123",
    publisher: "Oxford",
    yearOfPublication: "2000"
}, "42", "7", "1", "10");

describe("journal.ts member variable testing", () => {
    test("should inherit member variables from periodical", () => {
        expect(journal.title).toBe("Periodical 123");
        expect(journal.author).toBe(author);
        expect(journal.publisher).toBe("Oxford");
        expect(journal.yearOfPublication).toBe("2000");
    });

    test("should have journal volume member variable", () => {
        expect(journal.volume).toBe("42");
    });

    test("should have journal issue member variable", () => {
        expect(journal.issue).toBe("7");
    });

    test("should have journal start page member variable", () => {
        expect(journal.startPage).toBe("1");
    });

    test("should have journal end page member variable", () => {
        expect(journal.endPage).toBe("10");
    });
});

describe("journal.ts note() testing", () => {
    test("should generate note citation with all elements", () => {
        expect(journal.note("1")).toBe("Jay Gatsby, \"Periodical 123,\" Oxford 42, no. 7 (2000): 1.");
    });

    test("should generate note citation with no author", () => {
        expect(noAuthorJournal.note("1")).toBe("\"Periodical 123,\" Oxford 42, no. 7 (2000): 1.");
    });
});

describe("journal.ts bibliography() testing", () => {
    test("should generate bibliography citation with all elements", () => {
        expect(journal.bibliography()).toBe("Gatsby, Jay. \"Periodical 123.\" Oxford 42, no. 7 (2000): 1-10.");
    });

    test("should generate bibliography citation with no author", () => {
        expect(noAuthorJournal.bibliography()).toBe("\"Periodical 123.\" Oxford 42, no. 7 (2000): 1-10.");
    });
});