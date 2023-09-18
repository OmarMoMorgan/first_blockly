const { app, BrowserWindow, ipcMain } = require('electron')
// include the Node.js 'path' module at the top of your file
const path = require('path')
//require('@electron/remote/main').initialize()


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
            enableRemoteModule: true
        }
    })
  
    win.loadFile('src/index.html')
  }


  app.whenReady().then(() => {
    createWindow();
    ipcMain.on('open-new-window', (event, arg) => {
      const newWindow = new BrowserWindow({ width: 600, height: 400 });
      newWindow.loadFile('src/custom_eqn.html'); // Load the HTML file for the new window.
    });
  })


  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })