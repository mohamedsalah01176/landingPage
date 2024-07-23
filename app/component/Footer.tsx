import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { IoMdHome } from 'react-icons/io'
import { SiGmail } from 'react-icons/si'

export default function Footer() {
  return (
    <div className='bg-[url("/wave.svg")] min-h-[900px] md:min-h-[550px] text-white relative bg-cover overflow-y-hidden  py-10'>
        <div className='top-[50%] absolute  flex justify-between z-10 gap-7 md:flex-row flex-col'>
            <div className=' p-3 basis-1/3'>
                <div className='text-3xl font-semibold italic  '>KONGO</div>
                <p className='w-full my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptatibus, odio maiores sit commodi temporibus et veniam voluptatem neque ad possimus sunt architecto. Velit dignissimos minima odio laudantium ducimus. Voluptate!</p>
                <div className='flex  gap-2 items-center flex-row'>
                    <div className="flex "><IoMdHome className="text-3xl text-white"/></div>
                    <div className="flex  " ><FaPhoneAlt className="text-2xl text-white"/></div>
                    <div className="flex "><SiGmail className="text-3xl text-white"/></div>
                </div>
            </div>
            <div className='p-3 flex justify-around basis-2/3'  >
                <div>
                    <h1 className='text-2xl mb-2'>Pages</h1>
                    <p>About</p>
                    <p>Cars</p>
                    <p>Reviews</p>
                    <p>conect</p>
                </div>
                <div>
                    <h1 className='text-2xl mb-2'>Helps</h1>
                    <p>Team of use</p>
                    <p>policy</p>
                </div>
                <div>
                    <h1 className='text-2xl mb-2'>Contact</h1>
                    <p>+201155953141</p>
                    <p>m48162698@gmail.com</p>
                    <p>Egypt, giza</p>
                </div>

            </div>

        </div>
    </div>
  )
}
