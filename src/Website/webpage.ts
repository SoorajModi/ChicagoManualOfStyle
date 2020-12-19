import {WebpageInterface} from "./webpageInterface";
import {createWebpage} from "./webpageInterface";

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

export {webpageNote, webpageBibliography};
