import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import './App.css';
import DrillForm from './components/DrillForm';
import DrillList from './components/DrillList';
import DrillDetail from './components/DrillDetail';
import PrivacyPolicy from './components/PrivacyPolicy';
import { allDrills } from './data/drills';

function AppContent() {
  const [drills, setDrills] = useState([]);
  const [selectedDrill, setSelectedDrill] = useState(null);
  const [notification, setNotification] = useState({ show: false, message: '' });
  const navigate = useNavigate();

  const generateDrills = (formData) => {
    const { skillLevel, equipment, timeAvailable } = formData;
    
    // Filter drills based on user selections
    const filteredDrills = allDrills.filter(drill => {
      const matchesSkill = drill.skillLevel.includes(skillLevel);
      const matchesEquipment = drill.equipment.includes(equipment);
      return matchesSkill && matchesEquipment;
    });

    if (filteredDrills.length === 0) {
      setDrills([]);
      setSelectedDrill(null);
      navigate('/plan');
      return;
    }

    // Try to find the best combination of drills that gets as close as possible to the target time
    const targetTime = timeAvailable;
    let bestCombination = [];
    let bestTimeDifference = Infinity;
    let bestTotalTime = 0;

    // Generate multiple random combinations and pick the best one
    for (let attempt = 0; attempt < 50; attempt++) {
      const shuffled = [...filteredDrills].sort(() => 0.5 - Math.random());
      const selectedDrills = [];
      let totalTime = 0;
      
      // Try to add drills to get as close as possible to target time
      for (let i = 0; i < shuffled.length && selectedDrills.length < 8; i++) {
        const drill = shuffled[i];
        
        // If adding this drill gets us closer to the target time, add it
        const newTotalTime = totalTime + drill.timeRequired;
        const currentDifference = Math.abs(targetTime - totalTime);
        const newDifference = Math.abs(targetTime - newTotalTime);
        
        // Add drill if it gets us closer to target or if we're under target and this doesn't exceed it too much
        if (newDifference < currentDifference || (totalTime < targetTime && newTotalTime <= targetTime + 5)) {
          selectedDrills.push(drill);
          totalTime = newTotalTime;
        }
      }
      
      // Calculate how close this combination is to the target time
      const timeDifference = Math.abs(targetTime - totalTime);
      
      // If this combination is better (closer to target time), keep it
      if (timeDifference < bestTimeDifference || 
          (timeDifference === bestTimeDifference && totalTime > bestTotalTime)) {
        bestCombination = [...selectedDrills];
        bestTimeDifference = timeDifference;
        bestTotalTime = totalTime;
      }
      
      // If we found an exact match, we can stop early
      if (timeDifference === 0) {
        break;
      }
    }
    
    // If we still don't have any drills, add the shortest available drills
    if (bestCombination.length === 0 && filteredDrills.length > 0) {
      const shortestDrills = filteredDrills
        .sort((a, b) => a.timeRequired - b.timeRequired)
        .slice(0, Math.min(3, filteredDrills.length));
      bestCombination = shortestDrills;
      bestTotalTime = shortestDrills.reduce((sum, drill) => sum + drill.timeRequired, 0);
    }
    
    setDrills(bestCombination);
    setSelectedDrill(null);
    navigate('/plan');
  };

  const generateNewPlan = () => {
    setDrills([]);
    setSelectedDrill(null);
    navigate('/');
  };

  const handleDrillSelect = (drill) => {
    setSelectedDrill(drill);
  };

  const handleBackToList = () => {
    setSelectedDrill(null);
  };

  const handleContactClick = async (e) => {
    e.preventDefault();
    const email = 'tempotennisdrills@gmail.com';
    try {
      await navigator.clipboard.writeText(email);
      showNotification(`Email copied to clipboard: ${email}`);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      showNotification(`Email copied to clipboard: ${email}`);
    }
  };

  const showNotification = (message) => {
    setNotification({ show: true, message });
    setTimeout(() => {
      setNotification({ show: false, message: '' });
    }, 3000);
  };

  return (
    <div className="App">
        {notification.show && (
          <div className="notification">
            <div className="notification-content">
              <span className="notification-icon">✓</span>
              <span className="notification-message">{notification.message}</span>
            </div>
          </div>
        )}
        <header className="App-header">
          <div className="header-content">
            <div className="header-left"></div>
            <div className="header-center">
              <h1>
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                  🎾 TempoDrill
                </Link>
              </h1>
              <p>Create your personalized practice plan</p>
            </div>
            <div className="header-right"></div>
          </div>
        </header>
        
        <main className="App-main">
          <Routes>
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/plan" element={
              selectedDrill ? (
                <DrillDetail drill={selectedDrill} onBack={handleBackToList} />
              ) : (
                <DrillList 
                  drills={drills} 
                  onGenerateNew={generateNewPlan} 
                  onDrillSelect={handleDrillSelect}
                />
              )
            } />
            <Route path="/" element={<DrillForm onGenerate={generateDrills} />} />
          </Routes>
        </main>
        
        <footer className="App-footer">
          <div className="footer-content">
            <div className="footer-left">
              <p>&copy; 2024 TempoDrill. All rights reserved.</p>
            </div>
            <div className="footer-right">
              <Link to="/privacy-policy" className="footer-privacy-link">
                Privacy Policy
              </Link>
              <a href="#" className="footer-contact-link" onClick={handleContactClick}>
                Contact Us
              </a>
            </div>
          </div>
        </footer>
      </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
