import {filmBibliography, filmNote} from "../../src/Film/film";

const film = {
    title: "Title",
    director: [{first: "First", last: "Last"}],
    originalRelease: "Original Release Date",
    videoRelease: "Video Release Year",
    city: "City",
    distributor: "Studio/Distributor",
    medium: "Medium",
};

const noDirector = {
    title: "Title",
    originalRelease: "Original Release Date",
    videoRelease: "Video Release Year",
    city: "City",
    distributor: "Studio/Distributor",
    medium: "Medium",
};

const onlyRequireFields = {
    title: "Title",
    medium: "Medium",
};

describe("Film.filmNote() testing", () => {
    it("should generate film note citation", () => {
        expect(filmNote(film, "")).toBe("Title, directed by First Last (Original Release Date; City: Studio/Distributor, Video Release Year), Medium.");
    });

    it("should generate file note citation with no director specified", () => {
        expect(filmNote(noDirector, "")).toBe("Title, (Original Release Date; City: Studio/Distributor, Video Release Year), Medium.");
    });

    it("should generate film note citation with only require fields specified", () => {
        expect(filmNote(onlyRequireFields, "")).toBe("Title, Medium.");
    });
});

describe("Film.filmBibliography() testing", () => {
    it("should generate film bibliography citation", () => {
        expect(filmBibliography(film)).toBe("Last, First, dir. Title. Original Release Date; City: Studio/Distributor, Video Release Year. Medium.");
    });

    it("should generate film bibliography citation with no director specified", () => {
        expect(filmBibliography(noDirector)).toBe("Title. Original Release Date; City: Studio/Distributor, Video Release Year. Medium.");
    });

    it("should generate film bibliography with only required fields specified", () => {
        expect(filmBibliography(onlyRequireFields)).toBe("Title. Medium.");
    });
});
