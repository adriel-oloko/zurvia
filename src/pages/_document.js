import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta name="description" content="Discover the financial uplifting power of Web3.0. Secure crypto loans backed by Solana collateral." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />

                <meta property="og:title" content="Zurvia - DeFi Crypto Loans" />
                <meta property="og:description" content="Secure crypto loans backed by Solana collateral" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://zurvia.vercel.app" />

                <link rel="preload" href="/gradient-bg-GgcszqHZ.webp" as="image" />
            </Head>
            <body className="antialiased">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
