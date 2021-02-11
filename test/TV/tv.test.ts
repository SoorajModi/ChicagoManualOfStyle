import { tvNote } from "../../src/TV/tv";

const tv = {
  title: "Show Title",
  season: "season",
  episode: "episode",
  episodeTitle: "Episode Title",
  directors: [{ first: "First", last: "Last" }],
  writers: [{ first: "First", last: "Last" }],
  features: [{ first: "First", last: "Last" }],
  originalDate: "Date",
  originalMedium: "Medium",
  network: "Network",
  releaseDate: "Release",
  releaseMedium: "Medium",
};

describe("tv.tvNote() testing", () => {
  it("should generate tv note citation with all fields specified", () => {
    expect(tvNote(tv)).toBe("");
  });
});

describe("tv.tvBibliography() testing", () => {
  it("should general tv bibliography citation with all fields specified", () => {
    expect(tvNote(tv)).toBe("");
  });
});
