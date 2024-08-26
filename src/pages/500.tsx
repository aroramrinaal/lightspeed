import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

const FiveHundred = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Head>
        <title>500 - Server Error | Lightspeed</title>
        <meta name="description" content="Oops! Something went wrong on our end." />
      </Head>

      <Navbar />

      <main className="container mx-auto px-4 py-16 text-center">
        <div className="mb-8 relative">
          <motion.div 
            className="text-9xl font-bold text-yellow-300 opacity-20"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            500
          </motion.div>
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl font-bold text-yellow-300"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            500
          </motion.div>
        </div>

        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Oops! Server Error
        </motion.h1>

        <motion.p
          className="text-xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Our servers decided to take a quick nap at lightspeed. We're waking them up!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Link href="/"
            className="bg-yellow-300 text-gray-900 font-bold py-3 px-6 rounded-lg text-lg hover:bg-yellow-400 transition duration-300"
          >
            Back to Home
          </Link>
        </motion.div>
      </main>
    </div>
  );
};

export default FiveHundred;