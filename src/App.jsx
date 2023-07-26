import React from 'react';
import Header from './components/Header';
import MainBody from './components/MainBody';
import ProductSection from './components/ProductSection';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

const App = () => {
  return (
    <div>
      <Header />
      <MainBody />
      <ProductSection/>
      <ContactForm/>
      <Footer/>
    </div>
  );
};

export default App;

