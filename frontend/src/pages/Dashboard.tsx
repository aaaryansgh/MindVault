import { useEffect, useState } from 'react';
import { Button } from '../components/Button'
import {Card} from '../components/Card'
import { ContentModal } from '../components/ContentModal';
import { Plusicon } from '../Icons/Plusicon';
import { Shareicon } from '../Icons/Shareicon';
import { SideBar } from '../components/Sidebar';
import { useContent } from '../hooks/useContent';
export function Dashboard() {
  const [modalOpen,setModal]=useState(false);
  const {contents,refresh}=useContent();
  useEffect(()=>{
    refresh();
  },[modalOpen])
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
          {contents.map(({type,title,link})=><Card type={type} title={title} link={link} />)}
        </div> 
      </div>
    </div>
    
  )
}

