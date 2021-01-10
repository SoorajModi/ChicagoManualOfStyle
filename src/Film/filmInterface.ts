import Authors from '../Author/authors';
import { FilmInfoInterface } from './filmInfoInterface';

export interface FilmInterface {
    title: string;
    medium: string;
    director?: Array<{first: string, last: string}>;
    originalRelease?: string;
    videoRelease?: string;
    city?: string;
    distributor?: string;
    scene?: Array<string>;
}

export interface validFilmInterface {
    title: string;
    director: Authors;
    info: FilmInfoInterface;
    medium: string;
    scene: Array<string>;
}

export function createFilm(info: FilmInterface): validFilmInterface {
  return {
    title: info.title,
    medium: info.medium,
    director: new Authors(info.director || []),
    info: {
      originalRelease: info.originalRelease || '',
      videoRelease: info.videoRelease || '',
      city: info.city || '',
      distributor: info.distributor || '',
    },
    scene: info.scene || [],
  };
}
