import {demoQuestions, QuestionWithAnswer} from "./question/QuestionList.tsx";
import {Box} from "@mantine/core";
import {QuizForm} from "./component/QuizForm.tsx";

function App() {
    const submitAnswer = (answers: QuestionWithAnswer[]) => {
        console.log(answers)
    };

    return (
        <Box maw={400} mx="auto">
            <QuizForm question={demoQuestions} onAnswerSubmit={submitAnswer}/>
        </Box>
    );
}

export default App
