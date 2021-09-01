import { ipcMain } from "electron";

export class SerialBridge {
  constructor() {
    this.open = this.open.bind(this);
  }

  open(port: string, baudRate: number) {
    ipcMain.emit("serial-open", port, baudRate);
  }
}