const { app, BrowserWindow } = require('electron')
// include the Node.js 'path' module at the top of your file
const path = require('path')


const createWindow = () => {
    const win = new BrowserWindow({
      width: 1000,
      height: 600,
    //   webPreferences: {
    //     preload: path.join(__dirname, 'preload.js')
    //   }
        webPreferences:{
            nodeIntegration: true,
            contextIsolation: false,
            sandbox: false,
        }
    })
  
    win.loadFile('src/index.html')
  }


  app.whenReady().then(() => {
    createWindow()
  })


  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })