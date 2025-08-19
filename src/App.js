import React, { useState } from 'react';
import './App.css';
import DrillForm from './components/DrillForm';
import DrillList from './components/DrillList';

function App() {
  const [drills, setDrills] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const generateDrills = (formData) => {
    const { skillLevel, equipment, timeAvailable } = formData;
    
    // Filter drills based on user selections
    const filteredDrills = allDrills.filter(drill => {
      const matchesSkill = drill.skillLevel.includes(skillLevel);
      const matchesEquipment = drill.equipment.includes(equipment);
      const matchesTime = drill.timeRequired <= timeAvailable;
      return matchesSkill && matchesEquipment && matchesTime;
    });

    // Shuffle the filtered drills
    const shuffled = filteredDrills.sort(() => 0.5 - Math.random());
    
    // Select drills to fill the available time optimally
    const selectedDrills = [];
    let remainingTime = timeAvailable;
    
    // Keep adding drills while we have time and available drills
    for (let i = 0; i < shuffled.length && selectedDrills.length < 8; i++) {
      const drill = shuffled[i];
      
      // Add drill if it fits in remaining time
      if (drill.timeRequired <= remainingTime) {
        selectedDrills.push(drill);
        remainingTime -= drill.timeRequired;
      }
    }
    
    // Ensure we have at least 2 drills if possible
    if (selectedDrills.length < 2 && shuffled.length >= 2) {
      const shortestDrills = shuffled
        .sort((a, b) => a.timeRequired - b.timeRequired)
        .slice(0, 2);
      selectedDrills.splice(0, selectedDrills.length, ...shortestDrills);
    }
    
    setDrills(selectedDrills);
    setShowResults(true);
  };

  const generateNewPlan = () => {
    setShowResults(false);
    setDrills([]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>🎾 Tennis Drill Generator</h1>
        <p>Create your personalized practice plan</p>
      </header>
      
      <main className="App-main">
        {!showResults ? (
          <DrillForm onGenerate={generateDrills} />
        ) : (
          <DrillList drills={drills} onGenerateNew={generateNewPlan} />
        )}
      </main>
    </div>
  );
}

// Sample drill data
const allDrills = [
  {
    id: 1,
    title: "Wall Rally Practice",
    description: "Practice your groundstrokes against a wall. Focus on consistent contact and proper form.",
    timeRequired: 15,
    skillLevel: ["beginner", "intermediate", "advanced"],
    equipment: ["wall"],
    icon: "🏓"
  },
  {
    id: 2,
    title: "Serve Practice",
    description: "Work on your serve technique. Practice both first and second serves with proper form.",
    timeRequired: 20,
    skillLevel: ["beginner", "intermediate", "advanced"],
    equipment: ["none", "partner"],
    icon: "🎯"
  },
  {
    id: 3,
    title: "Cross-Court Rally",
    description: "Practice cross-court forehand and backhand rallies with a partner.",
    timeRequired: 25,
    skillLevel: ["intermediate", "advanced"],
    equipment: ["partner"],
    icon: "🔄"
  },
  {
    id: 4,
    title: "Volley Practice",
    description: "Practice volleys at the net. Focus on quick reactions and proper positioning.",
    timeRequired: 15,
    skillLevel: ["intermediate", "advanced"],
    equipment: ["partner", "ball machine"],
    icon: "⚡"
  },
  {
    id: 5,
    title: "Footwork Drills",
    description: "Improve your movement on court with ladder drills and cone exercises.",
    timeRequired: 20,
    skillLevel: ["beginner", "intermediate", "advanced"],
    equipment: ["none"],
    icon: "🏃"
  },
  {
    id: 6,
    title: "Ball Machine Workout",
    description: "Use a ball machine to practice specific shots and improve consistency.",
    timeRequired: 30,
    skillLevel: ["intermediate", "advanced"],
    equipment: ["ball machine"],
    icon: "🤖"
  },
  {
    id: 7,
    title: "Return Practice",
    description: "Practice returning serves with a partner. Focus on timing and placement.",
    timeRequired: 20,
    skillLevel: ["intermediate", "advanced"],
    equipment: ["partner"],
    icon: "🎾"
  },
  {
    id: 8,
    title: "Drop Shot Practice",
    description: "Practice drop shots and lobs to improve touch and feel.",
    timeRequired: 15,
    skillLevel: ["intermediate", "advanced"],
    equipment: ["partner", "wall"],
    icon: "🪶"
  },
  {
    id: 9,
    title: "Baseline Consistency",
    description: "Practice staying in long rallies from the baseline with consistent depth.",
    timeRequired: 25,
    skillLevel: ["beginner", "intermediate", "advanced"],
    equipment: ["partner", "ball machine"],
    icon: "📏"
  },
  {
    id: 10,
    title: "Approach Shot Practice",
    description: "Practice approach shots and following them to the net.",
    timeRequired: 20,
    skillLevel: ["intermediate", "advanced"],
    equipment: ["partner", "ball machine"],
    icon: "🎯"
  },
  {
    id: 11,
    title: "Overhead Practice",
    description: "Practice overhead smashes and high volleys.",
    timeRequired: 15,
    skillLevel: ["intermediate", "advanced"],
    equipment: ["partner"],
    icon: "💥"
  },
  {
    id: 12,
    title: "Mental Focus Drill",
    description: "Practice maintaining focus during long points and matches.",
    timeRequired: 30,
    skillLevel: ["advanced"],
    equipment: ["partner"],
    icon: "🧠"
  }
];

export default App;
