import {bookNote, bookBibliography, eBookNote, eBookBibliography} from "../../src/Book/book";

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

describe("Book.note() testing", () => {
    test("should create note citation with no author", () => {
        expect(bookNote(noAuthorBook, "1")).toBe("The Great Gatsby (New York: Charles Scribner's Sons, 2000), 1.");
    });

    test("should create note with one author", () => {
        expect(bookNote(book, "1")).toBe("F. Scott Fitzgerald, The Great Gatsby (New York: Charles Scribner's Sons, 2000), 1.");
    });

    test("should create note citation with two authors", () => {
        expect(bookNote(twoAuthBook, "1")).toBe("F. Scott Fitzgerald and Author Two, The Great Gatsby (New York: Charles Scribner's Sons, 2000), 1.");
    });

    test("should create note citation with three authors", () => {
        expect(bookNote(threeAuthBook, "1")).toBe("F. Scott Fitzgerald, Author Two, and Author Three, The Great Gatsby (New York: Charles Scribner's Sons, 2000), 1.");
    });

    test("should create note citation with four+ authors", () => {
        expect(bookNote(fourAuthBook, "1")).toBe("F. Scott Fitzgerald et al., The Great Gatsby (New York: Charles Scribner's Sons, 2000), 1.");
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
        expect(bookBibliography(sixAuthBook)).toBe("Fitzgerald, F. Scott, Author Two, Author Three, Author Four, Author Five, and Author Six. " +
            "The Great Gatsby. New York: Charles Scribner's Sons, 2000.");
    });
});

describe("Book.eNote() testing", () => {
    test("should create book note citation with URL", () => {
        expect(eBookNote(book, "1", "www.thegreatgatsby.com")).toBe("F. Scott Fitzgerald, The Great Gatsby (New York: Charles Scribner's Sons, 2000), 1, www.thegreatgatsby.com.");
    });
});

describe("Book.eBibliography() testing", () => {
    test("should create book bibliography citation with URL", () => {
        expect(eBookBibliography(book, "www.thegreatgatsby.com")).toBe("Fitzgerald, F. Scott. The Great Gatsby. New York: Charles Scribner's Sons, 2000. www.thegreatgatsby.com.");
    });
});
