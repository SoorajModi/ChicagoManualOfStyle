import {Book} from "../src/book"

describe("Book.ts testing", () => {

    let book = new Book("title");

    test("should have title member variable", () => {
        expect(book.str()).toBe("Title is title");
    });
});