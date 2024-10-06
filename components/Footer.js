import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-2">
      <div className="container mx-auto px-1">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold">Aditya Mishra</p>
            <p className="text-sm">&copy; {new Date().getFullYear()} All rights reserved.</p>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end gap-4">
            <Link href="/privacy" className="text-sm hover:text-green-400 transition duration-300">Privacy Policy</Link>
            <Link href="/terms" className="text-sm hover:text-green-400 transition duration-300">Terms of Service</Link>
            <Link href="/contact" className="text-sm hover:text-green-400 transition duration-300">Contact Us</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer