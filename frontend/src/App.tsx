import { Button } from './components/Button'
import { Plusicon } from './Icons/Plusicon';
import { Shareicon } from './Icons/Shareicon';
function App() {
  return (
    <div className='flex justify-end'>
      <Button variant="primary" size="md" onClick={()=>{console.log("Button clicked");
      }} text={"Add Content"} startIcon={<Plusicon size='md'/>} />
      <Button variant="secondary" size="md" onClick={()=>{console.log("Button clicked");
      }} text={"Share Vault"} startIcon={<Shareicon size='md' />} />
    </div>
  )
}

export default App
