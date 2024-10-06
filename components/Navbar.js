'use client'
import React, { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
    <nav className="bg-blue-400 shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <div>
                <Link href="/" className="flex items-center py-4 px-2">
                  <span className="font-semibold text-white text-2xl" >Aditya Mishra </span>
                </Link>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <Link href="/about" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">About</Link>
              <Link href="/contact" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Contact</Link>
            </div>
            <div className="md:hidden flex items-center">
              <button className="outline-none mobile-menu-button" onClick={toggleMenu}>
                <svg className="w-6 h-6 text-gray-500 hover:text-green-500"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className={`mobile-menu ${isMenuOpen ? 'block' : 'hidden'}`}>
          <ul className="">
            {/* <li><Link href="/" className="block text-sm px-2 py-4 text-gray-500 hover:bg-green-500 hover:text-white transition duration-300">Home</Link></li> */}
            <li><Link href="/about" className="block text-sm px-2 py-4 text-white hover:bg-green-500 hover:text- transition duration-300">About</Link></li>
            <li><Link href="/contact" className="block text-sm px-2 py-4 text-white hover:bg-green-500 hover:text-white transition duration-300">Contact</Link></li>
          </ul>
        </div>
      </nav>
      
      </>
  )
}

export default Navbar