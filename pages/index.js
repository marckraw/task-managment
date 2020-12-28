import Head from 'next/head';
import ColorPicker from "components/Forms/ColorPicker";
import Progress from "components/Forms/Progress";
import Meter from "components/Forms/Meter";
import Layout from "../components/Layout";

const Home = () => {

  return (
    <Layout>
        <Head>
            <title>Task Managment - Main</title>
            <link rel='icon' href='/favicon.ico' />
        </Head>
        <div>
            <ColorPicker />
            <Progress />
            <Meter />
        </div>
    </Layout>
  );
}

export default function AppWrapper() {
  return <Home />
}
