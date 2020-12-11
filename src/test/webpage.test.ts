import {Author} from "../main/author";
import {Webpage} from "../main/webpage";

describe("webpage.ts tests", () => {
   let author = new Author("Jay", "Gatsby");
   let webpage = new Webpage("Title of webpage", author, "2000", "www.mywebsite.com");

   test("should have title member variable", () => {
      expect(webpage.title).toBe("Title of webpage");
   });

   test("should have author member variable", () => {
      expect(webpage.author).toBe(author);
   });

   test("should have date member variable", () => {
      expect(webpage.date).toBe("2000");
   });

   test("should have url member variable", () => {
      expect(webpage.url).toBe("www.mywebsite.com");
   });
});