import Image from 'next/image'
import React from 'react'

export default function Section3() {
  return (
    <div className='flex justify-center items-center gap-10 flex-wrap py-16 relative '>
        <div><Image src={'/Aloe-Vera-99-Soothing-Gel-120ML.jpg'} alt='image' className='w-[300px] h-[300px] rounded-2xl' height={500} width={500}/></div>
        <div><Image src={'/OIP.jpeg'} alt='image' className='w-[300px] h-[300px] rounded-2xl' height={500} width={500}/></div>
        <div><Image src={'/1-2-600x800.jpg'} alt='image' className='w-[300px] h-[300px] rounded-2xl' height={500} width={500}/></div>


        <div className={`h-[450px] w-[450px] rounded-full bg-[#53ff35c2] blur-2xl -top-[10%] lg:-top-[20px] -left-[0%] lg:left-[0%] absolute -z-10 `}></div>
        <div className={`h-[450px] w-[450px] rounded-full bg-[#53ff35c2] blur-2xl top-[20%] lg:top-[15px] left-[10%] lg:left-[25%] absolute -z-10 `}></div>
        <div className={`h-[450px] w-[450px] rounded-full bg-[#53ff35c2] blur-2xl top-[50%] lg:-top-[15px] left-[0%] lg:left-[50%] absolute -z-10 `}></div>
        <div className={`h-[450px] w-[450px] rounded-full bg-[#53ff35c2] blur-2xl top-[70%] lg:top-[10px] left-[10%] lg:left-[70%] absolute -z-10 `}></div>
    </div>
  )
}
