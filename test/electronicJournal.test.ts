import {Author} from "../src/author";
import {Journal} from "../src/journal";
import {ElectronicJournal} from "../src/electronicJournal";

let author = new Author("Jay", "Gatsby");
let eJournal = new ElectronicJournal({
    title: "Periodical 123",
    author: author,
    publisher: "Oxford",
    yearOfPublication: "2000"
}, "42", "7", "1", "10", "wwww.testwebsite.com");

let noAuthorEJournal = new ElectronicJournal({
    title: "Periodical 123",
    publisher: "Oxford",
    yearOfPublication: "2000"
}, "42", "7", "1", "10", "wwww.testwebsite.com");

describe("electronicJournal.ts testing", () => {
    test("should inherit member variables from journal", () => {
        expect(eJournal.title).toBe("Periodical 123");
        expect(eJournal.author).toBe(author);
        expect(eJournal.publisher).toBe("Oxford");
        expect(eJournal.yearOfPublication).toBe("2000");
        expect(eJournal.volume).toBe("42");
        expect(eJournal.issue).toBe("7");
        expect(eJournal.startPage).toBe("1");
        expect(eJournal.endPage).toBe("10");
    });

    test("should have electronic journal website member variable", () => {
        expect(eJournal.url).toBe("wwww.testwebsite.com");
    });
});

describe("electronicJournal.eNote() testing", () => {
    test("should generate note citation with all elements:", () => {
       expect(eJournal.eNote("1")).toBe("Jay Gatsby, \"Periodical 123,\" Oxford 42, no. 7 (2000): 1, wwww.testwebsite.com.");
    });

    test("should generate note citation with missing author field", () => {
        expect(noAuthorEJournal.eNote("1")).toBe("\"Periodical 123,\" Oxford 42, no. 7 (2000): 1, wwww.testwebsite.com.");
    });
});

describe("electronicJournal.eBibliography() testing", () => {
   test("should generate bibliography citation with all elements", () => {
       expect(eJournal.eBibliography()).toBe("Gatsby, Jay. \"Periodical 123.\" Oxford 42, no. 7 (2000): 1-10. wwww.testwebsite.com.");
   });

    test("should generate bibliography citation with missing author field", () => {
        expect(noAuthorEJournal.eBibliography()).toBe("\"Periodical 123.\" Oxford 42, no. 7 (2000): 1-10. wwww.testwebsite.com.");
    });
});