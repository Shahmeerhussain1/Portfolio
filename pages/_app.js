// import '../assets/css/global.scss'
import '../src/assets/css/global.scss'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Shah Meer's Portfolio</title>
                <meta name="description" content="Portfolio of Shah Meer, a MERN stack developer" />
                <meta name="keywords" content="Shah Meer, portfolio, MERN stack, developer, web development" />
                <meta name="author" content="Shah Meer" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.png"  sizes="16x16" />
                <meta property="og:title" content="Shah Meer's Portfolio" />
                <meta property="og:description" content="Portfolio of Shah Meer, a MERN stack developer" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://portfolio-nu-pink-58.vercel.app/" />
                <meta property="og:image" content="https://portfolio-nu-pink-58.vercel.app/SharedScreenshot.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Shah Meer's Portfolio" />
                <meta name="twitter:description" content="Portfolio of Shah Meer, a MERN stack developer" />
                <meta name="twitter:image" content="https://portfolio-nu-pink-58.vercel.app/SharedScreenshot.jpg" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}
export default MyApp