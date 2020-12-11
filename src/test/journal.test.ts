import {Author} from "../main/author";
import {Journal} from "../main/journal";

describe("journal.ts testing", () => {
    let author = new Author("Jay", "Gatsby");
    let journal = new Journal({
        title: "Periodical 123",
        author: author,
        publisher: "Oxford",
        yearOfPublication: "2000"
    }, "42", "7", "1", "10");

    test("should inherit member variables from periodical", () => {
        expect(journal.title).toBe("Periodical 123");
        expect(journal.author).toBe(author);
        expect(journal.publisher).toBe("Oxford");
        expect(journal.yearOfPublication).toBe("2000")
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