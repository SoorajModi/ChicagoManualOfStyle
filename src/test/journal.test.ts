import {Author} from "../main/author";
import {Journal} from "../main/journal";

describe("Book.ts testing", () => {
    let author = new Author("Jay", "Gatsby");
    let journal = new Journal("Journal 123", author, "Oxford");

    test("should have title member variable", () => {
        expect(journal.title).toBe("The Great Gatsby");
    });

    test("should have author member variable", () => {
        expect(journal.author).toBe(author);
    });

    test("should have publisher member variable", () => {
        expect(journal.publisher).toBe("Oxford");
    });
});