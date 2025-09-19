import React from 'react';
import './Basics.css';

const Basics = () => {
  return (
    <div className="basics-container">
      <div className="basics-header">
        <h1>🎾 Tennis Basics</h1>
        <p>Essential fundamentals for every tennis player</p>
      </div>

      <div className="basics-content">
        <section className="basics-section">
          <h2>🏟️ Court Layout</h2>
          <div className="basics-grid">
            <div className="basics-item">
              <h3>Baseline</h3>
              <p>The back line of the court where most groundstrokes are hit from</p>
            </div>
            <div className="basics-item">
              <h3>Service Line</h3>
              <p>The line that divides the court into front and back sections</p>
            </div>
            <div className="basics-item">
              <h3>Net</h3>
              <p>The barrier in the middle of the court that the ball must clear</p>
            </div>
            <div className="basics-item">
              <h3>Service Boxes</h3>
              <p>The rectangular areas where serves must land</p>
            </div>
          </div>
        </section>

        <section className="basics-section">
          <h2>🤲 Basic Grips</h2>
          <div className="basics-grid">
            <div className="basics-item">
              <h3>Continental Grip</h3>
              <p>Most versatile grip - used for serves, volleys, and slices</p>
            </div>
            <div className="basics-item">
              <h3>Eastern Forehand</h3>
              <p>Good for beginners - provides control and consistency</p>
            </div>
            <div className="basics-item">
              <h3>Two-Handed Backhand</h3>
              <p>Easier for beginners - provides more power and control</p>
            </div>
            <div className="basics-item">
              <h3>One-Handed Backhand</h3>
              <p>More advanced - requires better technique but more reach</p>
            </div>
          </div>
        </section>

        <section className="basics-section">
          <h2>🎯 Basic Shots</h2>
          <div className="basics-grid">
            <div className="basics-item">
              <h3>Forehand</h3>
              <p>The most natural groundstroke - hit on the dominant side</p>
            </div>
            <div className="basics-item">
              <h3>Backhand</h3>
              <p>Groundstroke hit on the non-dominant side</p>
            </div>
            <div className="basics-item">
              <h3>Serve</h3>
              <p>The shot that starts each point - hit overhead</p>
            </div>
            <div className="basics-item">
              <h3>Volley</h3>
              <p>Shot hit before the ball bounces - usually at the net</p>
            </div>
          </div>
        </section>

        <section className="basics-section">
          <h2>🏃 Basic Movement</h2>
          <div className="basics-grid">
            <div className="basics-item">
              <h3>Ready Position</h3>
              <p>Feet shoulder-width apart, knees bent, racket in front</p>
            </div>
            <div className="basics-item">
              <h3>Split Step</h3>
              <p>Small hop before your opponent hits the ball</p>
            </div>
            <div className="basics-item">
              <h3>Side Steps</h3>
              <p>Move sideways to reach wide shots</p>
            </div>
            <div className="basics-item">
              <h3>Recovery</h3>
              <p>Return to center court after each shot</p>
            </div>
          </div>
        </section>

        <section className="basics-section">
          <h2>📏 Basic Rules</h2>
          <div className="basics-grid">
            <div className="basics-item">
              <h3>Scoring</h3>
              <p>Love (0), 15, 30, 40, Game. Win by 2 points at deuce</p>
            </div>
            <div className="basics-item">
              <h3>Service</h3>
              <p>Must serve diagonally into the service box</p>
            </div>
            <div className="basics-item">
              <h3>Ball In Play</h3>
              <p>Ball must land within the court boundaries</p>
            </div>
            <div className="basics-item">
              <h3>Let</h3>
              <p>Replay the point if the ball hits the net on serve</p>
            </div>
          </div>
        </section>

        <section className="basics-section">
          <h2>💡 Beginner Tips</h2>
          <div className="basics-tips">
            <div className="tip-item">
              <span className="tip-icon">👀</span>
              <p>Keep your eye on the ball at all times</p>
            </div>
            <div className="tip-item">
              <span className="tip-icon">🎾</span>
              <p>Start with slow, controlled movements</p>
            </div>
            <div className="tip-item">
              <span className="tip-icon">🦵</span>
              <p>Use your legs to generate power, not just your arms</p>
            </div>
            <div className="tip-item">
              <span className="tip-icon">🔄</span>
              <p>Follow through on every shot</p>
            </div>
            <div className="tip-item">
              <span className="tip-icon">😌</span>
              <p>Stay relaxed and don't grip the racket too tightly</p>
            </div>
            <div className="tip-item">
              <span className="tip-icon">🎯</span>
              <p>Focus on consistency over power initially</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Basics;
