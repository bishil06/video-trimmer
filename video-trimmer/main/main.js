const { app, BrowserWindow } = require('electron')
const path = require('path')

function createMainWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, '../preload','mainWindowPreload.js')
    }
  })

  win.loadFile('./build/index.html')
}

function createTrimWindow () {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        preload: path.join(__dirname, '../preload','trimWindowPreload.js')
      }
    })
  
    win.loadFile('./build/index.html')
  }

app.whenReady().then(() => {
    createMainWindow()
    createTrimWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createMainWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})