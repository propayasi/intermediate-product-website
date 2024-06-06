import Head from "next/head";
import '../styles/root/globals.scss'
import Navbar from "@/components/Navbar/Navbar";
import Footer from '@/components/Footer/Footer'
function MyApp({ Component, pageProps }) {
    const getLayout = Component.getLayout || ((page) => page);

    return (
        <>
            <Head>
                <title>BROTIEN</title>
                <meta
                    name="description"
                    content="BROTIEN provides quality protein supplements and other health products. "
                />
                <link rel="icon" href="/Images/Favicon.png" />
            </Head>
            <section className='NavbarSection'>
                <Navbar />
            </section>
            {getLayout(<Component {...pageProps} />)}
            <section className='FooterSection'>
                <Footer />
            </section>
        </>
    );
}

export default MyApp;