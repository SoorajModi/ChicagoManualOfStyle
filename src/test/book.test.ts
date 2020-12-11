import {Book} from "../main/book"
import {Author} from "../main/author";

describe("Book.ts testing", () => {
    let author = new Author("F. Scott", "Fitzgerald");
    let book = new Book({title: "The Great Gatsby", author: author, publisher: "Charles Scribner's Sons"}, "New York", "2000");

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
});