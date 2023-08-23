import demoQuestions from "./question/QuestionList.tsx";
import {Box} from "@mantine/core";
import QuizForm from "./component/QuizForm.tsx";

function App() {
    return (
        <Box maw={400} mx="auto">
            <QuizForm question={demoQuestions}/>
        </Box>
    );
}

export default App
