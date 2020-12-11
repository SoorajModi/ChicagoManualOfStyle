import {Author} from "../main/author";
import {Journal} from "../main/journal";
import {ElectronicJournal} from "../main/electronicJournal";

describe("journal.ts testing", () => {
    let author = new Author("Jay", "Gatsby");
    let journal = new ElectronicJournal({
        title: "Periodical 123",
        author: author,
        publisher: "Oxford",
        yearOfPublication: "2000"
    }, "42", "7", "1", "10", "wwww.testwebsite.com");

    test("should inherit member variables from journal", () => {
        expect(journal.title).toBe("Periodical 123");
        expect(journal.author).toBe(author);
        expect(journal.publisher).toBe("Oxford");
        expect(journal.yearOfPublication).toBe("2000")
        expect(journal.volume).toBe("42");
        expect(journal.issue).toBe("7");
        expect(journal.startPage).toBe("1");
        expect(journal.endPage).toBe("10");
    });

    test("should have electronic journal website member variable", () => {
        expect(journal.url).toBe("wwww.testwebsite.com");
    });
});