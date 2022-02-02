import Link from 'next/link';
import React from 'react';

function Navbar() {
  return (
    <nav className="flex flex-row justify-between h-16 align-middle bg-slate-400">
      <div className="bg-amber-200 flex flex-col justify-center">
        <h2 className='font-bold'>Anurag Gharat</h2>
      </div>
      <div className="flex flex-col justify-center bg-amber-200">
        <div className="flex flex-row justify-between ">
          <Link href={"/"}>
            <a className="ml-8">Home</a>
          </Link>
          <Link href={"/"}>
            <a className="ml-8">Home</a>
          </Link>

          <Link href={"/"}>
            <a className="ml-8">Home</a>
          </Link>
          <Link href={"/"}>
            <a className="ml-8">Home</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
