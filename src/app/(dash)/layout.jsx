import Navbar from '@/components/actions/Navbar';
import Sidebar from '@/components/actions/Sidebar';
import Nav from '@/components/dashbord/Nav';
import React from 'react';

const LayoutPage = ({ children }) => {
  return (
    <>
      <Nav />
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 text-white pl-0 lg:pl-64 overflow-x-hidden">
          {children}
        </main>
      </div>
    </>
  );
};

export default LayoutPage;
