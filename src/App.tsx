import {ConnectionProvider, useWallet, WalletProvider} from '@solana/wallet-adapter-react';
import {WalletModalProvider, WalletMultiButton} from '@solana/wallet-adapter-react-ui';
import {clusterApiUrl} from '@solana/web3.js';
import {Box, Button, MantineProvider, rem, Text} from "@mantine/core";
import {QuizForm} from "./component/QuizForm.tsx";
import {useMemo, useState} from "react";
import {ImageActionBanner} from "./component/ImageActionBanner.tsx";
import GroupHeader from "./component/GroupHeader.tsx";
import {WalletAdapterNetwork} from "@solana/wallet-adapter-base";

import '@solana/wallet-adapter-react-ui/styles.css';

function Content() {
    const {publicKey} = useWallet();
    const [started, setStarted] = useState<boolean>();

    const handleStart = () => {
        if (!publicKey) return;

        setStarted(true)
    }

    return <>
        <GroupHeader sx={{
            backgroundColor: "lightblue"
        }} height={rem(60)}>
            <Button>Test</Button>
            <Text size="lg">Test Header</Text>
            <WalletMultiButton />
        </GroupHeader>
        <Box>
            {
                started && publicKey
                    ? <QuizForm />
                    : <ImageActionBanner title={"Demo Quiz"} description={"Start the quiz"} action={{
                        label: "Start",
                        onClick: handleStart
                    }}/>
            }
        </Box>
    </>
}

export default function App() {
    const endpoint = useMemo(() => clusterApiUrl(WalletAdapterNetwork.Devnet), []);
    const wallets = useMemo(() => [], []);

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
                    <MantineProvider withGlobalStyles withNormalizeCSS>
                        <Content />
                    </MantineProvider>
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
}
