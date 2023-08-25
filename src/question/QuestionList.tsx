type Question = {
    key: string
    question: string
    choices: string[]
}

type Answer = {
    key: string,
    answer: string
}

export type QuestionWithAnswer = {
    question: Question,
    answer: string
}

export type QuestionList = Question[]

export type QuestionResponse = {
    questions: QuestionList
}

export type AnswerRequest = {
    answers: Answer[],
    wallet: string
}

export function withAnswer(questionList: QuestionList): QuestionWithAnswer[] {
    return questionList.map<QuestionWithAnswer>((val) => ({
        question: val,
        answer: ""
    }));
}

export function toAnswerRequest(questionsWithAnswer: QuestionWithAnswer[], wallet: string): AnswerRequest {
    return {
        wallet: wallet,
        answers: questionsWithAnswer.map<Answer>((questionWithAnswer) => ({
            answer: questionWithAnswer.answer,
            key: questionWithAnswer.question.key
        }))
    }
}