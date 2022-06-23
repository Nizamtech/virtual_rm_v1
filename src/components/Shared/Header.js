import React from 'react';
import Sidebar from './Sidebar';

const Header = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Sidebar />
      </div>
    );
};

export default Header;