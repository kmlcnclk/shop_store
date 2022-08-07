import React from 'react';
import Header from '../components/Home/Header';
import HomeComponent from '../components/Home/HomeComponent';
import useGetProducts from '../hooks/useGetProducts';

function Home() {
  useGetProducts();

  return (
    <div>
      <Header />
      <HomeComponent />
    </div>
  );
}

export default Home;
