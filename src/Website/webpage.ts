import {WebpageInterface} from "./webpageInterface";
const {createWebpage} = require("./webpageInterface");

function webpageNote(info: WebpageInterface): string {
    let webpage = createWebpage(info);
    return webpage.authorList.note() + "\"" + webpage.title + ",\" " + webpage.nameOfSite + ", " + publisherCitation(webpage.publisher) + webpage.date + ", " + webpage.url + ".";
}

function webpageBibliography(info: WebpageInterface): string {
    let webpage = createWebpage(info);
    return webpage.authorList.bibliography() + "\"" + webpage.title + ".\" " + webpage.nameOfSite + ". " + publisherCitation(webpage.publisher) + webpage.date + ". " + webpage.url + ".";
}

function publisherCitation(publisher: string): string {
    return (publisher == "") ? publisher : publisher + ", ";
}

module.exports = {
  webpageNote: webpageNote,
  webpageBibliography: webpageBibliography
};