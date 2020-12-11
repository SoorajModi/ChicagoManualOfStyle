import {ElectronicBook} from "../main/electronicBook";
import {Author} from "../main/author";

describe("electronicBook.ts test", () => {
    let author = new Author("F. Scott", "Fitzgerald");
    let eBook = new ElectronicBook({
        title: "The Great Gatsby",
        author: author,
        publisher: "Charles Scribner's Sons",
        placeOfPublication: "New York",
        yearOfPublication: "2000"
    }, "www.testwebsite.com");

    test("should inherit Book member variables", () => {
        expect(eBook.title).toBe("The Great Gatsby");
        expect(eBook.author).toBe(author);
        expect(eBook.publisher).toBe("Charles Scribner's Sons");
        expect(eBook.placeOfPublication).toBe("New York");
        expect(eBook.yearOfPublication).toBe("2000");
    });

    test("should have url member variable", () => {
        expect(eBook.url).toBe("www.testwebsite.com");
    });
});