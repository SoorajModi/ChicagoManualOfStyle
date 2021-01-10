import { FilmInfoInterface } from './filmInfoInterface';

export function filmInfoNote(info: FilmInfoInterface): string {
  return isEmpty(info) ? '' : (`(${addOriginalRelease(info)}${addCity(info)}${addDistributor(info)}${addVideoReleaseDate(info)}), `);
}

export function filmInfoBibliography(info: FilmInfoInterface): string {
  return isEmpty(info) ? '' : (`${addOriginalRelease(info) + addCity(info) + addDistributor(info) + addVideoReleaseDate(info)}. `);
}

function isEmpty(info: FilmInfoInterface): boolean {
  return (info.originalRelease === '' && info.city === '' && info.distributor === '' && info.videoRelease === '');
}

function addOriginalRelease(info: FilmInfoInterface): string {
  if (info.originalRelease === info.videoRelease && (info.city === '' && info.distributor === '')) return info.originalRelease;
  if ((info.city !== '' || info.distributor !== '' || info.videoRelease !== '') && (info.originalRelease !== '')) return `${info.originalRelease}; `;
  return info.originalRelease;
}

function addCity(info: FilmInfoInterface): string {
  return ((info.distributor !== '' || info.videoRelease !== '') && info.city !== '') ? (`${info.city}: `) : info.city;
}

function addDistributor(info: FilmInfoInterface): string {
  return (info.videoRelease !== '' && info.distributor !== '' && (info.originalRelease !== info.videoRelease)) ? (`${info.distributor}, `) : info.distributor;
}

function addVideoReleaseDate(info: FilmInfoInterface): string {
  if (info.originalRelease === info.videoRelease) return '';
  return info.videoRelease;
}
