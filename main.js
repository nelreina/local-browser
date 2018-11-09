require('dotenv').config();
const { app, BrowserWindow } = require('electron');

function createWindow() {
  win = new BrowserWindow({ width: 800, height: 1000 });

  win.loadURL(process.env.APP_URL);
}

app.on('ready', createWindow);
