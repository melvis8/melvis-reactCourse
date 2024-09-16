import SideBar from '@/components/ui-elements/SideBar'
import { useState } from 'react'
 import FormSection from '../components/ui-elements/FormSection'
import { Toaster } from "@/components/ui/toaster"
function App() {
  const [isActive , SetIsActive] = useState(0)
  const taill = 4

  function setNext() {
    SetIsActive((isActive) => (isActive + 1) % taill)
}

function setPrev() {
    SetIsActive((isActive) => (isActive - 1 + taill) % taill )
}
return (
  <main className=' flex w-screen h-screen'>
    <SideBar active={isActive} setNext={setNext} setPrev={setPrev}/>
    <FormSection active={isActive} />
    <Toaster/>
  </main>
)
}

export default App