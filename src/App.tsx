import demoQuestions, {withAnswer} from "./question/QuestionList.tsx";
import {useForm} from "@mantine/form";
import {Box, Code, Group, Radio, Text} from "@mantine/core";

function App() {
  const form = useForm({
    initialValues: {
      questions: withAnswer(demoQuestions)
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
            <Radio value={aItem} label={aItem} />
          ))}
        </Radio.Group>
      </Group>
  ));

  return (
      <Box maw={400} mx="auto">
        <form>
          {fields}

          <Text size="sm" weight={500} mt="md">
            Form values:
          </Text>
          <Code block={true}>{JSON.stringify(form.values, null, 2)}</Code>
        </form>
      </Box>
  );
}

export default App
