import React, { Component } from 'react';
import { SerialBridge } from '../../../../SerialBridge';
import { ComPort } from '../../../../system/ComPort';
import '../ConnectionPanel/style.css';

interface IState {
  ports: Array<ComPort>;
  selectedPortName: string;
  selectedBaudRate: number;
}

interface IProps {}

export class ConnectionPanel extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      ports: [],
      selectedPortName: '',
      selectedBaudRate: 115200,
    };

    this.handleComPorts = this.handleComPorts.bind(this);
    this.onPortChange = this.onPortChange.bind(this);
    this.onBaudChange = this.onBaudChange.bind(this);
    this.onConnectClicked = this.onConnectClicked.bind(this);
  }

  componentDidMount() {
    this.handleComPorts();
  }

  render() {
    return (
      <div id="connection-port" className="p-2 connection-panel m-2 rounded-md">
        <div className="p-1 flex flex-row justify-between">
          <label htmlFor="ports-combo">Port: </label>
          <select
            id="ports-combo"
            onChange={(e) => this.onPortChange(e)}
            value={this.state.selectedPortName}
          >
            {this.state.ports.map((port, i) => {
              return (
                <option key={'opt-' + i} value={port.path}>
                  {port.path}
                </option>
              );
            })}
          </select>
        </div>
        <div className="p-1 flex flex-row justify-between">
          <label htmlFor="">Baud Rate: </label>
          <select
            id="bauds-combo"
            onChange={this.onBaudChange}
            value={this.state.selectedBaudRate}
          >
            <option value="9600">9600</option>
            <option value="38400">38400</option>
            <option value="57600">57600</option>
            <option value="115200">115200</option>
          </select>
        </div>
        <div className="p-1 flex flex-row justify-end">
          <button onClick={this.onConnectClicked}>Connect</button>
        </div>
      </div>
    );
  }

  async handleComPorts() {
    var ports = (await window.Main.getComPorts()) as Array<ComPort>;

    this.setState({
      ports: ports,
    });

    console.log('Ports:', ports);
  }

  onPortChange(event: React.ChangeEvent<HTMLSelectElement>) {
    let port = event.target.value;

    this.setState({
      selectedPortName: port,
    });
  }

  onBaudChange(event: React.ChangeEvent<HTMLSelectElement>) {
    let baud = parseInt(event.target.value);

    this.setState({
      selectedBaudRate: baud,
    });
  }

  onConnectClicked() {
    let port = this.state.selectedPortName;
    let baudRate = this.state.selectedBaudRate;
    

    new SerialBridge().open(port, baudRate);
  }
}
