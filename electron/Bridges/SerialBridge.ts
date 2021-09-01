import { ipcMain, IpcMainEvent } from "electron";

export class SerialBridge {
  constructor() {

    this.registerListeners = this.registerListeners.bind(this);
    this.open = this.open.bind(this);
  }

  registerListeners() {
    ipcMain.on("serial-open", (event: IpcMainEvent, port:string, baudRate:number) => this.open);
  }

  open(event: IpcMainEvent, port: string, baudRate: number) {
    console.log("Open called from frontend and handled in backend");
  }
}