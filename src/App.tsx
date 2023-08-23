import demoQuestions, {withAnswer} from "./question/QuestionList.tsx";
import {useForm} from "@mantine/form";
import {Box, Button, Code, Group, Radio, Text} from "@mantine/core";

function App() {
    const form = useForm({
        initialValues: {
            questions: withAnswer(demoQuestions)
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
        <Box maw={400} mx="auto">
            <form onSubmit={form.onSubmit(values => console.log(values))}>
                {fields}

                <Text size="sm" weight={500} mt="md">
                    Form values:
                </Text>
                <Code block={true}>{JSON.stringify(form.values, null, 2)}</Code>

                <Button color="lime" radius="lg" size="xl" compact uppercase type="submit">
                    Submit
                </Button>
            </form>
        </Box>
    );
}

export default App
