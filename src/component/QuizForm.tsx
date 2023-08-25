import {QuestionResponse, QuestionWithAnswer, toAnswerRequest, withAnswer} from "../question/QuestionList.tsx";
import {useForm} from "@mantine/form";
import {Button, Center, Group, Loader, Radio, Text} from "@mantine/core";
import {useEffect, useState} from "react";
import {ApiRequest} from "../util/ApiRequest.ts";
import {useWallet} from "@solana/wallet-adapter-react";

type QuizFormProps = {
    questionResponse: QuestionResponse,
    onAnswerSubmit: (answers: QuestionWithAnswer[]) => void
}

function ShowQuizForm(props: QuizFormProps) {
    const form = useForm({
        initialValues: {
            questions: withAnswer(props.questionResponse.questions)
        },
        validate: {
            questions: {
                answer: value => value.length == 0 ? "Choose one" : null
            }
        }
    });

    const fields = form.values.questions.map((item, index) => (
        <Group key={item.question.key} mt="xs">
            <Radio.Group
                label={item.question.question}
                withAsterisk
                {...form.getInputProps(`questions.${index}.answer`)}
            >
                {item.question.choices.map((aItem) => (
                    <Radio value={aItem} label={aItem}/>
                ))}
            </Radio.Group>
        </Group>
    ));

    return (
        <form onSubmit={form.onSubmit(values => props.onAnswerSubmit(values.questions))}>
            {fields}

            <Button color="lime" radius="lg" size="xl" compact uppercase type="submit">
                Submit
            </Button>
        </form>
    );
}

export function QuizForm() {
    const {publicKey} = useWallet();
    const [questionResponse, setQuestionResponse] = useState<QuestionResponse | undefined>(undefined);
    const [completed, setCompleted] = useState<boolean | undefined>(undefined);
    const [submitted, setSubmitted] = useState<boolean>(false);

    useEffect(() => {
        ApiRequest
            .get<QuestionResponse>("/questions")
            .then(response => setQuestionResponse(response.data))
    }, []);

    const handleAnswer = async (answers: QuestionWithAnswer[]) => {
        setSubmitted(true);
        ApiRequest
            .post("/answer", toAnswerRequest(answers, publicKey!.toBase58()))
            .then(response => {
                setCompleted(response.status == 200)
            })
    };

    return (
        submitted
            ? (
                completed == undefined
                    ? (
                        <Center><Loader/></Center>
                    )
                    : (
                        completed
                            ? (
                                <Center>
                                    <Text>You have received an NFT</Text>
                                </Center>
                            )
                            : (
                                <Center>
                                    <Text>There is an error when handling the answers</Text>
                                </Center>
                            )
                    )
            )
            : (
                !questionResponse
                    ? (
                        <Center><Loader/></Center>
                    )
                    : (
                        <ShowQuizForm questionResponse={questionResponse} onAnswerSubmit={handleAnswer}/>
                    )
            )
    )
}