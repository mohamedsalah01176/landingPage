import React from 'react'
import Image from "next/image";


export default function Section1() {
  return (
    <div className='relative  min-h-screen  '>
    <Image src="/OIF.jpeg" alt="Logo" layout="fill" objectFit="fill" />
    <div className={`h-[250px] w-[250px] rounded-full bg-[#53ff35c2] blur-3xl -top-[50px] -left-[50px] absolute `}></div>

      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] pt-5 my-5 flex justify-center items-center flex-col md:flex-row  w-[80%]">
        <div className="basis-5/12">
          <h1 className="text-4xl  lg:text-7xl text-second font-bold ">Revitalize Your Skin And Health</h1>
          <p className="text-lg text-primry my-4 font-normal">Shop Premium Aloe Vera Products Online</p>
          <button className="border-second text-lg text-second border-2 py-2 px-10 bg-white/30  ">Shop</button>
        </div> 
        <div className="basis-4/12">
          <Image src={'/R.png'} alt="image" width={500} height={500} className="rounded-full w-full h-full bg-[#eeeeeeb8] p-2 "/>
        </div>
      </div>
      </div>
  )
}
