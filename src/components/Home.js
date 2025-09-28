import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-hero">
          <h1 className="home-title">
            🎾 Welcome to TempoDrill
          </h1>
          <p className="home-subtitle">
            Your personalized tennis practice companion
          </p>
          <p className="home-description">
            Create custom practice plans tailored to your skill level, available equipment, 
            and time constraints. Get the most out of every practice session with drills 
            designed to improve your game.
          </p>
        </div>
        
        <div className="home-features">
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Personalized Plans</h3>
            <p>Get drills matched to your skill level and goals</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">⏱️</div>
            <h3>Time-Based</h3>
            <p>Practice plans that fit your available time</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🏓</div>
            <h3>Equipment Flexible</h3>
            <p>Works with whatever equipment you have available</p>
          </div>
        </div>
        
        <div className="home-actions">
          <Link to="/" className="generate-drills-btn">
            Generate Drills
          </Link>
          <Link to="/basics" className="basics-link">
            Learn Tennis Basics
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
