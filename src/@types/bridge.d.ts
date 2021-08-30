import { api } from '../../electron/bridge';
import { SerialInterface } from '../../electron/SerialInterface';

declare global {
  // eslint-disable-next-line
  interface Window {
    Main: typeof api;
    Serial: typeof SerialInterface;
  }
}
