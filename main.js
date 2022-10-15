const path = require('path');

const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev')


const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
    preload: path.join(__dirname, 'preload.js')
    }
  })

  const urlLocation = isDev ? 'http://localhost:3000' : 'xxx'

  mainWindow.loadURL(urlLocation)

  mainWindow.webContents.openDevTools()
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })
})