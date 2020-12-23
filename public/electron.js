const {app, BrowserWindow, ipcMain} = require('electron')
const isDev = require('electron-is-dev')
const path = require("path")
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

  mainWindow.loadURL(isDev ? `http://localhost:3000` : `file://${path.join(__dirname, "../build/index.html")}`)
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
