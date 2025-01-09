import Link from 'next/link'
import React from 'react'
import { Rochester } from "next/font/google";

const rochester = Rochester({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

function Header() {
  return (
    <div className='bg-green-300'>
      <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    
    
     <h2 className={rochester.className}> <span className="ml-3 text-xl font-bold">Mohammad Hanif Memon</span></h2>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <h2 className={rochester.className}> <Link href={"/"} className="mr-5 hover:text-gray-900">Home</Link></h2>
      <h2 className={rochester.className}> <Link href={"/about"} className="mr-5 hover:text-gray-900">About Us</Link></h2>
      <h2 className={rochester.className}> <Link href={"/contect"} className="mr-5 hover:text-gray-900">Contact Us</Link></h2>
    
    </nav>
    
    
  </div>
</header>

    </div>
  )
}

export default Header
