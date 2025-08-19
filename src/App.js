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
  // BEGINNER DRILLS
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
    title: "Basic Serve Practice",
    description: "Work on your serve technique. Practice both first and second serves with proper form.",
    timeRequired: 20,
    skillLevel: ["beginner", "intermediate", "advanced"],
    equipment: ["none", "partner"],
    icon: "🎯"
  },
  {
    id: 3,
    title: "Footwork Drills",
    description: "Improve your movement on court with ladder drills and cone exercises.",
    timeRequired: 20,
    skillLevel: ["beginner", "intermediate", "advanced"],
    equipment: ["none"],
    icon: "🏃"
  },
  {
    id: 4,
    title: "Shadow Tennis",
    description: "Practice your strokes without a ball. Focus on proper form and technique.",
    timeRequired: 15,
    skillLevel: ["beginner"],
    equipment: ["none"],
    icon: "👤"
  },
  {
    id: 5,
    title: "Basic Forehand Practice",
    description: "Practice forehand strokes with a partner. Focus on consistent contact.",
    timeRequired: 20,
    skillLevel: ["beginner"],
    equipment: ["partner"],
    icon: "🎾"
  },
  {
    id: 6,
    title: "Basic Backhand Practice",
    description: "Practice backhand strokes with a partner. Work on proper grip and form.",
    timeRequired: 20,
    skillLevel: ["beginner"],
    equipment: ["partner"],
    icon: "🎾"
  },
  {
    id: 7,
    title: "Wall Serve Practice",
    description: "Practice serving against a wall to improve accuracy and consistency.",
    timeRequired: 15,
    skillLevel: ["beginner", "intermediate"],
    equipment: ["wall"],
    icon: "🎯"
  },
  {
    id: 8,
    title: "Basic Volley Practice",
    description: "Practice basic volleys at the net with a partner.",
    timeRequired: 15,
    skillLevel: ["beginner", "intermediate"],
    equipment: ["partner"],
    icon: "⚡"
  },
  {
    id: 9,
    title: "Ball Toss Practice",
    description: "Practice ball toss for serves. Focus on consistency and height.",
    timeRequired: 10,
    skillLevel: ["beginner"],
    equipment: ["none"],
    icon: "⬆️"
  },
  {
    id: 10,
    title: "Basic Rally Practice",
    description: "Practice simple rallies with a partner. Focus on keeping the ball in play.",
    timeRequired: 25,
    skillLevel: ["beginner"],
    equipment: ["partner"],
    icon: "🔄"
  },

  // INTERMEDIATE DRILLS
  {
    id: 11,
    title: "Cross-Court Rally",
    description: "Practice cross-court forehand and backhand rallies with a partner.",
    timeRequired: 25,
    skillLevel: ["intermediate", "advanced"],
    equipment: ["partner"],
    icon: "🔄"
  },
  {
    id: 12,
    title: "Volley Practice",
    description: "Practice volleys at the net. Focus on quick reactions and proper positioning.",
    timeRequired: 15,
    skillLevel: ["intermediate", "advanced"],
    equipment: ["partner", "ball machine"],
    icon: "⚡"
  },
  {
    id: 13,
    title: "Ball Machine Workout",
    description: "Use a ball machine to practice specific shots and improve consistency.",
    timeRequired: 30,
    skillLevel: ["intermediate", "advanced"],
    equipment: ["ball machine"],
    icon: "🤖"
  },
  {
    id: 14,
    title: "Return Practice",
    description: "Practice returning serves with a partner. Focus on timing and placement.",
    timeRequired: 20,
    skillLevel: ["intermediate", "advanced"],
    equipment: ["partner"],
    icon: "🎾"
  },
  {
    id: 15,
    title: "Drop Shot Practice",
    description: "Practice drop shots and lobs to improve touch and feel.",
    timeRequired: 15,
    skillLevel: ["intermediate", "advanced"],
    equipment: ["partner", "wall"],
    icon: "🪶"
  },
  {
    id: 16,
    title: "Baseline Consistency",
    description: "Practice staying in long rallies from the baseline with consistent depth.",
    timeRequired: 25,
    skillLevel: ["beginner", "intermediate", "advanced"],
    equipment: ["partner", "ball machine"],
    icon: "📏"
  },
  {
    id: 17,
    title: "Approach Shot Practice",
    description: "Practice approach shots and following them to the net.",
    timeRequired: 20,
    skillLevel: ["intermediate", "advanced"],
    equipment: ["partner", "ball machine"],
    icon: "🎯"
  },
  {
    id: 18,
    title: "Overhead Practice",
    description: "Practice overhead smashes and high volleys.",
    timeRequired: 15,
    skillLevel: ["intermediate", "advanced"],
    equipment: ["partner"],
    icon: "💥"
  },
  {
    id: 19,
    title: "Down the Line Practice",
    description: "Practice hitting down the line shots with a partner.",
    timeRequired: 20,
    skillLevel: ["intermediate", "advanced"],
    equipment: ["partner"],
    icon: "📐"
  },
  {
    id: 20,
    title: "Slice Practice",
    description: "Practice slice shots for both forehand and backhand.",
    timeRequired: 15,
    skillLevel: ["intermediate", "advanced"],
    equipment: ["partner", "wall"],
    icon: "🔪"
  },
  {
    id: 21,
    title: "Ball Machine Forehand",
    description: "Use ball machine to practice forehand consistency and placement.",
    timeRequired: 20,
    skillLevel: ["intermediate", "advanced"],
    equipment: ["ball machine"],
    icon: "🎾"
  },
  {
    id: 22,
    title: "Ball Machine Backhand",
    description: "Use ball machine to practice backhand consistency and placement.",
    timeRequired: 20,
    skillLevel: ["intermediate", "advanced"],
    equipment: ["ball machine"],
    icon: "🎾"
  },
  {
    id: 23,
    title: "Serve and Volley",
    description: "Practice serve and volley combinations.",
    timeRequired: 25,
    skillLevel: ["intermediate", "advanced"],
    equipment: ["partner"],
    icon: "🎯"
  },
  {
    id: 24,
    title: "Wall Volley Practice",
    description: "Practice volleys against a wall to improve reactions.",
    timeRequired: 15,
    skillLevel: ["intermediate", "advanced"],
    equipment: ["wall"],
    icon: "⚡"
  },
  {
    id: 25,
    title: "Cross-Court Volley",
    description: "Practice cross-court volleys with a partner.",
    timeRequired: 15,
    skillLevel: ["intermediate", "advanced"],
    equipment: ["partner"],
    icon: "⚡"
  },

  // ADVANCED DRILLS
  {
    id: 26,
    title: "Mental Focus Drill",
    description: "Practice maintaining focus during long points and matches.",
    timeRequired: 30,
    skillLevel: ["advanced"],
    equipment: ["partner"],
    icon: "🧠"
  },
  {
    id: 27,
    title: "Advanced Ball Machine",
    description: "Complex ball machine workout with varying speeds and spins.",
    timeRequired: 35,
    skillLevel: ["advanced"],
    equipment: ["ball machine"],
    icon: "🤖"
  },
  {
    id: 28,
    title: "Match Play Simulation",
    description: "Simulate match conditions with a partner.",
    timeRequired: 45,
    skillLevel: ["advanced"],
    equipment: ["partner"],
    icon: "🏆"
  },
  {
    id: 29,
    title: "Advanced Footwork",
    description: "Complex footwork patterns and movement drills.",
    timeRequired: 25,
    skillLevel: ["advanced"],
    equipment: ["none"],
    icon: "🏃"
  },
  {
    id: 30,
    title: "Spin Practice",
    description: "Practice heavy topspin and slice shots.",
    timeRequired: 20,
    skillLevel: ["advanced"],
    equipment: ["partner", "ball machine"],
    icon: "🌀"
  },
  {
    id: 31,
    title: "Advanced Serve Practice",
    description: "Practice kick serves, slice serves, and flat serves.",
    timeRequired: 25,
    skillLevel: ["advanced"],
    equipment: ["none", "partner"],
    icon: "🎯"
  },
  {
    id: 32,
    title: "Defensive Drills",
    description: "Practice defensive shots and recovery positions.",
    timeRequired: 20,
    skillLevel: ["advanced"],
    equipment: ["partner", "ball machine"],
    icon: "🛡️"
  },
  {
    id: 33,
    title: "Advanced Volley Combinations",
    description: "Practice complex volley combinations and reactions.",
    timeRequired: 20,
    skillLevel: ["advanced"],
    equipment: ["partner"],
    icon: "⚡"
  },
  {
    id: 34,
    title: "Tactical Practice",
    description: "Practice different tactical approaches and shot selection.",
    timeRequired: 30,
    skillLevel: ["advanced"],
    equipment: ["partner"],
    icon: "🧠"
  },
  {
    id: 35,
    title: "Advanced Wall Practice",
    description: "Complex wall drills with multiple shot combinations.",
    timeRequired: 25,
    skillLevel: ["advanced"],
    equipment: ["wall"],
    icon: "🏓"
  },

  // SHORT DRILLS (10-15 minutes)
  {
    id: 36,
    title: "Quick Serve Practice",
    description: "Quick serve practice focusing on accuracy.",
    timeRequired: 10,
    skillLevel: ["beginner", "intermediate", "advanced"],
    equipment: ["none", "partner"],
    icon: "🎯"
  },
  {
    id: 37,
    title: "Quick Volley Session",
    description: "Short volley practice session.",
    timeRequired: 10,
    skillLevel: ["intermediate", "advanced"],
    equipment: ["partner"],
    icon: "⚡"
  },
  {
    id: 38,
    title: "Quick Wall Rally",
    description: "Short wall rally practice session.",
    timeRequired: 10,
    skillLevel: ["beginner", "intermediate", "advanced"],
    equipment: ["wall"],
    icon: "🏓"
  },
  {
    id: 39,
    title: "Quick Footwork",
    description: "Short footwork and movement drill.",
    timeRequired: 10,
    skillLevel: ["beginner", "intermediate", "advanced"],
    equipment: ["none"],
    icon: "🏃"
  },
  {
    id: 40,
    title: "Quick Ball Machine",
    description: "Short ball machine session focusing on one shot type.",
    timeRequired: 15,
    skillLevel: ["intermediate", "advanced"],
    equipment: ["ball machine"],
    icon: "🤖"
  },

  // LONG DRILLS (40-60 minutes)
  {
    id: 41,
    title: "Comprehensive Workout",
    description: "Full tennis workout covering all aspects of the game.",
    timeRequired: 60,
    skillLevel: ["advanced"],
    equipment: ["partner", "ball machine"],
    icon: "💪"
  },
  {
    id: 42,
    title: "Extended Match Play",
    description: "Extended match play session with a partner.",
    timeRequired: 50,
    skillLevel: ["advanced"],
    equipment: ["partner"],
    icon: "🏆"
  },
  {
    id: 43,
    title: "Full Court Practice",
    description: "Practice covering all areas of the court.",
    timeRequired: 45,
    skillLevel: ["intermediate", "advanced"],
    equipment: ["partner"],
    icon: "🎾"
  },
  {
    id: 44,
    title: "Extended Ball Machine",
    description: "Long ball machine session with multiple shot types.",
    timeRequired: 40,
    skillLevel: ["intermediate", "advanced"],
    equipment: ["ball machine"],
    icon: "🤖"
  },
  {
    id: 45,
    title: "Comprehensive Drills",
    description: "Series of drills covering all tennis skills.",
    timeRequired: 55,
    skillLevel: ["intermediate", "advanced"],
    equipment: ["partner"],
    icon: "🎾"
  }
];

export default App;
