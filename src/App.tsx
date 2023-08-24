import {demoQuestions, QuestionWithAnswer} from "./question/QuestionList.tsx";
import {Box, Button, rem, Text} from "@mantine/core";
import {QuizForm} from "./component/QuizForm.tsx";
import {useState} from "react";
import {ImageActionBanner} from "./component/ImageActionBanner.tsx";
import GroupHeader from "./component/GroupHeader.tsx";

function Content() {
    const submitAnswer = (answers: QuestionWithAnswer[]) => {
        console.log(answers)
    };
    const [started, setStarted] = useState<boolean>();

    return <>
        <GroupHeader sx={{
            backgroundColor: "lightblue"
        }} height={rem(60)}>
            <Button>Test</Button>
            <Text size="lg">Test Header</Text>
            <Button>Logo</Button>
        </GroupHeader>
        <Box mx="10px">
            {
                started
                    ? <QuizForm question={demoQuestions} onAnswerSubmit={submitAnswer}/>
                    : <ImageActionBanner title={"Demo Quiz"} description={"Start the quiz"} action={{
                        label: "Start",
                        action: () => setStarted(true)
                    }}/>
            }
        </Box>
    </>
}

export default function App() {
    return <Content />
}
