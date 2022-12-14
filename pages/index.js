import Head from 'next/head'
import Layout from '../components/Layout/Layout'
import AuthProvider from '../providers/AuthProvider'

function Home() {
    return (
        <>
            <Head>
                <title>Office Fusball v2.0</title>
                <meta name="description" content="Office Fusball v2.0" />
            </Head>
            <Layout></Layout>
        </>
    )
}

Home.provider = AuthProvider

export default Home
