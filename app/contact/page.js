import React from 'react'
import { FaPhone, FaEnvelope, FaGithub } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Contact Me</h1>
      <div className="max-w-2xl mx-auto bg-blue-400 shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <p className="text-lg mb-6">
            I'd love to hear from you! Whether you have a project in mind or just want to say hello, feel free to reach out using any of the methods below.
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <FaPhone className="text-green-500 mr-4 text-xl" />
              <a href="tel:+919555290238" className="text-lg hover:text-green-500 transition duration-300">
                +91 9555290238
              </a>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-blue-500 mr-4 text-xl" />
              <a href="mailto:adityamishr957@gmail.com" className="text-lg hover:text-blue-500 transition duration-300">
                adityamishr957@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <FaGithub className="text-gray-700 mr-4 text-xl" />
              <a href="https://github.com/Dev-Adiii" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-gray-700 transition duration-300">
                github.com/Dev-Adiii
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact