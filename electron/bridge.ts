import { contextBridge, ipcRenderer } from 'electron';
import SerialPort from 'serialport';

export const api = {
  /**
   * Here you can expose functions to the renderer process
   * so they can interact with the main (electron) side
   * without security problems.
   *
   * The function below can accessed using `window.Main.sayHello`
   */

  sendMessage: (message: string) => {
    ipcRenderer.send('message', message);
  },

  getComPorts: async (): Promise<Array<Object>> => {
    return await SerialPort.list().then(function (ports: Object[]) {
      return ports;
    });
  },

  /**
   * Provide an easier way to listen to events
   */
  on: (channel: string, callback: Function) => {
    ipcRenderer.on(channel, (_, data) => callback(data));
  },
};

contextBridge.exposeInMainWorld('Main', api);
