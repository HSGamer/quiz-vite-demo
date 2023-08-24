import {ReactNode} from "react";
import {Container, Flex, Group, Header} from "@mantine/core";
import {VerticalSectionHeight} from "@mantine/core/lib/AppShell/VerticalSection/VerticalSection.styles";
import {Sx} from "@mantine/styles/lib/theme/types/DefaultProps";

type GroupHeaderProps = {
    children: ReactNode[],
    height: VerticalSectionHeight,
    sx?: Sx | (Sx | undefined)[],
}

export default function GroupHeader(props: GroupHeaderProps) {
    const groups = props.children.map(node => (
        <Group>
            {node}
        </Group>
    ));

    return <Header height={props.height} sx={props.sx}>
        <Container fluid>
            <Flex justify={"space-between"}>
                {groups}
            </Flex>
        </Container>
    </Header>
}