import { filmInfoBibliography, filmInfoNote } from "../../src/Film/filmInfo";

let filmInfo = {
  originalRelease: "Original Release Date",
  city: "City",
  distributor: "Studio/Distributor",
  videoRelease: "Video Release Date",
};

let noOriginalRelease = {
  originalRelease: "",
  city: "City",
  distributor: "Studio/Distributor",
  videoRelease: "Video Release Date",
};

let noCity = {
  originalRelease: "Original Release Date",
  city: "",
  distributor: "Studio/Distributor",
  videoRelease: "Video Release Date",
};

let noDistributor = {
  originalRelease: "Original Release Date",
  city: "City",
  distributor: "",
  videoRelease: "Video Release Date",
};

let noVideoRelease = {
  originalRelease: "Original Release Date",
  city: "City",
  distributor: "Studio/Distributor",
  videoRelease: "",
};

let onlyOriginalRelease = {
  originalRelease: "Original Release Date",
  city: "",
  distributor: "",
  videoRelease: "",
};

let onlyCity = {
  originalRelease: "",
  city: "City",
  distributor: "",
  videoRelease: "",
};

let onlyDistributor = {
  originalRelease: "",
  city: "",
  distributor: "Studio/Distributor",
  videoRelease: "",
};

let onlyVideoRelease = {
  originalRelease: "",
  city: "",
  distributor: "",
  videoRelease: "Video Release Date",
};

let onlyOriginalReleaseAndCity = {
  originalRelease: "Original Release Date",
  city: "City",
  distributor: "",
  videoRelease: "",
};

let onlyDistributorAndVideoRelease = {
  originalRelease: "",
  city: "",
  distributor: "Studio/Distributor",
  videoRelease: "Video Release Date",
};

let onlyOriginalReleaseAndDistributor = {
  originalRelease: "Original Release Date",
  city: "",
  distributor: "Studio/Distributor",
  videoRelease: "",
};

let onlyCityAndVideoRelease = {
  originalRelease: "",
  city: "City",
  distributor: "",
  videoRelease: "Video Release Date",
};

let equalDates = {
  originalRelease: "Date",
  city: "City",
  distributor: "Studio/Distributor",
  videoRelease: "Date",
};

let onlyEqualDates = {
  originalRelease: "Date",
  city: "",
  distributor: "",
  videoRelease: "Date",
};

let emptyFilmInfo = {
  originalRelease: "",
  city: "",
  distributor: "",
  videoRelease: "",
};

describe("FilmInfo.filmInfoNote() test", () => {
  it("should generate film note citation format", () => {
    expect(filmInfoNote(filmInfo)).toBe(
      "(Original Release Date; City: Studio/Distributor, Video Release Date), "
    );
  });

  it("should generate note citation format with no original release specified", () => {
    expect(filmInfoNote(noOriginalRelease)).toBe(
      "(City: Studio/Distributor, Video Release Date), "
    );
  });

  it("should generate note citation format with no city specified", () => {
    expect(filmInfoNote(noCity)).toBe(
      "(Original Release Date; Studio/Distributor, Video Release Date), "
    );
  });

  it("should generate note citation format with no studio/distributor specified", () => {
    expect(filmInfoNote(noDistributor)).toBe(
      "(Original Release Date; City: Video Release Date), "
    );
  });

  it("should generate note citation format with no video release date specified", () => {
    expect(filmInfoNote(noVideoRelease)).toBe(
      "(Original Release Date; City: Studio/Distributor), "
    );
  });

  it("should generate note citation format with only original release specified", () => {
    expect(filmInfoNote(onlyOriginalRelease)).toBe("(Original Release Date), ");
  });

  it("should generate note citation format with only city specified", () => {
    expect(filmInfoNote(onlyCity)).toBe("(City), ");
  });

  it("should generate note citation format with only studio/distributor specified", () => {
    expect(filmInfoNote(onlyDistributor)).toBe("(Studio/Distributor), ");
  });

  it("should generate note citation format with only video release date specified", () => {
    expect(filmInfoNote(onlyVideoRelease)).toBe("(Video Release Date), ");
  });

  it("should generate note citation format with only original release date and city", () => {
    expect(filmInfoNote(onlyOriginalReleaseAndCity)).toBe(
      "(Original Release Date; City), "
    );
  });

  it("should generate note citation format with only distributor and video release date", () => {
    expect(filmInfoNote(onlyDistributorAndVideoRelease)).toBe(
      "(Studio/Distributor, Video Release Date), "
    );
  });

  it("should generate note citation format with only original release date and distributor specified ", () => {
    expect(filmInfoNote(onlyOriginalReleaseAndDistributor)).toBe(
      "(Original Release Date; Studio/Distributor), "
    );
  });

  it("should generate note citation format with only city and video release date", () => {
    expect(filmInfoNote(onlyCityAndVideoRelease)).toBe(
      "(City: Video Release Date), "
    );
  });

  it("should generate note citation format with equal dates", () => {
    expect(filmInfoNote(equalDates)).toBe("(Date; City: Studio/Distributor), ");
  });

  it("should generate note citation format with only equal dates", () => {
    expect(filmInfoNote(onlyEqualDates)).toBe("(Date), ");
  });

  it("sahould generate note citation format with no fields specified", () => {
    expect(filmInfoNote(emptyFilmInfo)).toBe("");
  });
});

