import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-svg-core/styles.css';

export default function App() {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
}