import React from 'react';
import { Hero, Sales, FlexContent, Stories, Footer, Navbar, Cart } from './components';
import { heroapi, popularsales, toprateslaes, ragnarok, skyrim, storys, footerAPI } from './data/data.js';

const App = () => {
  return (
    <>
      <Navbar />
      <Cart />
      <main className='flex flex-col gap-16 relative'>
        <Hero heroapi={heroapi} />
        <Sales endpoint = {popularsales} ifExists />
        <FlexContent endpoint = {ragnarok} ifExists />
        <Sales endpoint = {toprateslaes} />
        <FlexContent endpoint = {skyrim} />
        <Stories story = {storys} />
      </main>
      <Footer footerAPI = {footerAPI} />
    </>
  )
}

export default App