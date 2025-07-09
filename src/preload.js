const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  goBack: () => ipcRenderer.send('go-back'),
  closeApp: () => ipcRenderer.send('close-app')
});