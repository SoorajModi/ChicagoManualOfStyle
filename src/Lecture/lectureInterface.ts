export interface LectureInterface {
    title: string;
    professor: { first: string, last: string }[];
    university?: string;
    city?: string;
    province?: string;
    date?: string;
}