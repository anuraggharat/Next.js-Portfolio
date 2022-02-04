import Link from 'next/link';
import React from 'react';

function Navbar() {
  return (
    <nav className=" fixed w-full bg-white z-50">
      <div className="flex w-4/5 mx-auto flex-row justify-between h-16 align-middle container">
        <div className=" flex flex-col justify-center">
          <h2 className="font-bold">Anurag Gharat</h2>
        </div>
        <div className="flex flex-col justify-center ">
          <div className="flex flex-row justify-between ">
            <Link href={"/"}>
              <a className="ml-8">Home</a>
            </Link>
            <Link href={"/about"}>
              <a className="ml-8">About</a>
            </Link>

            <Link href={"/projects"}>
              <a className="ml-8">Projects</a>
            </Link>
            <Link href={"/blog"}>
              <a className="ml-8">Blogs</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
