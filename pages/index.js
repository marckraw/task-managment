import Head from 'next/head';
import Header from "components/Header";

const Home = () => {

  return (
    <div>
      <Head>
        <title>Task Managment</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Header />
      </main>
    </div>
  );
}

export default function AppWrapper() {
  return <Home />
}
