import { Button } from './components/Button'
import {Card} from './components/Card'
import { Plusicon } from './Icons/Plusicon';
import { Shareicon } from './Icons/Shareicon';
function App() {
  return (
    <div>
      <div className='flex justify-end max-w-full'>
        <Button variant="primary" size="md" onClick={()=>{console.log("Button clicked")}} text={"Add Content"} startIcon={<Plusicon size='md'/>} />
        <Button variant="secondary" size="md" onClick={()=>{console.log("Button clicked")}} text={"Share Vault"} startIcon={<Shareicon size='md' />} />
      </div>
      <div className='flex space-x-2'>
        <Card type='youtube' title='Coder army' link='https://www.youtube.com/watch?v=7rrUVevoECg' />
        <Card type='tweet' title='Coder army' link='https://www.youtube.com/watch?v=7rrUVevoECg' />
      </div>
      
    </div>
    
  )
}

export default App
