import {Author} from "../main/author";
import {Periodical} from "../main/periodical";

describe("periodical.ts testing", () => {
    let author = new Author("Jay", "Gatsby");
    let periodical = new Periodical("Periodical 123", author, "Oxford", "2000");

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
});