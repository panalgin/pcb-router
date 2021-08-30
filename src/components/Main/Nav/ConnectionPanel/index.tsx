import { ComPort } from '../../../../system/ComPort';
import '../ConnectionPanel/style.css'

export function ConnectionPanel() {
  async function handleComPorts() {
    var ports = await window.Main.getComPorts() as Array<ComPort>;

    console.log("Ports:", ports);
  }

  return (
    <div id="connection-port" className="p-2 connection-panel m-2 rounded-md">
      <div className="p-1 flex flex-row justify-between">
        <label htmlFor="ports-combo">Port: </label>
        <select id="ports-combo">
          <option value="COM1">COM1</option>
        </select>
      </div>
      <div className="p-1 flex flex-row justify-between">
        <label htmlFor="">Baud Rate: </label>
        <select id="bauds-combo">
          <option value="9600">9600</option>
          <option value="115200">115200</option>
        </select>
      </div>
      <div className="p-1 flex flex-row justify-end">
        <button onClick={handleComPorts}>Connect</button>
      </div>
    </div>
  )
}
