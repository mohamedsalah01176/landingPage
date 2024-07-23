import React from 'react'

export default function NavBar() {
  return (
    <div className='flex justify-between items-center py-3 px-7 text-second fixed w-full top-0 z-40 backdrop-blur-md'>
        <div className='text-3xl font-semibold italic '>KONGO</div>
        <ul className='  gap-5 text-xl justify-center items-center w-[75%] hidden sm:flex'>
            <li>Home</li>
            <li>Product</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}
