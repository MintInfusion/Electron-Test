const { app, BrowserWindow } = require("electron")
const path = require("path")
const { fork } = require("node:child_process")

console.log("HELLO");

app.whenReady().then(() => {
    createWindow()
})

const proxyProcess = fork(path.join(__dirname, "proxy.js"));

function createWindow() {
    const win  = new BrowserWindow({
        width: 800, height: 600
    })

    win.loadFile("index.html")
}