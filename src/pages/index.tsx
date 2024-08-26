import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Head>
        <title>Lightspeed - Next.js Pages Router Template</title>
        <meta name="description" content="Lightspeed is a Next.js Pages Router template with Tailwind CSS for rapid SaaS development." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Build Your SaaS at <span className="text-yellow-300">Lightspeed</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            The Next.js Pages Router template with all you need to launch your SaaS in days, not weeks.
          </p>
          <a
            href="#"
            className="bg-yellow-300 text-gray-900 font-bold py-3 px-6 rounded-lg text-lg hover:bg-yellow-400 transition duration-300"
          >
            Get Started
          </a>
        </section>

        <section className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { title: 'Next.js Pages Router', description: 'Built on the robust and flexible Pages Router architecture.' },
            { title: 'Tailwind CSS', description: 'Rapidly build custom designs with utility-first CSS framework.' },
            { title: 'SEO Optimized', description: 'Out-of-the-box SEO best practices for better visibility.' },
          ].map((feature, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </section>

        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Choose Lightspeed?</h2>
          <p className="text-xl mb-8">
            Lightspeed combines the power of Next.js with the flexibility of the Pages Router, 
            allowing you to build scalable applications with ease.
          </p>
          <div className="flex justify-center">
          <Image
            src="/images/template-preview.png"
            alt="Lightspeed Template Preview"
            width={800}
            height={400}
            className="rounded-lg shadow-lg"
          />
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Launch?</h2>
          <p className="text-xl mb-8">
            Start building your next big idea with Lightspeed today.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#"
              className="bg-yellow-300 text-gray-900 font-bold py-3 px-6 rounded-lg text-lg hover:bg-yellow-400 transition duration-300"
            >
              Download Now
            </a>
            <a
              href="#"
              className="bg-gray-700 text-white font-bold py-3 px-6 rounded-lg text-lg hover:bg-gray-600 transition duration-300"
            >
              View on GitHub
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
