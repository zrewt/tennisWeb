import React, { useState } from 'react';
import './DrillForm.css';

const CustomDropdown = ({ label, value, onChange, options, name }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (optionValue) => {
    onChange({ target: { name, value: optionValue } });
    setIsOpen(false);
  };

  const selectedOption = options.find(option => option.value === value);

  return (
    <div className="form-group">
      <label htmlFor={name}>{label}:</label>
      <div className={`custom-dropdown ${isOpen ? 'open' : ''}`}>
        <div 
          className="dropdown-header"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{selectedOption ? selectedOption.label : 'Select an option'}</span>
          <span className="dropdown-arrow">▼</span>
        </div>
        {isOpen && (
          <div className="dropdown-options">
            {options.map((option) => (
              <div
                key={option.value}
                className={`dropdown-option ${value === option.value ? 'selected' : ''}`}
                onClick={() => handleSelect(option.value)}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

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

  const skillLevelOptions = [
    { value: 'beginner', label: 'Beginner' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'advanced', label: 'Advanced' }
  ];

  const equipmentOptions = [
    { value: 'none', label: 'None (Solo Practice)' },
    { value: 'partner', label: 'Partner' },
    { value: 'wall', label: 'Wall' },
    { value: 'ball machine', label: 'Ball Machine' }
  ];

  const timeOptions = [
    { value: 15, label: '15 minutes' },
    { value: 30, label: '30 minutes' },
    { value: 60, label: '60 minutes' }
  ];

  return (
    <div className="drill-form-container">
      <form className="drill-form" onSubmit={handleSubmit}>
        <h2>Select Your Practice Options</h2>
        
        <CustomDropdown
          label="Skill Level"
          name="skillLevel"
          value={formData.skillLevel}
          onChange={handleChange}
          options={skillLevelOptions}
        />

        <CustomDropdown
          label="Equipment Available"
          name="equipment"
          value={formData.equipment}
          onChange={handleChange}
          options={equipmentOptions}
        />

        <CustomDropdown
          label="Time Available"
          name="timeAvailable"
          value={formData.timeAvailable}
          onChange={handleChange}
          options={timeOptions}
        />

        <button type="submit" className="generate-btn">
          Generate Practice Plan
        </button>
      </form>
    </div>
  );
};

export default DrillForm;
