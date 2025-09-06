import { Button } from './components/Button'
import { Plusicon } from './Icons/Plusicon';
function App() {
  return (
    <div>
      <Button variant="primary" size="lg" onClick={()=>{console.log("Button clicked");
      }} text={"Primary button"} startIcon={<Plusicon size='lg' />} />
      <Button variant="secondary" size="lg" onClick={()=>{console.log("Button clicked");
      }} text={"Secondary button"} />
    </div>
  )
}

export default App
