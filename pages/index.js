import Head from 'next/head';
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
        <Head>
            <title>Task Managment - Main</title>
            <link rel='icon' href='/favicon.ico' />
        </Head>
    </Layout>
  );
}

export default function AppWrapper() {
  return <Home />
}
