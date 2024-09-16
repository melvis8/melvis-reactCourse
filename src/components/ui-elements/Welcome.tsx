import React from 'react'
import Steps from './Steps'
import Logo3 from "/logo3.svg"
import Image from "/image.svg"

function Welcome() {
  return (
    <div className="flex-1 w-full h-full py-10 ">
      <div className="flex w-[80%] h-full flex flex-col text-center items-center space-y-4 mx-auto" >
      <img src={Logo3} alt="logo3" className="h-[2rem] w-[2rem] mx-auto" />
      <h1 className="font-bold text-3xl">Welcome to work et yamo</h1>
      <p className="text-sm font-extralight text-pretty">Plus que 3 petites minutes ........</p>
      <img src={Image} alt="" />
      <div className="flex justify-around items-center gap-2 py-6">
          <Steps color="blue"/>
          <Steps color="blue"/>
          <Steps color="blue"/>
          <Steps color="blue"/>
          </div>
    </div>
    </div>
  )
}

export default Welcome