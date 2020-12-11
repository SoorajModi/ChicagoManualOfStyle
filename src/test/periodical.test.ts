import {Author} from "../main/author";
import {Periodical} from "../main/periodical";

describe("periodical.ts testing", () => {
    let author = new Author("Jay", "Gatsby");
    let periodical = new Periodical({title: "Periodical 123", author: author, publisher: "Oxford"}, "2000");

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
        let p = new Periodical({title: "Periodical 123", publisher: "Oxford"}, "2000");
        expect(p.author.toString()).toBe("")
    });

    test("should have empty publisher member variable", () => {
        let p = new Periodical({title: "Periodical 123", author: author}, "2000");
        expect(p.publisher).toBe("");
    });
});