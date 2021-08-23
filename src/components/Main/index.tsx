import { Button } from '../Button'
import { Container, Image, Text } from './styles'

export function Main() {
  function handleSayHello() {
    window.Main.sendMessage('Hello World');

    console.log('Message sent! Check main process log in terminal.')
  }

  return (
    <div>
      
    </div>
  )
}
 
