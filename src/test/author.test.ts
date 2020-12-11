import {Author} from "../main/author";

describe("Author.ts testing", () => {

    let author = new Author("F. Scott", "Fitzgerald");

    test("should have first name", () => {
        expect(author.first).toBe("F. Scott");
    });

    test("should have last name", () => {
        expect(author.last).toBe("Fitzgerald")
    });

    test("should print name forwards", () => {
       expect(author.toString()).toBe("F. Scott Fitzgerald");
    });

    test("should print name in reverse order", () => {
       expect(author.toReverseString()).toBe("Fitzgerald, F. Scott");
    });
});
