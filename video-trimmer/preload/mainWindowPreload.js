const { contextBridge } = require('electron')

contextBridge.exposeInMainWorld('state', {
    getState() {
        return true
    }
})