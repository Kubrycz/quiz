export default interface Questions{
    id: number;
    category: string;
    question: string;
    answers: [string, string, string, string];
    correct: string;
}