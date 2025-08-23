import React from 'react';
import DrillCard from './DrillCard';
import './DrillList.css';

const DrillList = ({ drills, onGenerateNew, onDrillSelect }) => {
  const totalTime = drills.reduce((sum, drill) => sum + drill.timeRequired, 0);

  return (
    <div className="drill-list-container">
      <div className="drill-list-header">
        <h2>Your Personalized Practice Plan</h2>
        <p className="total-time">Total Time: {totalTime} minutes</p>
        <button onClick={onGenerateNew} className="new-plan-btn">
          Generate New Plan
        </button>
      </div>
      
      <div className="drill-grid">
        {drills.map((drill, index) => (
          <DrillCard 
            key={drill.id} 
            drill={drill} 
            order={index + 1}
            onClick={onDrillSelect}
          />
        ))}
      </div>
      
      <div className="drill-list-footer">
        <p>Click on any drill to see detailed instructions and tips!</p>
      </div>
    </div>
  );
};

export default DrillList;
