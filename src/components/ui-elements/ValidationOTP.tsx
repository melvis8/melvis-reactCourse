import React from "react";
import Logo3 from "/logo3.svg";
import Code from "./Code";
import Steps from "./Steps";

function ValidationOTP() {
  return (
    <div className="flex-1 w-full h-full py-12 ">
      <div className="flex w-[80%] h-full flex flex-col text-center items-center space-y-8 mx-auto">
      <img src={Logo3} alt="logo3" className="h-[2rem] w-[2rem] mx-auto" />
      <h1 className="font-bold text-3xl">Verification</h1>
      <p className="text-sm font-extralight text-pretty">Rentrez vos infos pour vous connecter .</p>
      <Code />
      <button className="py-4 w-full  bg-blue-700">Validez le code otp</button>
      <p className="text-sm font-extralight text-center ">By clicking continue, you agree to our
      <a href="/" className="text-blue-400 underline"> Terms of Service</a> and <a href="/"  className="text-blue-400 underline"> Privacy Policy</a>.</p>
      </div>
      <div className="flex justify-around items-center gap-2 ">
          <Steps color="blue"/>
          <Steps color="blue"/>
          <Steps color="gray"/>
          <Steps color="gray"/>
          </div>
    </div>
  );
}

export default ValidationOTP;
