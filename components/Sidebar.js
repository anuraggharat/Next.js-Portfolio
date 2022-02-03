import Link from 'next/link';
import React from 'react';
import { BsGithub, BsTwitter, BsInstagram } from "react-icons/bs";
import {MdLocationPin,MdLocationCity} from 'react-icons/md'

export default function Sidebar() {
  return (
    <div className="flex flex-col px-2 ">
      <div className="w-100 object-cover ">
        <img className="w-36 h-36 rounded-full " src="/images/pic.png" />
      </div>
      <div>
        <h3 className="text-xl font-medium">Anurag Gharat</h3>
        <p className="text-xs text-gray-500 font-normal ">Mumbai, India</p>
        <p className="text-sm   mt-3">
          Senior Software Engineer
        </p>
        <p className="text-sm  ">@LTI</p>
      </div>
      <div className="flex flex-row flex-wrap text-sm mt-3">
        <p className="px-2 py-1 border border-gray-400 rounded-lg mr-2 mt-2">
          HTML
        </p>
        <p className="px-2 py-1 border border-gray-400 rounded-lg mr-2  mt-2">
          CSS
        </p>
        <p className="px-2 py-1 border border-gray-400 rounded-lg mr-2  mt-2">
          JavaScript
        </p>
        <p className="px-2 py-1 border border-gray-400 rounded-lg mr-2  mt-2">
          React
        </p>
        <p className="px-2 py-1 border border-gray-400 rounded-lg mr-2 mt-2">
          Tailwind
        </p>
        <p className="px-2 py-1 border border-gray-400 rounded-lg mr-2 mt-2">
          MongoDB
        </p>
        <p className="px-2 py-1 border border-gray-400 rounded-lg mr-2 mt-2">
          MySQL
        </p>
        <p className="px-2 py-1 border border-gray-400 rounded-lg mr-2 mt-2">
          Node
        </p>
        <p className="px-2 py-1 border border-gray-400 rounded-lg mr-2 mt-2">
          GIT
        </p>
      </div>
      <div className="flex flex-row flex-wrap mt-5">
        <Link href="/">
          <BsGithub className="text-2xl mr-2" />
        </Link>
        <Link href="/">
          <BsTwitter className="text-2xl mr-2" />
        </Link>
        <Link href="/">
          <BsInstagram className="text-2xl" />
        </Link>
      </div>
    </div>
  );
}
