import Link from 'next/link'
import Layout from "components/Layout";
import Head from "next/head";

const Index = () => {
    return (
        <Layout>
            <Head>
                <title>Task Managment - Profile</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <div>Testing...</div>
            <Link href="/">
                <a>base!</a>
            </Link>
        </Layout>
    )
}

export default Index
