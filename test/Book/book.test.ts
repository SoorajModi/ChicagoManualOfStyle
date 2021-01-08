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
let editorInsteadOFAuthors = {
    title: 'Title',
    publisher: "Publisher",
    placeOfPublication: "Place",
    yearOfPublication: "Year",
    editor: [{first: "First", last: "Last"}],
};
let editorAndAuthor = {
    title: 'Title',
    authorList: [{first: "First", last: "Last"}],
    publisher: "Publisher",
    placeOfPublication: "Place",
    yearOfPublication: "Year",
    editor: [{first: "First", last: "Last"}],
};
let edition = {
    title: 'Title',
    authorList: [{first: "First", last: "Last"}],
    publisher: "Publisher",
    placeOfPublication: "Place",
    yearOfPublication: "Year",
    edition: "Edition",
};
let editionAndEditor = {
    title: 'Title',
    authorList: [{first: "First", last: "Last"}],
    publisher: "Publisher",
    placeOfPublication: "Place",
    yearOfPublication: "Year",
    editor: [{first: "First", last: "Last"}],
    edition: "Edition",
};

describe("Book.note() testing", () => {
    it("should create note citation with no author", () => {
        expect(bookNote(noAuthorBook, "1")).toBe("The Great Gatsby (New York: Charles Scribner's Sons, 2000), 1.");
    });

    it("should create note with one author", () => {
        expect(bookNote(book, "1")).toBe("F. Scott Fitzgerald, The Great Gatsby (New York: Charles Scribner's Sons, 2000), 1.");
    });

    it("should create note citation with two authors", () => {
        expect(bookNote(twoAuthBook,  "1")).toBe("F. Scott Fitzgerald and Author Two, The Great Gatsby (New York: Charles Scribner's Sons, 2000), 1.");
    });

    it("should create note citation with three authors", () => {
        expect(bookNote(threeAuthBook, "1")).toBe("F. Scott Fitzgerald, Author Two, and Author Three, The Great Gatsby (New York: Charles Scribner's Sons, 2000), 1.");
    });

    it("should create note citation with four+ authors", () => {
        expect(bookNote(fourAuthBook, "1")).toBe("F. Scott Fitzgerald et al., The Great Gatsby (New York: Charles Scribner's Sons, 2000), 1.");
    });

    it("should generate note citation for book with no author editor field specified", () => {
        expect(bookNote(editorInsteadOFAuthors, "Page")).toBe("First Last, ed., Title (Place: Publisher, Year), Page.");
    });

    it("should generate note citation for book with authors and editor specified", () => {
        expect(bookNote(editorAndAuthor, "Page")).toBe("First Last, Title, ed. First Last (Place: Publisher, Year), Page.");
    });

    it("should generate note citation for book with edition", () => {
        expect(bookNote(edition, "Page")).toBe("First Last, Title, Edition (Place: Publisher, Year), Page.")
    });

    it("should generate note citation for book with edition and editor", () => {
        expect(bookNote(editionAndEditor, "Page")).toBe("First Last, Title, ed. First Last, Edition (Place: Publisher, Year), Page.")
    });
});

describe("Book.shortNote() testing", () => {
    it("should create short note", () => {
        expect(bookShortNote(book, "1")).toBe("Fitzgerald, 1.");
    });

    it("should create short note with no author", () => {
        expect(bookShortNote(noAuthorBook, "1")).toBe("The Great Gatsby, 1.");
    });

    it("should create short note with no author", () => {
        expect(bookShortNote(editorInsteadOFAuthors, "1")).toBe("Last, 1.");
    });
});

describe("Book.bibliography() testing", () => {
    it("should create bibliography citation with no author", () => {
        expect(bookBibliography(noAuthorBook)).toBe("The Great Gatsby. New York: Charles Scribner's Sons, 2000.");
    });

    it("should create bibliography with one author", () => {
        expect(bookBibliography(book)).toBe("Fitzgerald, F. Scott. The Great Gatsby. New York: Charles Scribner's Sons, 2000.");
    });

    it("should create bibliography citation with two authors", () => {
        expect(bookBibliography(twoAuthBook)).toBe("Fitzgerald, F. Scott, and Author Two. The Great Gatsby. New York: Charles Scribner's Sons, 2000.");
    });

    it("should create bibliography citation with three authors", () => {
        expect(bookBibliography(threeAuthBook)).toBe("Fitzgerald, F. Scott, Author Two, and Author Three. The Great Gatsby. New York: Charles Scribner's Sons, 2000.");
    });

    it("should create bibliography citation with four authors", () => {
        expect(bookBibliography(fourAuthBook)).toBe("Fitzgerald, F. Scott, Author Two, Author Three, and Author Four. The Great Gatsby. New York: Charles Scribner's Sons, 2000.");
    });

    it("should create bibliography citation with four+ authors", () => {
        expect(bookBibliography(sixAuthBook)).toBe("Fitzgerald, F. Scott, Author Two, Author Three, Author Four, Author Five, and Author Six. " +
            "The Great Gatsby. New York: Charles Scribner's Sons, 2000.");
    });

    it('should generate bibliography for book with editor field specified', () => {
        expect(bookBibliography(editorInsteadOFAuthors)).toBe("Last, First, ed. Title. Place: Publisher, Year.");
    });

    it("should generate note citation for book with authors and editor specified", () => {
        expect(bookBibliography(editorAndAuthor)).toBe("Last, First. Title. Edited by First Last. Place: Publisher, Year.");
    });

    it('should generate bibliography for book with edition', () => {
        expect(bookBibliography(edition)).toBe("Last, First. Title. Edition. Place: Publisher, Year.");
    });

    it("should generate bibliography for book with edition and editor", () => {
        expect(bookBibliography(editionAndEditor)).toBe("Last, First. Title. Edited by First Last, Edition. Place: Publisher, Year.");
    });
});

describe("Book.eNote() testing", () => {
    it("should create book note citation with URL", () => {
        expect(eBookNote(book, "1", "www.thegreatgatsby.com")).toBe("F. Scott Fitzgerald, The Great Gatsby (New York: Charles Scribner's Sons, 2000), 1, www.thegreatgatsby.com.");
    });
});
