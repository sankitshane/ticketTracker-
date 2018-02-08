const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const path = require('path')
const url = require('url')

let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({width: 640, height: 500})
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname,'index.html'),
    protocal: 'file:',
    slashes: true
  }))

  mainWindow.on('closed',function(){
    mainWindow = null
  })
}

app.on('ready',createWindow)
app.on('window-all-close',function(){
  if(process.platform != 'darwin'){
    app.quit()
  }
})
app.on('activate',function() {
  if(mainWindow === null){
    createWindow()
  }
})
