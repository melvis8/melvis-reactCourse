import Logo from "/logo2.svg"
import Step from '../items/Step'
import SidebarMock from '@/utils/Sidebar.mock'
import { useState } from 'react'
import { any, number } from "zod"

interface Ivalid{
    active :number
    setNext : any
    setPrev : any
}

function SideBar({active, setNext, setPrev}: Ivalid) {
  

    return (
        <section className='flex-col items-center justify-between flex-1 hidden px-4 py-10 md:flex bg-bgme'>
          <div>
          <img src={Logo} alt="itenginerring's logo" />
            <div className="mt-10">
                {SidebarMock.map((item, index) => (
                    <Step key={index} className={index === active ? "text-black flex gap-4   w-full h-20  items-center justify-start" : "text-gray-400 flex gap-4   w-full h-20 items-center justify-start"} icon={item.icon} title={item.title} description={item.description} />
                ))}

            </div>
          </div>
            <div className="flex justify-between w-full justify-self-end">
                <button  onClick={setPrev} className="flex" > <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
                    <path d="M3.99982 11.9998L19.9998 11.9998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8.99963 17C8.99963 17 3.99968 13.3176 3.99966 12C3.99965 10.6824 8.99966 7 8.99966 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg> <span> Vos Détails</span></button>
                <button onClick={setNext}>Sign In</button>
            </div>
        </section>
    )
}

export default SideBar