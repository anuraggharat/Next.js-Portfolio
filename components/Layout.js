import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

function Layout({children}) {
  return (
    <div className="w-100 min-h-screen bg-slate">
      <div className="container w-4/5 mx-auto">
        <Navbar />
        <div className="flex flex-row ">
          <div className="w-1/4  min-h-screen">
            <Sidebar />
          </div>
          <div className="w-3/4 bg-teal-300  min-h-screen">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
