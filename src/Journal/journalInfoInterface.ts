export interface JournalInfoInterface {
    journal?: string;
    date?: string;
    volume?: string;
    issue?: string;
}

function createJournalInfo(info: JournalInfoInterface) {
    return {
        journal: info.journal || "",
        date: info.date || "",
        volume: info.volume || "",
        issue: info.issue || ""
    }
}

module.exports = {
    createJournalInfo: createJournalInfo
};