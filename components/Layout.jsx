import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children, title, description }) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Head>
            <Header/>
            <main className="container my-4">
                {children}
            </main>
            <Footer/>
        </div>
    )
}

Layout.defaultProps = {
    title: 'Next.js | Mi sitio',
    description: 'Hola mundo'
}

export default Layout
