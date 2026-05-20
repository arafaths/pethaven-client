import Footer from '@/components/actions/Footer';
import Navbar from '@/components/actions/Navbar';
import React from 'react';

const LayoutPage = ({ children }) => {
  return <>
    <Navbar />
    {children}
    <Footer/>
  </>;
};

export default LayoutPage;