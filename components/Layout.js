import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

function Layout({children}) {
  return (
    <div className="w-100  bg-slate">
      <div className="container w-4/5 mx-auto">
        <Navbar />
        <div className="flex flex-row pt-16">
          <div className="w-1/4 ">
            <Sidebar />
          </div>
          <div className="w-3/4 ">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
