import React, { useState, useRef, useEffect } from 'react';
import './index.css';
import Flashcards from './assets/components/Flashcards';
import AboutUs from './assets/components/AboutUs';
import Footer from './assets/components/Footer';

function App() {
  const [showUpload, setShowUpload] = useState(false);
  const uploadRef = useRef(null);
  const fileInputRef = useRef(null);
  const fadeInRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setShowUpload(true);
            }, 500);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (uploadRef.current) {
      observer.observe(uploadRef.current);
    }

    return () => {
      if (uploadRef.current) {
        observer.unobserve(uploadRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            fadeObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (fadeInRef.current) {
      fadeObserver.observe(fadeInRef.current);
    }

    return () => {
      if (fadeInRef.current) {
        fadeObserver.unobserve(fadeInRef.current);
      }
    };
  }, []);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="app-container">
      <div className="content-wrapper">
        <header className="header">
          <h1 className="header-title">CropScan</h1>
          <nav>
            <ul className="nav-list">
              <li>
                <button className="nav-link" onClick={() => handleScroll('home')}>
                  Home
                </button>
              </li>
              <li>
                <button className="nav-link" onClick={() => handleScroll('about')}>
                  About Us
                </button>
              </li>
              <li>
                <button className="nav-link" onClick={() => handleScroll('upload')}>
                  Upload
                </button>
              </li>
            </ul>
          </nav>
        </header>

        <section id="home" className="hero-section">
          <div className="tagline gap-2 sm:p-6 md:p-8 lg:p-10 xl:p-12">Empowering Agriculture with AI</div>
          <div className='blurred-text pb-2 px-10 text-center'>
          <h2 className="hero-title">Detect Plant Diseases Easily</h2>
          <p className="hero-text">
            Upload your plant image and get instant disease detection and information.
          </p>
          <button className="hero-button" onClick={() => handleScroll('upload')}>
            Get Started
          </button>
        </div>
        </section>

        <section id="upload" ref={uploadRef} className="upload-section">
          {showUpload && (
            <div ref={fadeInRef}>
              <h2 className="upload-title">Upload Your Plant Image</h2>
              <div className="upload-container" onClick={handleUploadClick}>
                <button className='upload '>Upload Here</button>
                <input
                  type="file"
                  className="upload-input"
                  ref={fileInputRef}
                  style={{ display: 'none' }}
                />
              </div>
              <button className="upload-button">Detect Disease</button>
            
            <div>
            <h2 className="flashcards-title">🌿 What are the most common Plant Diseases Detectable by Leaf Symptom?🌿</h2>
            </div>
              <Flashcards/>
            </div>  
          )} 
          </section>
          
      </div> 
      <div className='py-4 pb-4'><AboutUs/></div>
      <div><Footer/></div>
      
    <div className="p-4 text-center text-white">CopyRight @2025</div>

  
  </div>
  

      

  );
  
}


export default App;