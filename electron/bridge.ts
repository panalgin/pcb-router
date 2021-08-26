import { contextBridge, ipcRenderer } from 'electron'
import * as poottt from "serialport"

export const api = {
  /**
   * Here you can expose functions to the renderer process
   * so they can interact with the main (electron) side
   * without security problems.
   *
   * The function below can accessed using `window.Main.sayHello`
   */

  sendMessage: (message: string) => {
    ipcRenderer.send('message', message)
  },

  getComPorts: () => {
    const serialPort = require('serialport')

    serialPort.list().then(function (ports: string[]) {
      ports.forEach(function (port: string) {
        console.log('Port: ', port)
      })
    });
  },

  /**
   * Provide an easier way to listen to events
   */
  on: (channel: string, callback: Function) => {
    ipcRenderer.on(channel, (_, data) => callback(data))
  },
}

contextBridge.exposeInMainWorld('Main', api)
