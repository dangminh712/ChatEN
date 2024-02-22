import React from 'react';
import Header from './header';
import Footer from './footer';
const DefaultLayout = ({ children }:any) => {
  return (
    <div className='bg-[white]'>
        <Header />
      <main>{children}</main>
    </div>
  );
};

export default DefaultLayout;
