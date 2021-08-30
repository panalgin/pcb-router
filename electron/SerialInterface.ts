import SerialPort, { OpenOptions } from 'serialport';

export const SerialInterface = {
  serialPort: SerialPort,
  open: (port: string, baudRate: number) => {
    console.log('Entering open');

    const options: OpenOptions = {
      baudRate: baudRate,
    };  

    SerialInterface.serialPort = new SerialPort(port, options, () => {});

    this._serialPort.open((error: Error | null | undefined) => {
      console.error(error);
    });

    console.log('Serial port opened');
  },
};

contextBridge.exposeInMainWorld('Serial', SerialInterface);
