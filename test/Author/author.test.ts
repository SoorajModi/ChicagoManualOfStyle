import Author from "../../src/Author/author";

describe("Author.ts testing", () => {

    let author = new Author("F. Scott", "Fitzgerald");

    test("should have first name", () => {
        expect(author.first).toBe("F. Scott");
    });

    test("should have last name", () => {
        expect(author.last).toBe("Fitzgerald")
    });

    test("should print author in note form", () => {
        expect(author.noteString()).toBe("F. Scott Fitzgerald, ");
    });

    test("should print author in bibliography form", () => {
        expect(author.bibliographyString()).toBe("Fitzgerald, F. Scott. ");
    });

    test("should return true if empty", () => {
        expect(new Author().isEmpty()).toBe(true);
    });
});
