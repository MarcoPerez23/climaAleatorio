const {app, BrowserWindow} = require('electron')
//const bootstrap = require('bootstrap')

function createWindow(){
    const ventana = new BrowserWindow({
        width: 350,
        height: 350,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })

    ventana.loadFile('index.html')
}

app.whenReady().then(createWindow);