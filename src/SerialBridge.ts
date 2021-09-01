
export class SerialBridge {
  constructor() {
  }

  open(port: string, baudRate: number) {
    window.Main.sendMessage("Selam from frontend");
    
  }
}