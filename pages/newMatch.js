import Head from 'next/head'
import Layout from '../components/Layout/Layout'
import NewMatch from '../components/NewMatch/NewMatch'
import AuthProvider from '../providers/AuthProvider'

function Home() {
    return (
        <>
            <Head>
                <title>Office Fusball v2.0 - Nový zápas</title>
                <meta
                    name="description"
                    content="Office Fusball v2.0 - Nový zápas"
                />
            </Head>
            <Layout>
                <NewMatch />
            </Layout>
        </>
    )
}

Home.provider = AuthProvider

export default Home
