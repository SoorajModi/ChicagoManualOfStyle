# ChicagoManualOfStyle

![npm_version](https://img.shields.io/npm/v/chicagomanualofstyle)
![code_cov](https://img.shields.io/codecov/c/github/SoorajModi/ChicagoManualOfStyle)
![build](https://img.shields.io/github/workflow/status/SoorajModi/ChicagoManualOfStyle/Main)
![license](https://img.shields.io/badge/license-MIT-brightgreen)

This is an application to create citations in Chicago Manual of Style (CMoS) 17th ed. in Note-Bibliography style: www.chicagomanualofstyle.org.

## Features

- Will create note and bibliography citations for the following source types

    - Books
    - Journal
    - Lectures
    - Web Pages
    - Newspapers
    - Films
    
## Installation

```bash
npm i chicagomanualofstyle
```

Add to file

```
const { book, journal, webpage, lecture, newspaper, film } = require('chicagomanualofstyle');
```

or

```
let CMOS = require('chicagomanualofstyle');
```

## Usage

The return value of each call will be:

```
{
    bibliography: string,
    notes: Array<string>
}
```

The first element of the notes array will be a full note citation, but subsequent elements will be shortened note citations.

#### Book

```
let citation = book({
    title: "The Great Gatsby",                              // Required
    authors: [{first: "F. Scott", last: "Fitzgerald"}],     // Optional
    editors: [{first: "F. Scott", last: "Fitzgerald"}],     // Optional
    publisher: "Charles Scribner's Sons",                   // Optional
    placeOfPublication: "New York",                         // Optional
    yearOfPublication: "2000",                              // Optional
    edition: "Edition Information"                          // Optional
    url: "URL or DOI"                                       // Optional
}, ["1", "2", "3"]);                                        // Optional list of pages to be cited in notes

console.log(citation);
```

#### Journal

```
let citation = journal({
    title: "Title",                                 // Required
    authors: [{first: "First", last: "Last"}],      // Optional
    publisher: "Publisher",                         // Optional
    yearOfPublication: "Year",                      // Optional             
    volume: "vol",                                  // Optional
    issue: "iss",                                   // Optional
    startRange: "1",                                // Optional
    endRange: "10",                                 // Optional
    url: "URL or DOI"                               // Optional
}, [{page: "1"}]);

console.log(citation);
```

#### Web Page

```
let citation = webpage({
    title: "Title of Webpage",                      // Required
    authors: [{first: "First", last: "Last"}],      // Optional
    publisher: "testPublisher",                     // Optional
    nameOfSite: "testWebsite",                      // Required
    date: "2000",                                   // Optional
    url: "wwww.testwebsite.com"                     // Required
});

console.log
```

#### Lecture

```
let citation = lecture({
    title: "Course",                                // Required
    professor: [{first: "First", last: "Last"}],    // Optional
    university: "University",                       // Optional
    province: "Province",                           // Optional
    city: "City",                                   // Optional
    date: "Date"                                    // Optional
}); 

console.log(citation);
```

#### Newspaper

```
let citation = newspaper({
    articleTitle: "Article Title",              // Required
    newspaperTitle: "Newspaper Title",          // Required
    authors: [{first: "First", last: "Last"}],  // Optional
    date: "Date",                               // Required
    edition: "Edition",                         // Optional
    url: "URL",                                 // Optional
});
```

#### Film

```
const citation = film({
    title: "Title",                             // Required
    director: [{first: "First", last: "Last"}], // Optional
    originalRelease: "Original Release Date",   // Optional
    videoRelease: "Video Release Year",         // Optional
    city: "City",                               // Optional
    distributor: "Studio/Distributor",          // Optional             
    medium: "Medium",                           // Required
    scene: ["Scene 1", "Scene 2", "Scene 3"],   // Optional
});

```

## How to Run Locally

Install node packages: `npm install`

To test: `npm t` or `npm run test`

To run tests with coverage: `npm run coverage`

To run linter: `npm run lint`

## License

MIT
