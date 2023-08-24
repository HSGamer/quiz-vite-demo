import {demoQuestions, QuestionWithAnswer} from "./question/QuestionList.tsx";
import {Box} from "@mantine/core";
import {QuizForm} from "./component/QuizForm.tsx";
import {useState} from "react";
import {ImageActionBanner} from "./component/QuizBanner.tsx";

function App() {
    const submitAnswer = (answers: QuestionWithAnswer[]) => {
        console.log(answers)
    };
    const [started, setStarted] = useState<boolean>();

    return (
        <Box maw={400} mx="auto">
            {
                started
                    ? <QuizForm question={demoQuestions} onAnswerSubmit={submitAnswer}/>
                    : <ImageActionBanner title={"Demo Quiz"} description={"Start the quiz"} action={{
                        label: "Start",
                        action: () => setStarted(true)
                    }}/>
            }
        </Box>
    );
}

export default App
