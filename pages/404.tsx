import Head from 'next/head';
import Link from 'next/link';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Page Not Found | Abdullah Fazal Portfolio</title>
      </Head>
      <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-r from-blue-800 to-indigo-900 text-white">
        <div className="text-center">
          <h1 className="text-9xl font-bold mb-4">404</h1>
          <p className="text-2xl mb-8">Oops! Page not found</p>
          <p className="mb-8 max-w-md mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link 
            href="/" 
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-6 py-3 rounded-md font-semibold transition duration-300"
          >
            Go back home
          </Link>
        </div>
      </div>
    </>
  );
} 