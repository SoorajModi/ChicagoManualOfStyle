import Person from "../../src/Author/person";

describe("Person.ts testing", () => {

    let author = new Person("F. Scott", "Fitzgerald");

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
        expect(new Person().isEmpty()).toBe(true);
    });
});
