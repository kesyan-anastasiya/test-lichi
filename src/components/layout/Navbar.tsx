import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar p-4 shadow-md">
      <div className="container mx-auto flex justify-center space-x-2">
        <Link href="/">
          <span className="font-bold hover:text-gray-700 cursor-pointer">Главная</span>
        </Link>
        <Link href="/articles">
          <span className="font-bold hover:text-gray-700 cursor-pointer">Статьи</span>
        </Link>
      </div>
    </nav>
  );
}