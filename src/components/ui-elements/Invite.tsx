import React from "react";
import Logo3 from "/logo3.svg";
import Steps from "./Steps";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function Invite() {
  return (
    <div className="flex-1 w-full h-full py-14 ">
      <div className="flex w-[80%] h-full flex flex-col text-center items-center space-y-4 mx-auto" >
        <img src={Logo3} alt="logo work et yamo" className="h-[2rem] w-[2rem] mx-auto" />
        <h1 className="font-bold text-3xl mx-auto" >Invite your friends</h1>
        <p>Veuillez Inviter 04 amis pour finaliser l’inscription </p>
        <h1 className="font-semibold text-xl pr-[15rem]" >Numeros de Télephone</h1>
        <Input placeholder="Numero whatsapp"/>
        <Input placeholder="Numero whatsapp"/>
        <Input placeholder="Numero whatsapp"/>
        <Input placeholder="Numero whatsapp"/>
        <button className="py-2 w-full  bg-blue-700">Inviter</button>
        <p className="text-sm font-extralight text-center ">By clicking continue, you agree to our
        <a href="/" className="text-blue-400 underline"> Terms of Service</a> and <a href="/"  className="text-blue-400 underline"> Privacy Policy</a>.</p>
      </div>
      <div className="flex justify-around items-center gap-2 py-6">
          <Steps color="blue"/>
          <Steps color="blue"/>
          <Steps color="blue"/>
          <Steps color="gray"/>
          </div>
    </div>
  );
}

export default Invite;
