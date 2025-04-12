import React from 'react';
import ScrollingBanner from './components/ScrollingBanner';
import HeroSection from './components/HeroSection';
import ScrollingImageBar from './components/ScrollingImageBar';
import CexPartners from './components/CexPartners';
import InfiniteScroll from './components/InfiniteScroll';
import HowToBuy from './components/HowToBuy';
import Tokenomics from './components/Tokenomics';
import ImageSlider from './components/ImageSlider';
import Footer from './components/Footer';

export default function App() {
  return (
    <main>
      <ScrollingBanner />
      <HeroSection />
      <ScrollingImageBar />
      <CexPartners />
      <InfiniteScroll />
      <HowToBuy />
      <Tokenomics />
      <ImageSlider />
      <Footer />
    </main>
  );
}