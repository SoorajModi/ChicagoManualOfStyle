import {Book} from "../src/book"

describe("Check for title", () => {
    test("should have title", () => {
        let book = new Book("title");
        expect(book.str()).toBe("Title is title");
    });
});