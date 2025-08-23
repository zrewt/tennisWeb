import React from 'react';
import './DrillDetail.css';

const DrillDetail = ({ drill, onBack }) => {
  return (
    <div className="drill-detail-container">
      <div className="drill-detail-card">
        <div className="drill-detail-header">
          <button className="back-btn" onClick={onBack}>
            ← Back to Practice Plan
          </button>
          <div className="drill-detail-title">
            <h1>{drill.title}</h1>
            <div className="drill-detail-meta">
              <span className="drill-time">{drill.timeRequired} minutes</span>
              <span className="drill-skill">{drill.skillLevel.join(', ')}</span>
            </div>
          </div>
        </div>

        <div className="drill-detail-content">
          <div className="drill-instructions">
            <h2>How to Perform This Drill</h2>
            <div className="instructions-content">
              <p className="drill-description">{drill.description}</p>
              
              <div className="instruction-steps">
                <h3>Step-by-Step Instructions:</h3>
                <ol>
                  {drill.instructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                  ))}
                </ol>
              </div>

              <div className="drill-tips">
                <h3>Pro Tips:</h3>
                <ul>
                  {drill.tips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrillDetail;
