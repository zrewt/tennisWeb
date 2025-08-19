import React, { useState } from 'react';
import './DrillForm.css';

const DrillForm = ({ onGenerate }) => {
  const [formData, setFormData] = useState({
    skillLevel: 'beginner',
    equipment: 'none',
    timeAvailable: 30
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="drill-form-container">
      <form className="drill-form" onSubmit={handleSubmit}>
        <h2>Select Your Practice Options</h2>
        
        <div className="form-group">
          <label htmlFor="skillLevel">Skill Level:</label>
          <select
            id="skillLevel"
            name="skillLevel"
            value={formData.skillLevel}
            onChange={handleChange}
            required
          >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="equipment">Equipment Available:</label>
          <select
            id="equipment"
            name="equipment"
            value={formData.equipment}
            onChange={handleChange}
            required
          >
            <option value="none">None (Solo Practice)</option>
            <option value="partner">Partner</option>
            <option value="wall">Wall</option>
            <option value="ball machine">Ball Machine</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="timeAvailable">Time Available:</label>
          <select
            id="timeAvailable"
            name="timeAvailable"
            value={formData.timeAvailable}
            onChange={handleChange}
            required
          >
            <option value={15}>15 minutes</option>
            <option value={30}>30 minutes</option>
            <option value={60}>60 minutes</option>
          </select>
        </div>

        <button type="submit" className="generate-btn">
          Generate Practice Plan
        </button>
      </form>
    </div>
  );
};

export default DrillForm;
