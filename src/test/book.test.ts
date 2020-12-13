import {Book} from "../main/book"
import {Author} from "../main/author";

describe("Book.ts testing", () => {
    let author = new Author("F. Scott", "Fitzgerald");
    let book = new Book({
        title: "The Great Gatsby",
        author: author,
        publisher: "Charles Scribner's Sons",
        placeOfPublication: "New York",
        yearOfPublication: "2000"
    });

    test("should have title member variable", () => {
        expect(book.title).toBe("The Great Gatsby");
    });

    test("should have author member variable", () => {
        expect(book.author).toBe(author);
    });

    test("should have publisher member variable", () => {
        expect(book.publisher).toBe("Charles Scribner's Sons");
    });

    test("should have place of publication member variable", () => {
        expect(book.placeOfPublication).toBe("New York");
    });

    test("should have year of publication member variable", () => {
        expect(book.yearOfPublication).toBe("2000")
    });

    test("should create note with all fields passed", () => {
       expect(book.note("1")).toBe("F. Scott Fitzgerald, The Great Gatsby (New York: Charles Scribner's Sons, 2000), 1.");
    });

    test("should create footnote with all fields", () => {
       expect(book.bibliography()).toBe("Fitzgerald, F. Scott. The Great Gatsby. New York: Charles Scribner's Sons, 2000.");
    });

    test("should create note and bibliography with no author", () => {
        let noAuthorBook = new Book({
            title: "The Great Gatsby",
            publisher: "Charles Scribner's Sons",
            placeOfPublication: "New York",
            yearOfPublication: "2000"
        });
        expect(noAuthorBook.note("1")).toBe("The Great Gatsby (New York: Charles Scribner's Sons, 2000), 1.");
        expect(noAuthorBook.bibliography()).toBe("The Great Gatsby. New York: Charles Scribner's Sons, 2000.");
    });

});