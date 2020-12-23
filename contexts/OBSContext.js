import {createContext, useState} from "react";

const defaultValue = {
  obs: null,
  setObs: () => null,
  obsMethods: {
    onObsError: () => null,
    getScenesList: () => null,
    getCurrentScene: () => null,
    changeScene: () => null,
    onSwitchScene: () => null
  }
}

export const OBSContext = createContext(defaultValue);

const OBSContextProvider = (props) => {
  const [obs, setObs] = useState(defaultValue.obs)

  // Events
  const onConnectionOpen = (onConnectionOpenHandler) => () => obs.on('ConnectionOpened', onConnectionOpenHandler);
  const onConnectionClose = (onConnectionCloseHandler) => () => obs.on('ConnectionClosed', onConnectionCloseHandler);
  const onAuthenticationSuccess = (onAuthenticationSuccessHandler) => () => obs.on('AuthenticationSuccess', onAuthenticationSuccessHandler);
  const onAuthenticationFailure = (onAuthenticationFailureHandler) => () => obs.on('AuthenticationFailure', onAuthenticationFailureHandler);
  const onObsError = (errorHandler) => obs.on('Error', errorHandler);

  const onSwitchScene =  (onSwitchSceneHandler) => () => obs.on('SwitchScenes', onSwitchSceneHandler)

  // Requests
  const changeScene = async (sceneName) => {
    return await obs.send('SetCurrentScene', {
      "scene-name": sceneName
    })
  }

  // Requests : GET
  const getScenesList = async () => {
    return await obs.send('GetSceneList')
  }

  const getCurrentScene = async () => {
    return await obs.send("GetCurrentScene");
  }

  return (
    <OBSContext.Provider value={{
      obs,
      setObs,
      obsMethods: {
        onObsError,
        getScenesList,
        getCurrentScene,
        changeScene,
        onSwitchScene
      }
    }}>
      {props.children}
    </OBSContext.Provider>
  );
};

export default OBSContextProvider
