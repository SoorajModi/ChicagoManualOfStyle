import {Author} from "../src/author";
import {Periodical} from "../src/periodical";

let author = new Author("Jay", "Gatsby");
let periodical = new Periodical({
    title: "Periodical 123",
    author: author,
    publisher: "Oxford",
    yearOfPublication: "2000"
});

describe("periodical.ts testing", () => {
    test("should have title member variable", () => {
        expect(periodical.title).toBe("Periodical 123");
    });

    test("should have author member variable", () => {
        expect(periodical.author).toBe(author);
    });

    test("should have publisher member variable", () => {
        expect(periodical.publisher).toBe("Oxford");
    });

    test("should have periodical year of publication member variable", () => {
        expect(periodical.yearOfPublication).toBe("2000")
    });

    test("should have empty author member variable", () => {
        let p = new Periodical({title: "Periodical 123", publisher: "Oxford", yearOfPublication: "2000"});
        expect(p.author.noteString()).toBe("")
    });

    test("should have empty publisher member variable", () => {
        let p = new Periodical({title: "Periodical 123", author: author, yearOfPublication: "2000"});
        expect(p.publisher).toBe("");
    });

    test("should have empty year of publication member variable", () => {
        let p = new Periodical({title: "Periodical 123", author: author, publisher: "Oxford"});
        expect(p.yearOfPublication).toBe("");
    });
});