import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">About Me</h1>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <Image
            src="/profile.JPG"
            alt="Aditya Mishra"
            width={400}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-2xl font-semibold mb-4">Hi, I'm Aditya Mishra</h2>
          <p className="text-lg mb-4">
            I'm a passionate web developer with a keen eye for creating beautiful, functional, and user-friendly websites. With expertise in both front-end and back-end technologies, I bring ideas to life in the digital world.
          </p>
          <p className="text-lg mb-4">
            My skills include:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>HTML5, CSS3, JavaScript (ES6+)</li>
            <li>React.js, Next.js</li>
            <li>Node.js, Express.js</li>
            <li>MongoDB, SQL</li>
            <li>Responsive Web Design</li>
            <li>Version Control (Git)</li>
          </ul>
          <p className="text-lg">
            I'm always eager to learn new technologies and improve my skills. When I'm not coding, you can find me exploring new web design trends, contributing to open-source projects, or enjoying a good book on software architecture.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
