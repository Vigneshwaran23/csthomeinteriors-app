import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './assets/logo.jpg'; // Ensure the file name and extension are correct

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(timer);
  }, [images.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="slider-container">
      <div
        className="slider-image fade"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      />
      <button onClick={handlePrev} className="slider-button prev">
        &#10094;
      </button>
      <button onClick={handleNext} className="slider-button next">
        &#10095;
      </button>
    </div>
  );
};

const InquiryForm = () => {
  return (
    <div className="inquiry-form fade">
      <h2>Contact Us</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const App = () => {
  const images = [
    '/assets/image2.jpg',
    '/assets/image3.jpg',
    '/assets/image4.jpg',
    '/assets/image5.jpg',
    '/assets/image6.jpg',
    '/assets/image7.jpg',
    '/assets/image8.jpg',
    '/assets/image9.jpg',
    '/assets/image10.jpg',
    '/assets/image11.jpg',
    '/assets/image12.jpg',
    '/assets/image13.jpg',
    '/assets/image14.png',
    // Add more image paths as needed
  ];

  return (
    <div className="App">
      <header className="App-header fade">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
        <h1>CST HOME INTERIORS</h1>
        <p className="small-text">Touch the colors!</p>
        </div>
      </header>
      <main className="App-main">
        <ImageSlider images={images} />
        <InquiryForm />
      </main>
      <footer className="App-footer">
      <p>
          <i className="fas fa-phone phone-icon"></i> (+91) 9750663390
        </p>
        <p><i className="fas fa-map-marker-alt address-icon"></i>No 6, Kiran building, Samruddhi Layout Rd, </p>
        <p>Seegehalli, Krishnarajapuram, Bengaluru, Karnataka 560067</p>
        <p>&copy; 2024 CST HOME INTERIORS. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
