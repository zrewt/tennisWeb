import React, { useState } from 'react';
import './App.css';
import DrillForm from './components/DrillForm';
import DrillList from './components/DrillList';
import DrillDetail from './components/DrillDetail';
import { allDrills } from './data/drills';

function App() {
  const [drills, setDrills] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedDrill, setSelectedDrill] = useState(null);

  const generateDrills = (formData) => {
    const { skillLevel, equipment, timeAvailable } = formData;
    
    // Define time ranges for each selected time
    const timeRanges = {
      15: { min: 10, max: 20 },
      30: { min: 25, max: 35 },
      60: { min: 50, max: 70 }
    };
    
    const timeRange = timeRanges[timeAvailable];
    
    // Filter drills based on user selections
    const filteredDrills = allDrills.filter(drill => {
      const matchesSkill = drill.skillLevel.includes(skillLevel);
      const matchesEquipment = drill.equipment.includes(equipment);
      const matchesTime = drill.timeRequired <= timeRange.max;
      return matchesSkill && matchesEquipment && matchesTime;
    });

    // Shuffle the filtered drills
    const shuffled = filteredDrills.sort(() => 0.5 - Math.random());
    
    // Select drills to fill the available time optimally within the range
    const selectedDrills = [];
    let totalTime = 0;
    
    // Keep adding drills while we have time and available drills
    for (let i = 0; i < shuffled.length && selectedDrills.length < 8; i++) {
      const drill = shuffled[i];
      
      // Check if adding this drill would keep us within the time range
      if (totalTime + drill.timeRequired <= timeRange.max) {
        selectedDrills.push(drill);
        totalTime += drill.timeRequired;
      }
    }
    
    // Ensure we meet the minimum time requirement
    if (totalTime < timeRange.min && shuffled.length > 0) {
      // Try to add more drills to reach minimum time
      for (let i = 0; i < shuffled.length; i++) {
        const drill = shuffled[i];
        if (!selectedDrills.find(d => d.id === drill.id) && 
            totalTime + drill.timeRequired <= timeRange.max) {
          selectedDrills.push(drill);
          totalTime += drill.timeRequired;
          if (totalTime >= timeRange.min) break;
        }
      }
    }
    
    // If we still don't have enough drills, add the shortest available drills
    if (selectedDrills.length < 2 && shuffled.length >= 2) {
      const shortestDrills = shuffled
        .sort((a, b) => a.timeRequired - b.timeRequired)
        .slice(0, 2);
      selectedDrills.splice(0, selectedDrills.length, ...shortestDrills);
    }
    
    setDrills(selectedDrills);
    setShowResults(true);
    setSelectedDrill(null);
  };

  const generateNewPlan = () => {
    setShowResults(false);
    setDrills([]);
    setSelectedDrill(null);
  };

  const handleDrillSelect = (drill) => {
    setSelectedDrill(drill);
  };

  const handleBackToList = () => {
    setSelectedDrill(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>🎾 TempoDrill</h1>
        <p>Create your personalized practice plan</p>
      </header>
      
      <main className="App-main">
        {!showResults ? (
          <DrillForm onGenerate={generateDrills} />
        ) : selectedDrill ? (
          <DrillDetail drill={selectedDrill} onBack={handleBackToList} />
        ) : (
          <DrillList 
            drills={drills} 
            onGenerateNew={generateNewPlan} 
            onDrillSelect={handleDrillSelect}
          />
        )}
      </main>
    </div>
  );
}

export default App;
