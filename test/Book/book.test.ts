import {bookNote, bookBibliography, eBookNote, eBookBibliography, bookShortNote} from "../../src/Book/book";

let book = {
    title: "The Great Gatsby",
    authorList: [{first: "F. Scott", last: "Fitzgerald"}],
    publisher: "Charles Scribner's Sons",
    placeOfPublication: "New York",
    yearOfPublication: "2000"
};
let noAuthorBook = {
    title: "The Great Gatsby",
    publisher: "Charles Scribner's Sons",
    placeOfPublication: "New York",
    yearOfPublication: "2000"
};
let twoAuthBook = {
    title: "The Great Gatsby",
    authorList: [
        {first: "F. Scott", last: "Fitzgerald"},
        {first: "Author", last: "Two"}
    ],
    publisher: "Charles Scribner's Sons",
    placeOfPublication: "New York",
    yearOfPublication: "2000"
};
let threeAuthBook = {
    title: "The Great Gatsby",
    authorList: [
        {first: "F. Scott", last: "Fitzgerald"},
        {first: "Author", last: "Two"},
        {first: "Author", last: "Three"}
    ],
    publisher: "Charles Scribner's Sons",
    placeOfPublication: "New York",
    yearOfPublication: "2000"
};
let fourAuthBook = {
    title: "The Great Gatsby",
    authorList: [
        {first: "F. Scott", last: "Fitzgerald"},
        {first: "Author", last: "Two"},
        {first: "Author", last: "Three"},
        {first: "Author", last: "Four"}
    ],
    publisher: "Charles Scribner's Sons",
    placeOfPublication: "New York",
    yearOfPublication: "2000"
};
let sixAuthBook = {
    title: "The Great Gatsby",
    authorList: [
        {first: "F. Scott", last: "Fitzgerald"},
        {first: "Author", last: "Two"},
        {first: "Author", last: "Three"},
        {first: "Author", last: "Four"},
        {first: "Author", last: "Five"},
        {first: "Author", last: "Six"}
    ],
    publisher: "Charles Scribner's Sons",
    placeOfPublication: "New York",
    yearOfPublication: "2000"
};
let editor = {
    title: 'Title',
    publisher: "Publisher",
    placeOfPublication: "Place",
    yearOfPublication: "Year",
    editor: [{first: "First", last: "Last"}],
};

describe("Book.note() testing", () => {
    test("should create note citation with no author", () => {
        expect(bookNote(noAuthorBook, "1")).toBe("The Great Gatsby (New York: Charles Scribner's Sons, 2000), 1.");
    });

    test("should create note with one author", () => {
        expect(bookNote(book, "1")).toBe("F. Scott Fitzgerald, The Great Gatsby (New York: Charles Scribner's Sons, 2000), 1.");
    });

    test("should create note citation with two authors", () => {
        expect(bookNote(twoAuthBook,  "1")).toBe("F. Scott Fitzgerald and Author Two, The Great Gatsby (New York: Charles Scribner's Sons, 2000), 1.");
    });

    test("should create note citation with three authors", () => {
        expect(bookNote(threeAuthBook, "1")).toBe("F. Scott Fitzgerald, Author Two, and Author Three, The Great Gatsby (New York: Charles Scribner's Sons, 2000), 1.");
    });

    test("should create note citation with four+ authors", () => {
        expect(bookNote(fourAuthBook, "1")).toBe("F. Scott Fitzgerald et al., The Great Gatsby (New York: Charles Scribner's Sons, 2000), 1.");
    });

    it("should generate note citation for book with editor field specified", () => {
        expect(bookNote(editor, "Page")).toBe("First Last, ed., Title (Place: Publisher, Year), Page.");
    });
});

describe("Book.shortNote() testing", () => {
    test("should create short note", () => {
        expect(bookShortNote(book, "1")).toBe("Fitzgerald, 1.");
    });

    test("should create short note with no author", () => {
        expect(bookShortNote(noAuthorBook, "1")).toBe("The Great Gatsby, 1.");
    });

    test("should create short note with no author", () => {
        expect(bookShortNote(editor, "1")).toBe("Last, 1.");
    });
});

describe("Book.bibliography() testing", () => {
    test("should create bibliography citation with no author", () => {
        expect(bookBibliography(noAuthorBook)).toBe("The Great Gatsby. New York: Charles Scribner's Sons, 2000.");
    });

    test("should create bibliography with one author", () => {
        expect(bookBibliography(book)).toBe("Fitzgerald, F. Scott. The Great Gatsby. New York: Charles Scribner's Sons, 2000.");
    });

    test("should create bibliography citation with two authors", () => {
        expect(bookBibliography(twoAuthBook)).toBe("Fitzgerald, F. Scott, and Author Two. The Great Gatsby. New York: Charles Scribner's Sons, 2000.");
    });

    test("should create bibliography citation with three authors", () => {
        expect(bookBibliography(threeAuthBook)).toBe("Fitzgerald, F. Scott, Author Two, and Author Three. The Great Gatsby. New York: Charles Scribner's Sons, 2000.");
    });

    test("should create bibliography citation with four authors", () => {
        expect(bookBibliography(fourAuthBook)).toBe("Fitzgerald, F. Scott, Author Two, Author Three, and Author Four. The Great Gatsby. New York: Charles Scribner's Sons, 2000.");
    });

    test("should create bibliography citation with four+ authors", () => {
        expect(bookBibliography(sixAuthBook)).toBe("Fitzgerald, F. Scott, Author Two, Author Three, Author Four, Author Five, and Author Six. " +
            "The Great Gatsby. New York: Charles Scribner's Sons, 2000.");
    });

    test('should generate bibliography for book with editor field specified', () => {
        expect(bookBibliography(editor)).toBe("Last, First, ed. Title. Place: Publisher, Year.");
    });
});

describe("Book.eNote() testing", () => {
    test("should create book note citation with URL", () => {
        expect(eBookNote(book, "1", "www.thegreatgatsby.com")).toBe("F. Scott Fitzgerald, The Great Gatsby (New York: Charles Scribner's Sons, 2000), 1, www.thegreatgatsby.com.");
    });
});
