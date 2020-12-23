import { useContext, useEffect, useState } from 'react';
import Head from 'next/head';
import { OBSContext } from '../contexts/OBSContext';
import Btn from '../components/Btn';
import StartUp from '../components/StartUp';

const Home = () => {
  const { obsMethods } = useContext(OBSContext);
  const [allScenesList, setAllScenesList] = useState([]);
  const [currentSceneSources, setCurrentSceneSources] = useState([]);
  const [currentScene, setCurrentScene] = useState('Main Scene');

  useEffect(() => {
    obsMethods.onObsError(err => {
      console.error('socket error (from AppWrapper):', err);
    });
  }, [])

  useEffect(() => {
      obsMethods.onSwitchScene((data) => {
        setCurrentScene(data.sceneName)
        setCurrentSceneSources(data.sources)
      })()
  }, [])

  useEffect(() => {
    const getScenes = async () => {
      const temp = await obsMethods.getScenesList();
      setAllScenesList(temp?.scenes)
    }

    getScenes()
  }, [])

  const changeScene = async (scene) => {
    await obsMethods.changeScene(scene.name)
  }

  return (
    <div className='container'>
      <Head>
        <title>Steam Helper</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <div>
          <div>
            <h2>Current scene: {currentScene}</h2>
          </div>
          <ul>
            {
              allScenesList.map(scene => {
                return (
                  <li key={scene.name}>
                    <Btn onClick={() => changeScene(scene)}>{scene.name}</Btn>
                  </li>
                )
              })
            }
          </ul>

          <h2>Current Scene Sources: </h2>
          <br />
          <ul>
            {
              currentSceneSources?.map(source => {
                return (
                  <li key={source.name}>
                    {source.name}
                  </li>
                )
              })
            }
          </ul>
        </div>
      </main>
    </div>
  );
}

export default function AppWrapper() {
  const { obs } = useContext(OBSContext);

  return (
    obs ? (<Home />) : <StartUp />
  )
}
