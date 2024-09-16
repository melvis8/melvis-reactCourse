import React from 'react'

interface Icolor  {
color: "blue" | "gray" | "white"
}

function Steps({color}: Icolor) {
  return (
    <div style={{backgroundColor: color}} className='border rounded-xl h-2 w-[5rem] '>
      
    </div>
  )
}

export default Steps