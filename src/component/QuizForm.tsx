import {QuestionList, QuestionWithAnswer, withAnswer} from "../question/QuestionList.tsx";
import {useForm} from "@mantine/form";
import {Button, Group, Radio} from "@mantine/core";

type QuizProps = {
    question: QuestionList,
    onAnswerSubmit: (answers: QuestionWithAnswer[]) => void
}

export function QuizForm(props: QuizProps) {
    const form = useForm({
        initialValues: {
            questions: withAnswer(props.question)
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
        <form onSubmit={form.onSubmit(values=> props.onAnswerSubmit(values.questions))}>
            {fields}

            <Button color="lime" radius="lg" size="xl" compact uppercase type="submit">
                Submit
            </Button>
        </form>
    );
}