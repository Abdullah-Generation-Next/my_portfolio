"use client";

import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and brief description */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <div className="w-10 h-10 mr-2 rounded-full bg-emerald-600 flex items-center justify-center text-white">
                AF
              </div>
              <span className="font-bold text-xl">Abdullah Fazal</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Flutter developer specializing in building high-performance, cross-platform mobile apps and engaging digital experiences.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/Abdullah-Generation-Next" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/abdullah-fazal-728997246/" target="_blank" rel="noopener noreferrer" className="bg-blue-700 text-white p-3 rounded-full hover:bg-blue-600 transition duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
              {/* <a href="https://instagram.com/Saalim2470" target="_blank" rel="noopener noreferrer" className="bg-blue-400 text-white p-3 rounded-full hover:bg-blue-500 transition duration-300">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a> */}
            </div>
          </div>

          {/* Site map */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Site Map</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors duration-300">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors duration-300">About</Link>
              </li>
              {/* <li>
                <Link href="/projects" className="text-gray-400 hover:text-white transition-colors duration-300">Projects</Link>
              </li> */}
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Web Development</li>
              <li className="text-gray-400">Full Stack Development</li>
              <li className="text-gray-400">Frontend Development</li>
            </ul>
          </div>

          {/* Contact info */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <span className="flex items-start">
                  <svg className="w-5 h-5 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>abdullahfazal517@gmail.com</span>
                </span>
              </li>
              <li className="text-gray-400">
                <span className="flex items-start">
                  <svg className="w-5 h-5 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>+91 9327371663</span>
                </span>
              </li>
              <li className="text-gray-400">
                <span className="flex items-start">
                  <svg className="w-5 h-5 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>Surat, Gujarat, India</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-8">
          <p className="text-center text-gray-400">
            &copy; {currentYear} Abdullah Fazal. All rights reserved.
          </p>
          {/* <p className="text-center text-gray-500 text-sm mt-2">
            Designed and built with Next.js and TailwindCSS
          </p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer; 