import "../ConnectionPanel/style.css";

export function ConnectionPanel() {
  return (
    <div id="connection-port">
      <div className="row">
        <label htmlFor="ports-combo">Port: </label>
        <select id="ports-combo">
          <option></option>
        </select>
      </div>
      <div className="row">
        <label htmlFor="">Baud Rate: </label>
        <select id="bauds-combo">
          <option value="9600">9600</option>
          <option value="115200">115200</option>
        </select>
      </div>
    </div>
  )
}
