const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const path = require('path')
const url = require('url')
var client = require('electron-connect').client;
let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({width: 480, height: 580,maximizable: false})
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname,'index.html'),
    protocal: 'file:',
    slashes: true
  }))
  mainWindow.setMenu(null);
  mainWindow.on('closed',function(){
    mainWindow = null
  })
  client.create(mainWindow);
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
