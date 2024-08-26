import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-gray-900 text-white">
            <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
                <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <svg
                        className="w-8 h-8 text-yellow-300"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                    <span className="self-center text-xl md:text-3xl font-semibold whitespace-nowrap">Lightspeed</span>
                </Link>
                <div>
                    <a
                        href="https://github.com/aroramrinaal/lightspeed"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-yellow-300 transition-colors duration-300"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;