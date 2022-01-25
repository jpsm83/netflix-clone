import React from 'react';
import Nav from '../Nav/Nav';
import Banner from "../Banner/Banner"
import "./HomeScreen.css"

export default function HomeScreen() {
  return <div className='homeScreen'>
      <Nav />
      <Banner />
  </div>;
}
