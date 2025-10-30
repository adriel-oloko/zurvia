import '@/styles/globals.css'
import '@rainbow-me/rainbowkit/styles.css'
import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit'

import { WagmiProvider } from 'wagmi'
import { mainnet } from 'wagmi/chains'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

import { Geist, Geist_Mono, Inter, IBM_Plex_Sans, Funnel_Display } from 'next/font/google'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
    display: 'swap',
})

const inter = Inter({ variable: '--font-inter', subsets: ['latin'], display: 'swap' })

const funnel_display = Funnel_Display({
    variable: '--font-funnel-display',
    subsets: ['latin'],
    display: 'swap',
})

const ibm_plex_sans = IBM_Plex_Sans({
    variable: '--font-ibm-plex-sans',
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'], // adjust based on your usage
    display: 'swap',
})

const config = getDefaultConfig({
    appName: 'Zurvia Clone',
    projectId: '5fd8403601f35f35b33ad4b1dfe61b65', //process.env.NEXT_PUBLIC_PROJECT_ID,
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
                    <main className={`${geistSans.className} ${geistMono.className} ${inter.className} ${ibm_plex_sans.className} ${funnel_display.className}`}>
                        <Component {...pageProps} />
                    </main>
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    )
}
