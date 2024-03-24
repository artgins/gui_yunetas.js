// main.js

// Modules to control application life and create native browser window
const { app, BrowserWindow, nativeTheme } = require('electron');
const path = require('node:path');

nativeTheme.themeSource = 'dark';

const createWindow = () => {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        // show: false,
        // webSecurity: false,
        // left: 0,
        // top: 0,
        // Screen 4:3 -> 1400x1050, 1280x960, 1024x768, 960x720
        width: 1024,
        height: 768,

        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });

    // and load the index.html of the app.
    // mainWindow.loadFile(path.join(__dirname, 'index.html'));

    const url = require('url').format({
        protocol: 'file',
        slashes: true,
        pathname: path.join(__dirname, './tags/0.00.aa/', 'index.html')
    });
    mainWindow.loadURL(url);

    /*
     *  Ctrl+Q to quit, Ctrl+Shift+I devtools, F11 fullscreen, Ctrl+M minimize
     */
    // mainWindow.setAlwaysOnTop(true, "screen");      // TODO repon en prod
    // mainWindow.setMenuBarVisibility(false);         // TODO repon en prod
    mainWindow.maximize();
    // mainWindow.setFullScreen(true);                 // TODO repon en prod
    mainWindow.show();

    // Open the DevTools.
    mainWindow.webContents.openDevTools(); // TODO comment en prod
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
    createWindow();

    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
