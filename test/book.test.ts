import {Book} from "../src/book"
import {Author} from "../src/author";

let author = new Author("F. Scott", "Fitzgerald");
let book = new Book({
    title: "The Great Gatsby",
    authorList: [{first: "F. Scott", last: "Fitzgerald"}],
    publisher: "Charles Scribner's Sons",
    placeOfPublication: "New York",
    yearOfPublication: "2000"
});

let noAuthorBook = new Book({
    title: "The Great Gatsby",
    publisher: "Charles Scribner's Sons",
    placeOfPublication: "New York",
    yearOfPublication: "2000"
});

describe("Book.ts member variable testing", () => {
    test("should have title member variable", () => {
        expect(book.title).toBe("The Great Gatsby");
    });

    test("should have author list member variable", () => {
        expect(book.authorList).toStrictEqual([new Author("F. Scott", "Fitzgerald")]);
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

    test("should set member variables to empty if undefined", () => {
        let emptyCitation = new Book({
            title: "The Great Gatsby",
            author: author,
        });
        expect(emptyCitation.placeOfPublication).toBe("");
        expect(emptyCitation.publisher).toBe("");
        expect(emptyCitation.yearOfPublication).toBe("");
    });

    test("foo", () => {
       expect(book.authorListNote()).toBe("F. Scott Fitzgerald, ")
    });
});

describe("Book.note() testing", () => {
    test("should create note with all fields passed", () => {
        expect(book.note("1")).toBe("F. Scott Fitzgerald, The Great Gatsby (New York: Charles Scribner's Sons, 2000), 1.");
    });

    test("should create note and bibliography with no author", () => {
        expect(noAuthorBook.note("1")).toBe("The Great Gatsby (New York: Charles Scribner's Sons, 2000), 1.");
    });
});

describe("Book.bibliography() testing", () => {
    test("should create bibliography with all fields", () => {
        expect(book.bibliography()).toBe("Fitzgerald, F. Scott. The Great Gatsby. New York: Charles Scribner's Sons, 2000.");
    });
});
