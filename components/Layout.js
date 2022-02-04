import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

function Layout({children}) {
  return (
    <div className="w-100  bg-slate">
      <Navbar />
      <div className="flex flex-row pt-32 relative container w-4/5 mx-auto">
          <div className="w-1/5 fixed">
            <Sidebar />
          </div>
          <div className="w-3/4  ml-auto ">
            {children}
          </div>
        </div>
    </div>
  );
}

export default Layout;
