import {Author} from "../main/author";
import {Webpage} from "../main/webpage";

describe("webpage.ts tests", () => {
   let author = new Author("Jay", "Gatsby");
   let webpage = new Webpage({title: "Title of webpage", author: author, publisher: "testPublisher"}, "2000", "wwww.testwebsite.com");
   let webpage1 = new Webpage({title: "Title of webpage", author: author}, "2000", "wwww.testwebsite.com");
   let webpage2 = new Webpage({title: "Title of webpage", publisher: "testPublisher"}, "2000", "wwww.testwebsite.com");

   test("should have title member variable", () => {
      expect(webpage.title).toBe("Title of webpage");
      expect(webpage1.title).toBe("Title of webpage");
      expect(webpage2.title).toBe("Title of webpage");
   });

   test("should have date member variable", () => {
      expect(webpage.date).toBe("2000");
      expect(webpage1.date).toBe("2000");
      expect(webpage2.date).toBe("2000");
   });

   test("should have url member variable", () => {
      expect(webpage.url).toBe("wwww.testwebsite.com");
      expect(webpage1.url).toBe("wwww.testwebsite.com");
      expect(webpage2.url).toBe("wwww.testwebsite.com");
   });

   test("should have author member variable", () => {
      expect(webpage.author).toBe(author);
      expect(webpage1.author).toBe(author);
   });

   test("should have empty author member variable", () => {
      expect(webpage2.author.toString()).toBe("");
   });

   test("should have publisher member variable", () => {
      expect(webpage.publisher).toBe("testPublisher");
      expect(webpage2.publisher).toBe("testPublisher");
   });

   test("should have empty publisher member variable", () => {
      expect(webpage1.publisher).toBe("");
   });
});