type Question = {
    key: string
    question: string
    choices: string[]
}

type QuestionWithAnswer = {
    question: Question,
    answer: string
}

type QuestionList = Question[]

const demoQuestions : QuestionList = [
    {
        key: "1",
        question: "What is 1 + 1",
        choices: [
            "1",
            "2",
            "3",
            "4"
        ]
    },
    {
        key: "2",
        question: "What is the capital of Viet Nam",
        choices: [
            "Ha Noi",
            "Sai Gon",
            "Ho Chi Minh",
            "Can Tho"
        ]
    },
    {
        key: "3",
        question: "How are you?",
        choices: [
            "Good",
            "Bad"
        ]
    }
]

export function withAnswer(questionList : QuestionList) : QuestionWithAnswer[] {
    return questionList.map<QuestionWithAnswer>((val) => ({
        question: val,
        answer: ""
    }));
}

export default demoQuestions;