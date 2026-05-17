import React from 'react';
import GalleryImages from './Photo-Gallery/components/Gallery-Images';
import Navbar from './Navbar';
import Footer from './Footer';
export default function Gallery() {
  return (
    <div>
        <Navbar />
      <GalleryImages />
        <Footer />
    </div>
  );
}