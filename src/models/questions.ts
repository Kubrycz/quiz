export default interface Questions{
    id: number;
    categoryId: number;
    question: string;
    answers: [string, string, string, string];
    correct: string;
}