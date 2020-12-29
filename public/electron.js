require('dotenv').config()
const {app, BrowserWindow, ipcMain} = require('electron')
const isDev = require('electron-is-dev')
const path = require("path")
const {getAccessToken} = require("@electron-utils/electron-oauth-github");
const {initializeStore} = require('./store.node')

/*
*
* Global Variables
*
* */
const mainWindowWidth = 960;
const mainWindowHeight = 640;

const store = initializeStore()

let mainWindow
let myApiOauth

const createMainWindow = () => {
  mainWindow = new BrowserWindow({
    width: mainWindowWidth,
    height: mainWindowHeight,
    center: true,
    resizable: false,
    title: "Stream Helper",
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true,
      enableRemoteModule: true,
      webviewTag: true,
      devTools: true,
      webSecurity: false,
    }
  })

  mainWindow.loadURL(isDev ? `http://localhost:3000` : `file://${path.join(__dirname, "../out/index.html")}`)
}

app.whenReady().then(() => {
  createMainWindow();
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('before-quit', () => {
  console.log("before quit hook")
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createMainWindow()
  }
})

ipcMain.handle('getStoreValue', (event, key) => store.get(key))
ipcMain.handle('setStoreValue', (event, key, selectedFiles) => store.set(key, selectedFiles))

ipcMain.handle('loginWithMyLib', async (event, data) => {
  const githubOAuthConfig = {
    clientId: process.env.NEXT_PUBLIC_GITHUB_APP_CLIENT_ID,
    clientSecret: process.env.NEXT_PUBLIC_GITHUB_APP_CLIENT_SECRET,
    redirectUri: 'http://localhost',
    scope: 'public_repo,repo:read',
  }

  try {
    const {access_token} = await getAccessToken({
      clientId: githubOAuthConfig.clientId,
      clientSecret: githubOAuthConfig.clientSecret,
      redirectUri: githubOAuthConfig.redirectUri,
      scope: githubOAuthConfig.scope
    })

    mainWindow.webContents.send('accessToken', access_token)
  } catch (error) {
    console.log("error happened")
    console.log(error)
  }
})




