import { useState } from 'react';
import { Button } from '../components/Button'
import {Card} from '../components/Card'
import { ContentModal } from '../components/ContentModal';
import { Plusicon } from '../Icons/Plusicon';
import { Shareicon } from '../Icons/Shareicon';
import { SideBar } from '../components/Sidebar';
export function Dashboard() {
  const [modalOpen,setModal]=useState(false);
  
  return (
    <div>
      <div><SideBar /></div>
      <div className='ml-60 h-screen'>
        <ContentModal open={modalOpen} onClose={()=>{setModal(false)}} />
        <div className='flex justify-end max-w-full'>
          <Button variant="primary" size="md" onClick={()=>{setModal(true)}} text={"Add Content"} startIcon={<Plusicon size='md'/>} />
          <Button variant="secondary" size="md" onClick={()=>{console.log("Button clicked")}} text={"Share Vault"} startIcon={<Shareicon size='md' />} />
        </div>
        <div className='flex space-x-2 flex-wrap mx-5'>
          <Card type='youtube' title='Coder army' link='https://www.youtube.com/watch?v=7rrUVevoECg' />
          <Card type='tweet' title='Tweet' link='https://twitter.com/username/status/807811447862468608' />
        </div> 
      </div>
    </div>
    
  )
}

