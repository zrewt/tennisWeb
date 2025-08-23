import React from 'react';
import './DrillCard.css';

const DrillCard = ({ drill, order, onClick }) => {
  return (
    <div className="drill-card" onClick={() => onClick(drill)}>
      <div className="drill-card-header">
        <div className="drill-order">{order}</div>
        <div className="drill-icon">{drill.icon}</div>
        <div className="drill-time">{drill.timeRequired} min</div>
      </div>
      
      <div className="drill-card-content">
        <h3 className="drill-title">{drill.title}</h3>
        <p className="drill-description">{drill.description}</p>
      </div>
      
      <div className="drill-card-footer">
        <div className="drill-tags">
          <span className="skill-tag">{drill.skillLevel.join(', ')}</span>
          <span className="equipment-tag">{drill.equipment.join(', ')}</span>
        </div>
      </div>
    </div>
  );
};

export default DrillCard;
