import Image from "next/image";
import Link from 'next/link';



export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-xl text-gray-600">Hi, I'm Aditya Mishra. A passionate developer and problem solver.</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="text-lg text-gray-700 mb-6">
            I'm a dedicated software developer with a keen interest in creating efficient and innovative solutions. 
            My expertise spans across various technologies and I'm always eager to learn more.
          </p>
          <Link href="/about" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 inline-block text-center">
            Learn More
          </Link>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/profile1.JPG"
            alt="Aditya Mishra"
            width={300}
            height={300}
            className="rounded-full shadow-lg"
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((project) => (
            <div key={project} className="border rounded-lg p-4 shadow-md">
              <h3 className="text-xl font-semibold mb-2">Project {project}</h3>
              <p className="text-gray-600 mb-4">A brief description of the project and its key features.</p>
              <Link href={`/projects/${project}`} className="text-blue-500 hover:underline">
                View Project
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-6">Let's Connect</h2>
        <p className="text-lg text-gray-700 mb-6">
          Interested in collaborating or have a project in mind? I'd love to hear from you!
        </p>
        <Link href="/contact" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300 inline-block">
          Get in Touch
        </Link>
      </section>
    </div>
  );
}
