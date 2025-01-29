import React from 'react';
import Scroll from '../../components/Scroll';
import Hero from '../../components/Hero';
import Cards from '../Cards';
import Arrivals from '../../components/Arrivals';
import Model from '../../components/Model'
const Home = () => {
  return (
    <div>
      <Scroll />
      <Cards/>
      <Model/>
      <Arrivals/>
      <Hero />
      
    </div>
  );
};

export default Home;
