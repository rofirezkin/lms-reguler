import React from 'react';
import SearchBar from './SearchBar';
import TabBar from './TabBar';

const Navbar = ({handleData}) => {
  return (
    <>
      <SearchBar />
      <TabBar activeDashboard={handleData} />
    </>
  );
};

export default Navbar;
