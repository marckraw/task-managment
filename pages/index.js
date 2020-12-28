import Head from 'next/head';
import Header from "components/Header";
import ColorPicker from "components/Forms/ColorPicker";
import Progress from "components/Forms/Progress";
import Meter from "components/Forms/Meter";
import Link from "next/link";

const Home = () => {

  return (
    <div>
      <Head>
        <title>Task Managment</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Header />
        <div>
            <Link href="/test/testPage">
                <a>base!</a>
            </Link>

            <br /><br />

            <ColorPicker />
            <Progress />
            <Meter />
        </div>
      </main>
    </div>
  );
}

export default function AppWrapper() {
  return <Home />
}
