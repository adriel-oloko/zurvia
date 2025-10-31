import '@/styles/globals.css'
import '@rainbow-me/rainbowkit/styles.css'
import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit'

import { WagmiProvider } from 'wagmi'
import { mainnet } from 'wagmi/chains'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

import { Inter, IBM_Plex_Sans } from 'next/font/google'

const inter = Inter({ variable: '--font-inter', subsets: ['latin'], weight: ['400', '500'], display: 'swap' })
const ibm_plex_sans = IBM_Plex_Sans({
    variable: '--font-ibm-plex-sans',
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'], // adjust based on your usage
    display: 'swap',
})

const config = getDefaultConfig({
    appName: 'Zurvia Clone',
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    chains: [mainnet],
    ssr: true, // If your dApp uses server side rendering (SSR)
    autoConnect: false,
})

const queryClient = new QueryClient()

export default function App({ Component, pageProps }) {
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider>
                    <main className={`${inter.className} ${ibm_plex_sans.className}`}>
                        <Component {...pageProps} />
                    </main>
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    )
}
