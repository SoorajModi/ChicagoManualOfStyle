import { createFilm, FilmInterface, validFilmInterface } from './filmInterface';
import { filmInfoBibliography, filmInfoNote } from './filmInfo';

export function filmNoteList(info: FilmInterface): Array<string> {
  let citation: validFilmInterface = createFilm(info);
  let notes: Array<string> = [];

  citation.scene.forEach((scene) => {
    if (scene !== '') {
      notes.push(filmNote(info, scene));
    }
  });

  return notes;
}

export function filmNote(info: FilmInterface, scene: string): string {
  let citation: validFilmInterface = createFilm(info);
  return `${filmSceneNote(scene) + citation.title}, ${filmNoteDirector(citation)}${filmInfoNote(citation.info)}${citation.medium}.`;
}

export function filmBibliography(info: FilmInterface): string {
  let citation: validFilmInterface = createFilm(info);
  return `${filmBibDirector(citation) + citation.title}. ${filmInfoBibliography(citation.info)}${citation.medium}.`;
}

function filmSceneNote(scene: string): string {
  return (scene === '') ? '' : `${scene}, `;
}

function filmNoteDirector(citation: validFilmInterface): string {
  return (citation.director.length() === 0) ? '' : `directed by ${citation.director.authors[0].forwardString()} `;
}

function filmBibDirector(citation: validFilmInterface): string {
  return (citation.director.length() === 0) ? '' : `${citation.director.authors[0].reverseString()}, dir. `;
}
