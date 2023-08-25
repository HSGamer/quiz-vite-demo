import {ReactNode} from "react";
import {Flex, Header} from "@mantine/core";
import {VerticalSectionHeight} from "@mantine/core/lib/AppShell/VerticalSection/VerticalSection.styles";
import {Sx} from "@mantine/styles/lib/theme/types/DefaultProps";

type GroupHeaderProps = {
    children: ReactNode[],
    height: VerticalSectionHeight,
    sx?: Sx | (Sx | undefined)[],
}

export default function GroupHeader(props: GroupHeaderProps) {

    return <Header height={props.height}>
        <Flex justify={"space-between"} align={"center"} sx={props.sx}>
            {props.children}
        </Flex>
    </Header>
}