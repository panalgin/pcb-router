import { Button } from '../Button';
import { ConnectionPanel } from './Nav/ConnectionPanel';

export function Main() {
  function handleSayHello() {
    window.Main.sendMessage('Hello World');

    console.log('Message sent! Check main process log in terminal.');
  }

  return (
    <div className="w-full h-full grid grid-cols-12">
      <div className="col-span-3">
        <ConnectionPanel />
      </div>
      <div className="col-span-6"></div>
      <div className="col-span-3"></div>
    </div>
  );
}
