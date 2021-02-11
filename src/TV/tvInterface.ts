export interface TvInterface {
  title: string;
  season: string;
  episode: string;
  episodeTitle: string;
  directors?: Array<{ first: string; last: string }>;
  writers?: Array<{ first: string; last: string }>;
  features?: Array<{ first: string; last: string }>;
  originalDate?: string; // date aired
  originalMedium?: string;
  network?: string;
  releaseDate?: string;
  releaseMedium?: string;
  url?: string;
}