describe("FilmInfo.filmBibliography() test", () => {
  it("should generate bibliography citation format", () => {
    expect(filmInfoBibliography(filmInfo)).toBe(
      "Original Release Date; City: Studio/Distributor, Video Release Date. "
    );
  });

  it("should generate bibliography citation format with no original author specified", () => {
    expect(filmInfoBibliography(noOriginalRelease)).toBe(
      "City: Studio/Distributor, Video Release Date. "
    );
  });

  it("should generate bibliography citation with no city specified", () => {
    expect(filmInfoBibliography(noCity)).toBe(
      "Original Release Date; Studio/Distributor, Video Release Date. "
    );
  });

  it("should generate bibliography citation with no studio/distributor specified", () => {
    expect(filmInfoBibliography(noDistributor)).toBe(
      "Original Release Date; City: Video Release Date. "
    );
  });

  it("should generate note citation with no video release date specified", () => {
    expect(filmInfoBibliography(noVideoRelease)).toBe(
      "Original Release Date; City: Studio/Distributor. "
    );
  });

  it("should generate note citation with only original release specified", () => {
    expect(filmInfoBibliography(onlyOriginalRelease)).toBe(
      "Original Release Date. "
    );
  });

  it("should generate note citation with only city specified", () => {
    expect(filmInfoBibliography(onlyCity)).toBe("City. ");
  });

  it("should generate note citation with only studio/distributor specified", () => {
    expect(filmInfoBibliography(onlyDistributor)).toBe("Studio/Distributor. ");
  });

  it("should generate note citation with only video release date specified", () => {
    expect(filmInfoBibliography(onlyVideoRelease)).toBe("Video Release Date. ");
  });

  it("should generate note citation with only original release date and city specified", () => {
    expect(filmInfoBibliography(onlyOriginalReleaseAndCity)).toBe(
      "Original Release Date; City. "
    );
  });

  it("should generate note citation with only distributor and video release date specified", () => {
    expect(filmInfoBibliography(onlyDistributorAndVideoRelease)).toBe(
      "Studio/Distributor, Video Release Date. "
    );
  });

  it("should generate note citation with only only original release date and distributor specified", () => {
    expect(filmInfoBibliography(onlyOriginalReleaseAndDistributor)).toBe(
      "Original Release Date; Studio/Distributor. "
    );
  });

  it("should generate note citation with only distributor and video release date specified", () => {
    expect(filmInfoBibliography(onlyDistributorAndVideoRelease)).toBe(
      "Studio/Distributor, Video Release Date. "
    );
  });

  it("should generate note citation with only city and video release date specified", () => {
    expect(filmInfoBibliography(onlyCityAndVideoRelease)).toBe(
      "City: Video Release Date. "
    );
  });

  it("should generate bibliography citation format with equal dates", () => {
    expect(filmInfoBibliography(equalDates)).toBe(
      "Date; City: Studio/Distributor. "
    );
  });

  it("should generate bibliography citation format with only equal dates", () => {
    expect(filmInfoBibliography(onlyEqualDates)).toBe("Date. ");
  });

  it("should generate note citation format with no fields specified", () => {
    expect(filmInfoBibliography(emptyFilmInfo)).toBe("");
  });
});
