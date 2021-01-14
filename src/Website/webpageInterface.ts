import Authors from "../Author/authors";

export interface WebpageInterface {
  title: string;
  nameOfSite: string;
  url: string;
  authors?: { first: string; last: string }[];
  publisher?: string;
  date?: string;
}

export interface validWebpageInterface {
  title: string;
  nameOfSite: string;
  url: string;
  authors: Authors;
  publisher: string;
  date: string;
}

export function createWebpage(info: WebpageInterface): validWebpageInterface {
  return {
    title: info.title,
    nameOfSite: info.nameOfSite,
    url: info.url,
    authors: new Authors(info.authors || []),
    publisher: info.publisher || "",
    date: info.date || "",
  };
}
