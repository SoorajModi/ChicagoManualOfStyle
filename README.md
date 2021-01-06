# ChicagoManualOfStyle

![npm_version](https://img.shields.io/npm/v/chicagomanualofstyle)
![code_cov](https://img.shields.io/codecov/c/github/SoorajModi/ChicagoManualOfStyle)
![build](https://img.shields.io/github/workflow/status/SoorajModi/ChicagoManualOfStyle/Main)
![license](https://img.shields.io/badge/license-MIT-brightgreen)

This is an application to create citations in Chicago Manual of Style (CMoS) 17th ed. in Note-Bibliography style: www.chicagomanualofstyle.org.

## Features

- Will create note and bibliography citations for the following source types

    - Books / Electronic Books
    - Journal / Electronic Journals
    - Lectures
    - Webpages
    
## Installation

```bash
npm i chicagomanualofstyle
```

Add to file

```
let CMOS = require('chicagomanualofstyle');
```

## Usage

#### Book

```
let citation = CMOS.book({
    title: "The Great Gatsby",                              // Required
    authorList: [{first: "F. Scott", last: "Fitzgerald"}],  // Optional
    publisher: "Charles Scribner's Sons",                   // Optional
    placeOfPublication: "New York",                         // Optional
    yearOfPublication: "2000"                               // Optional
}, [{page: "1"}, {page: ""}, {page: "2"}]);                 // Optional list of pages to be cited in notes

console.log(citation);
```

This will return:

```
{
  bibliography: "Fitzgerald, F. Scott. The Great Gatsby. New York: Charles Scribner's Sons, 2000.",
  notes: [
    "F. Scott Fitzgerald, The Great Gatsby (New York: Charles Scribner's Sons, 2000), 1."
  ]
}
```

#### Electronic Book

```
let citation = CMOS.eBook({
    title: "The Great Gatsby",                              // Required
    authorList: [{first: "F. Scott", last: "Fitzgerald"}],  // Optional
    publisher: "Charles Scribner's Sons",                   // Optional
    placeOfPublication: "New York",                         // Optional
    yearOfPublication: "2000",                              // Optional
    url: "www.thegreatgatsby.com"                           // Required
}, [{page: "1"}]);

console.log(citation);
```

This will return:

```
{
  bibliography: "Fitzgerald, F. Scott. The Great Gatsby. New York: Charles Scribner's Sons, 2000. www.thegreatgatsby.com.",
  notes: [
    "F. Scott Fitzgerald, The Great Gatsby (New York: Charles Scribner's Sons, 2000), 1, www.thegreatgatsby.com."
  ]
}
```

#### Journal

```
let citation = CMOS.journal({
    title: "Title",                                 // Required
    authorList: [{first: "First", last: "Last"}],   // Optional
    publisher: "Publisher",                         // Optional
    yearOfPublication: "Year",                      // Optional             
    volume: "vol",                                  // Optional
    issue: "iss",                                   // Optional
    startRange: "1",                                // Optional
    endRange: "10"                                  // Optional
}, [{page: "1"}]);

console.log(citation);
```

returns

```
{
  bibliography: 'Last, First. "Title." Publisher vol, no. iss (Year): 1-10.',
  notes: [ 'First Last, "Title," Publisher vol, no. iss (Year): 1.' ]
}
```

#### Electronic Journal

```
let citation = eJournal({
    title: "Title",                                 // Required
    authorList: [{first: "First", last: "Last"}],   // Optional
    publisher: "Publisher",                         // Optional
    yearOfPublication: "Year",                      // Optional
    volume: "vol",                                  // Optional
    issue: "iss",                                   // Optional
    startRange: "1",                                // Optional
    endRange: "10",                                 // Optional
    url: "www.test.com"                             // Required
}, [{page: "1"}]);

console.log(citation);
```

Returns:

```
{
  bibliography: 'Last, First. "Title." Publisher vol, no. iss (Year): 1-10.',
  notes: [ 'First Last, "Title," Publisher vol, no. iss (Year): 1.' ]
}
```

#### Webpage

```
let citation = CMOS.webpage({
    title: "Title of Webpage",                      // Required
    authorList: [{first: "First", last: "Last"}],   // Optional
    publisher: "testPublisher",                     // Optional
    nameOfSite: "testWebsite",                      // Required
    date: "2000",                                   // Optional
    url: "wwww.testwebsite.com"                     // Required
});

console.log
```

Returns:

```
{
  bibliography: 'Last, First. "Title of Webpage." testWebsite. testPublisher, 2000. wwww.testwebsite.com.',
  notes: [
    'First Last, "Title of Webpage," testWebsite, testPublisher, 2000, wwww.testwebsite.com.'
  ]
}
```

#### Lecture

```
let citation = CMOS.lecture({
    title: "Course",                                // Required
    professor: [{first: "First", last: "Last"}],    // Optional
    university: "University",                       // Optional
    province: "Province",                           // Optional
    city: "City",                                   // Optional
    date: "Date"                                    // Optional
}); 

console.log(citation);
```

Returns:

```
{
  bibliography: 'Last, First. "Course." Lecture, University, City, Province, Date.',
  notes: [
    'First Last, "Course" (lecture, University, City, Province, Date).'
  ]
}
```

## How to Run Locally

Install node packages: `npm install`

To test: `npm t` or `npm run test`

To run tests with coverage: `npm run coverage`

To run linter: `npm run lint`

## License

MIT
