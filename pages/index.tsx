import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Abdullah Fazal | Portfolio</title>
        <meta name="description" content="Flutter Developer Portfolio for Abdullah Fazal" />
      </Head>
      <main className="flex flex-col min-h-screen pt-20">
        {/* Hero Section */}
        <section className="bg-emerald-600 text-gray-100 py-20">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-4xl lg:text-6xl font-bold mb-4">
                  Hi, I'm <span className="text-gray-400">Abdullah Fazal</span>
                </h1>
                <h2 className="text-2xl lg:text-3xl mb-6">
                  Flutter Developer
                </h2>
                <p className="text-lg mb-8">
                  Passionate about building high-performance cross-platform mobile applications using Flutter and Dart, with a strong focus on smooth user experience, scalability, and clean architecture. Continuously exploring new packages, tools, and best practices to enhance development speed, maintainability, and app responsiveness.                </p>
                <div className="flex space-x-4">
                  <Link
                    href="/contact"
                    className="bg-gray-100 hover:bg-gray-50 text-emerald-700 px-6 py-3 rounded-md font-semibold transition duration-300"
                  >
                    Contact Me
                  </Link>
                  {/* <Link
                    href="/projects"
                    className="border-2 border-white hover:bg-white hover:text-indigo-900 text-white px-6 py-3 rounded-md font-semibold transition duration-300"
                  >
                    View Projects
                  </Link> */}
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="w-64 h-64 mx-auto rounded-full  overflow-hidden">
                  <Image
                    src="/images/logo.png"
                    alt="Abdullah Fazal"
                    width={256}
                    height={256}
                    className="object-contain w-full h-full"
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <p className="text-lg text-gray-700 mb-6">
                  Hi! I'm a passionate Flutter developer who loves turning ideas into smooth, beautiful, and high-performing mobile apps. I specialize in building cross-platform applications using Flutter & Dart, ensuring a seamless user experience on both Android and iOS.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  From integrating Firebase for real-time features to working with REST APIs, SQLite, and tools like GetX and Provider for state management — I enjoy every part of the app development journey. Whether it’s an education app, a task manager, or something creative, I focus on writing clean, scalable code that delivers real value.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  I'm always learning and exploring new ways to improve performance, design, and user experience. Let’s build something amazing together!
                </p>
                <Link
                  href="/about"
                  className="text-emerald-600 font-semibold hover:text-emerald-800 transition duration-300"
                >
                  Learn more about me →
                </Link>
              </div>
              <div className="md:w-1/2 md:pl-10">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-indigo-100 p-4 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">Frontend</h3>
                    <p>Flutter</p>
                  </div>
                  <div className="bg-blue-100 p-4 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">DataBase</h3>
                    <p>SQL Lite, Firebase</p>
                  </div>
                  <div className="bg-purple-100 p-4 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">Projects</h3>
                    <p>Vakalat, Surat District Bar Association, Manjha,Express Courier & more</p>
                  </div>
                  <div className="bg-green-100 p-4 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">Tools</h3>
                    <p>Android Studio, Postman, Git, GitHub, Vs Code</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
