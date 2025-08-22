import React, { useState } from 'react';
import './App.css';
import DrillForm from './components/DrillForm';
import DrillList from './components/DrillList';

function App() {
  const [drills, setDrills] = useState([]);
  const [showResults, setShowResults] = useState(false);

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
  };

  const generateNewPlan = () => {
    setShowResults(false);
    setDrills([]);
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
  },

  // ADDITIONAL BEGINNER DRILLS
  {
    id: 46,
    title: "Grip Practice",
    description: "Practice switching between different grips for forehand and backhand.",
    timeRequired: 15,
    skillLevel: ["beginner"],
    equipment: ["none"],
    icon: "✋"
  },
  {
    id: 47,
    title: "Ball Bounce Practice",
    description: "Practice bouncing the ball on your racquet to improve hand-eye coordination.",
    timeRequired: 10,
    skillLevel: ["beginner"],
    equipment: ["none"],
    icon: "🎾"
  },
  {
    id: 48,
    title: "Basic Movement Patterns",
    description: "Practice basic movement patterns like side-stepping and forward/backward movement.",
    timeRequired: 15,
    skillLevel: ["beginner"],
    equipment: ["none"],
    icon: "👟"
  },
  {
    id: 49,
    title: "Partner Rally Counting",
    description: "Practice rallies with a partner, counting consecutive hits.",
    timeRequired: 20,
    skillLevel: ["beginner"],
    equipment: ["partner"],
    icon: "🔢"
  },
  {
    id: 50,
    title: "Wall Target Practice",
    description: "Practice hitting specific targets on the wall to improve accuracy.",
    timeRequired: 15,
    skillLevel: ["beginner", "intermediate"],
    equipment: ["wall"],
    icon: "🎯"
  },
  {
    id: 51,
    title: "Basic Overhead Practice",
    description: "Practice basic overhead shots with a partner.",
    timeRequired: 15,
    skillLevel: ["beginner", "intermediate"],
    equipment: ["partner"],
    icon: "💥"
  },
  {
    id: 52,
    title: "Court Positioning",
    description: "Learn and practice proper court positioning for different situations.",
    timeRequired: 20,
    skillLevel: ["beginner"],
    equipment: ["none"],
    icon: "📍"
  },
  {
    id: 53,
    title: "Basic Slice Practice",
    description: "Practice basic slice shots for both forehand and backhand.",
    timeRequired: 15,
    skillLevel: ["beginner", "intermediate"],
    equipment: ["partner", "wall"],
    icon: "🔪"
  },
  {
    id: 54,
    title: "Ball Toss Variations",
    description: "Practice different ball toss heights and positions for serves.",
    timeRequired: 10,
    skillLevel: ["beginner"],
    equipment: ["none"],
    icon: "⬆️"
  },
  {
    id: 55,
    title: "Basic Lob Practice",
    description: "Practice basic lob shots with a partner.",
    timeRequired: 15,
    skillLevel: ["beginner", "intermediate"],
    equipment: ["partner"],
    icon: "🪶"
  },

  // ADDITIONAL INTERMEDIATE DRILLS
  {
    id: 56,
    title: "Inside-Out Forehand",
    description: "Practice inside-out forehand shots from the backhand side.",
    timeRequired: 20,
    skillLevel: ["intermediate", "advanced"],
    equipment: ["partner", "ball machine"],
    icon: "🎾"
  },
  {
    id: 57,
    title: "Backhand Down the Line",
    description: "Practice hitting backhand shots down the line with precision.",
    timeRequired: 20,
    skillLevel: ["intermediate", "advanced"],
    equipment: ["partner", "ball machine"],
    icon: "📐"
  },
  {
    id: 58,
    title: "Cross-Court Backhand",
    description: "Practice cross-court backhand shots with a partner.",
    timeRequired: 20,
    skillLevel: ["intermediate", "advanced"],
    equipment: ["partner"],
    icon: "🔄"
  },
  {
    id: 59,
    title: "Approach Shot and Volley",
    description: "Practice approach shots followed by volleys at the net.",
    timeRequired: 25,
    skillLevel: ["intermediate", "advanced"],
    equipment: ["partner", "ball machine"],
    icon: "🎯"
  },
  {
    id: 60,
    title: "Defensive Lob Practice",
    description: "Practice defensive lobs when under pressure.",
    timeRequired: 15,
    skillLevel: ["intermediate", "advanced"],
    equipment: ["partner", "ball machine"],
    icon: "🛡️"
  },
  {
    id: 61,
    title: "Ball Machine Consistency",
    description: "Use ball machine to practice consistent depth and placement.",
    timeRequired: 25,
    skillLevel: ["intermediate", "advanced"],
    equipment: ["ball machine"],
    icon: "📏"
  },
  {
    id: 62,
    title: "Wall Rally Variations",
    description: "Practice different shot combinations against the wall.",
    timeRequired: 20,
    skillLevel: ["intermediate", "advanced"],
    equipment: ["wall"],
    icon: "🏓"
  },
  {
    id: 63,
    title: "Serve Placement Practice",
    description: "Practice serving to different areas of the service box.",
    timeRequired: 20,
    skillLevel: ["intermediate", "advanced"],
    equipment: ["none", "partner"],
    icon: "🎯"
  },
  {
    id: 64,
    title: "Return of Serve Practice",
    description: "Practice returning different types of serves.",
    timeRequired: 20,
    skillLevel: ["intermediate", "advanced"],
    equipment: ["partner"],
    icon: "🎾"
  },
  {
    id: 65,
    title: "Volley to Volley",
    description: "Practice volley exchanges at the net with a partner.",
    timeRequired: 15,
    skillLevel: ["intermediate", "advanced"],
    equipment: ["partner"],
    icon: "⚡"
  },
  {
    id: 66,
    title: "Drop Shot and Lob",
    description: "Practice drop shots followed by defensive lobs.",
    timeRequired: 20,
    skillLevel: ["intermediate", "advanced"],
    equipment: ["partner"],
    icon: "🪶"
  },
  {
    id: 67,
    title: "Ball Machine Footwork",
    description: "Use ball machine to practice footwork and movement patterns.",
    timeRequired: 25,
    skillLevel: ["intermediate", "advanced"],
    equipment: ["ball machine"],
    icon: "🏃"
  },
  {
    id: 68,
    title: "Wall Serve and Volley",
    description: "Practice serve and volley combinations against the wall.",
    timeRequired: 20,
    skillLevel: ["intermediate", "advanced"],
    equipment: ["wall"],
    icon: "🎯"
  },
  {
    id: 69,
    title: "Cross-Court Consistency",
    description: "Practice maintaining cross-court rallies with consistent depth.",
    timeRequired: 25,
    skillLevel: ["intermediate", "advanced"],
    equipment: ["partner"],
    icon: "🔄"
  },
  {
    id: 70,
    title: "Approach Shot Placement",
    description: "Practice hitting approach shots to specific target areas.",
    timeRequired: 20,
    skillLevel: ["intermediate", "advanced"],
    equipment: ["partner", "ball machine"],
    icon: "🎯"
  },

  // ADDITIONAL ADVANCED DRILLS
  {
    id: 71,
    title: "Advanced Spin Variations",
    description: "Practice heavy topspin, slice, and flat shots with precision.",
    timeRequired: 25,
    skillLevel: ["advanced"],
    equipment: ["partner", "ball machine"],
    icon: "🌀"
  },
  {
    id: 72,
    title: "Kick Serve Practice",
    description: "Practice kick serves with proper technique and placement.",
    timeRequired: 20,
    skillLevel: ["advanced"],
    equipment: ["none", "partner"],
    icon: "🎯"
  },
  {
    id: 73,
    title: "Slice Serve Practice",
    description: "Practice slice serves with proper technique and placement.",
    timeRequired: 20,
    skillLevel: ["advanced"],
    equipment: ["none", "partner"],
    icon: "🎯"
  },
  {
    id: 74,
    title: "Advanced Volley Combinations",
    description: "Practice complex volley combinations and reactions.",
    timeRequired: 20,
    skillLevel: ["advanced"],
    equipment: ["partner"],
    icon: "⚡"
  },
  {
    id: 75,
    title: "Defensive Counter-Attack",
    description: "Practice defensive shots that can turn into offensive opportunities.",
    timeRequired: 25,
    skillLevel: ["advanced"],
    equipment: ["partner", "ball machine"],
    icon: "🛡️"
  },
  {
    id: 76,
    title: "Advanced Footwork Patterns",
    description: "Practice complex footwork patterns and movement combinations.",
    timeRequired: 20,
    skillLevel: ["advanced"],
    equipment: ["none"],
    icon: "🏃"
  },
  {
    id: 77,
    title: "Tactical Shot Selection",
    description: "Practice choosing the right shot for different game situations.",
    timeRequired: 30,
    skillLevel: ["advanced"],
    equipment: ["partner"],
    icon: "🧠"
  },
  {
    id: 78,
    title: "Advanced Ball Machine Workout",
    description: "Complex ball machine session with varying speeds, spins, and placements.",
    timeRequired: 30,
    skillLevel: ["advanced"],
    equipment: ["ball machine"],
    icon: "🤖"
  },
  {
    id: 79,
    title: "Match Point Scenarios",
    description: "Practice specific match point situations and pressure handling.",
    timeRequired: 25,
    skillLevel: ["advanced"],
    equipment: ["partner"],
    icon: "🏆"
  },
  {
    id: 80,
    title: "Advanced Wall Combinations",
    description: "Practice complex shot combinations against the wall.",
    timeRequired: 25,
    skillLevel: ["advanced"],
    equipment: ["wall"],
    icon: "🏓"
  },
  {
    id: 81,
    title: "Mental Toughness Drill",
    description: "Practice maintaining focus and composure under pressure.",
    timeRequired: 30,
    skillLevel: ["advanced"],
    equipment: ["partner"],
    icon: "🧠"
  },
  {
    id: 82,
    title: "Advanced Overhead Practice",
    description: "Practice overhead smashes with proper technique and placement.",
    timeRequired: 20,
    skillLevel: ["advanced"],
    equipment: ["partner"],
    icon: "💥"
  },
  {
    id: 83,
    title: "Advanced Lob Practice",
    description: "Practice offensive and defensive lobs with precision.",
    timeRequired: 20,
    skillLevel: ["advanced"],
    equipment: ["partner"],
    icon: "🪶"
  },
  {
    id: 84,
    title: "Advanced Drop Shot Practice",
    description: "Practice drop shots with different spins and placements.",
    timeRequired: 20,
    skillLevel: ["advanced"],
    equipment: ["partner"],
    icon: "🪶"
  },
  {
    id: 85,
    title: "Advanced Return Practice",
    description: "Practice returning different types of serves with offensive intent.",
    timeRequired: 25,
    skillLevel: ["advanced"],
    equipment: ["partner"],
    icon: "🎾"
  },

  // ADDITIONAL SHORT DRILLS (10-15 minutes)
  {
    id: 86,
    title: "Quick Grip Switch",
    description: "Practice switching between grips quickly and efficiently.",
    timeRequired: 10,
    skillLevel: ["beginner", "intermediate", "advanced"],
    equipment: ["none"],
    icon: "✋"
  },
  {
    id: 87,
    title: "Quick Ball Bounce",
    description: "Quick ball bouncing practice for hand-eye coordination.",
    timeRequired: 10,
    skillLevel: ["beginner", "intermediate", "advanced"],
    equipment: ["none"],
    icon: "🎾"
  },
  {
    id: 88,
    title: "Quick Movement Drill",
    description: "Quick footwork and movement practice session.",
    timeRequired: 10,
    skillLevel: ["beginner", "intermediate", "advanced"],
    equipment: ["none"],
    icon: "🏃"
  },
  {
    id: 89,
    title: "Quick Wall Practice",
    description: "Quick wall practice session focusing on one shot type.",
    timeRequired: 10,
    skillLevel: ["beginner", "intermediate", "advanced"],
    equipment: ["wall"],
    icon: "🏓"
  },
  {
    id: 90,
    title: "Quick Partner Rally",
    description: "Quick rally practice session with a partner.",
    timeRequired: 15,
    skillLevel: ["beginner", "intermediate", "advanced"],
    equipment: ["partner"],
    icon: "🔄"
  },
  {
    id: 91,
    title: "Quick Serve Practice",
    description: "Quick serve practice focusing on one aspect.",
    timeRequired: 10,
    skillLevel: ["beginner", "intermediate", "advanced"],
    equipment: ["none", "partner"],
    icon: "🎯"
  },
  {
    id: 92,
    title: "Quick Volley Session",
    description: "Quick volley practice session at the net.",
    timeRequired: 10,
    skillLevel: ["intermediate", "advanced"],
    equipment: ["partner"],
    icon: "⚡"
  },
  {
    id: 93,
    title: "Quick Overhead Practice",
    description: "Quick overhead practice session.",
    timeRequired: 10,
    skillLevel: ["intermediate", "advanced"],
    equipment: ["partner"],
    icon: "💥"
  },
  {
    id: 94,
    title: "Quick Ball Machine",
    description: "Quick ball machine session focusing on consistency.",
    timeRequired: 15,
    skillLevel: ["intermediate", "advanced"],
    equipment: ["ball machine"],
    icon: "🤖"
  },
  {
    id: 95,
    title: "Quick Slice Practice",
    description: "Quick slice practice session for both forehand and backhand.",
    timeRequired: 10,
    skillLevel: ["intermediate", "advanced"],
    equipment: ["partner", "wall"],
    icon: "🔪"
  },

  // ADDITIONAL LONG DRILLS (40-60 minutes)
  {
    id: 96,
    title: "Complete Tennis Workout",
    description: "Comprehensive tennis workout covering all skills and techniques.",
    timeRequired: 60,
    skillLevel: ["advanced"],
    equipment: ["partner", "ball machine"],
    icon: "💪"
  },
  {
    id: 97,
    title: "Extended Match Simulation",
    description: "Extended match simulation with full scoring and pressure situations.",
    timeRequired: 55,
    skillLevel: ["advanced"],
    equipment: ["partner"],
    icon: "🏆"
  },
  {
    id: 98,
    title: "Full Court Ball Machine",
    description: "Extended ball machine session covering all areas of the court.",
    timeRequired: 45,
    skillLevel: ["intermediate", "advanced"],
    equipment: ["ball machine"],
    icon: "🤖"
  },
  {
    id: 99,
    title: "Comprehensive Partner Practice",
    description: "Extended partner practice covering all tennis skills.",
    timeRequired: 50,
    skillLevel: ["intermediate", "advanced"],
    equipment: ["partner"],
    icon: "🎾"
  },
  {
    id: 100,
    title: "Advanced Skills Workshop",
    description: "Extended practice session focusing on advanced tennis skills.",
    timeRequired: 60,
    skillLevel: ["advanced"],
    equipment: ["partner", "ball machine"],
    icon: "🎓"
  },
  {
    id: 101,
    title: "Tactical Match Play",
    description: "Extended match play focusing on tactical decision making.",
    timeRequired: 50,
    skillLevel: ["advanced"],
    equipment: ["partner"],
    icon: "🧠"
  },
  {
    id: 102,
    title: "Complete Wall Practice",
    description: "Extended wall practice session covering all shot types.",
    timeRequired: 40,
    skillLevel: ["intermediate", "advanced"],
    equipment: ["wall"],
    icon: "🏓"
  },
  {
    id: 103,
    title: "Advanced Movement Training",
    description: "Extended footwork and movement training session.",
    timeRequired: 45,
    skillLevel: ["advanced"],
    equipment: ["none"],
    icon: "🏃"
  },
  {
    id: 104,
    title: "Comprehensive Serve Practice",
    description: "Extended serve practice covering all serve types and placements.",
    timeRequired: 40,
    skillLevel: ["advanced"],
    equipment: ["none", "partner"],
    icon: "🎯"
  },
  {
    id: 105,
    title: "Advanced Volley Mastery",
    description: "Extended volley practice session focusing on advanced techniques.",
    timeRequired: 35,
    skillLevel: ["advanced"],
    equipment: ["partner"],
    icon: "⚡"
  }
];

export default App;
