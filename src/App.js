import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-svg-core/styles.css';

export default function App() {
  // useState Hooks to keep track of what page  should be displayed. 
  const [currentPage, setCurrentPage] = useState("Home");

  return (
    <>
      <Header>
        <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </Header>
      <Main currentPage={currentPage} />
      <Footer />
    </>
  )
}