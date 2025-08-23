// Sample drill data
export const allDrills = [
  // BEGINNER DRILLS
  {
    id: 1,
    title: "Wall Rally Practice",
    description: "Practice your groundstrokes against a wall. Focus on consistent contact and proper form.",
    timeRequired: 15,
    skillLevel: ["beginner", "intermediate", "advanced"],
    equipment: ["wall"],
    icon: "🏓",
    instructions: [
      "Stand 10-15 feet away from the wall",
      "Start with forehand strokes, hitting the ball at waist height",
      "Focus on keeping the ball in play for as long as possible",
      "Switch to backhand strokes after 5 minutes",
      "Practice hitting to different heights on the wall",
      "Gradually increase your distance from the wall"
    ],
    tips: [
      "Keep your eyes on the ball at all times",
      "Use your legs to generate power, not just your arms",
      "Stay relaxed and avoid tensing up",
      "Focus on consistency rather than speed initially",
      "Record yourself to check your form"
    ]
  },
  {
    id: 2,
    title: "Basic Serve Practice",
    description: "Work on your serve technique. Practice both first and second serves with proper form.",
    timeRequired: 20,
    skillLevel: ["beginner", "intermediate", "advanced"],
    equipment: ["none", "partner"],
    icon: "🎯",
    instructions: [
      "Start with proper stance - feet shoulder-width apart",
      "Practice ball toss without hitting for 5 minutes",
      "Focus on consistent toss height and placement",
      "Begin with second serve technique (slice or kick)",
      "Progress to first serve (flat or topspin)",
      "Practice serving to different targets on the court"
    ],
    tips: [
      "Keep your toss arm straight and extended",
      "Use continental grip for better control",
      "Transfer weight from back foot to front foot",
      "Follow through towards your target",
      "Practice rhythm and timing consistently"
    ]
  },
  {
    id: 3,
    title: "Footwork Drills",
    description: "Improve your movement on court with ladder drills and cone exercises.",
    timeRequired: 20,
    skillLevel: ["beginner", "intermediate", "advanced"],
    equipment: ["none"],
    icon: "🏃",
    instructions: [
      "Set up cones or markers in a zigzag pattern",
      "Practice side-to-side movement between markers",
      "Add forward and backward movement patterns",
      "Incorporate split-step before each direction change",
      "Practice quick direction changes and recovery",
      "Work on explosive movements and quick stops"
    ],
    tips: [
      "Stay on the balls of your feet",
      "Keep your knees slightly bent",
      "Use your arms for balance and momentum",
      "Focus on quick, explosive movements",
      "Practice both directions equally"
    ]
  },
  {
    id: 4,
    title: "Shadow Tennis",
    description: "Practice your strokes without a ball. Focus on proper form and technique.",
    timeRequired: 15,
    skillLevel: ["beginner"],
    equipment: ["none"],
    icon: "👤",
    instructions: [
      "Find a clear space with room to swing your racket",
      "Start with forehand shadow strokes - practice the full motion",
      "Focus on proper grip and follow-through",
      "Practice backhand strokes with correct form",
      "Add footwork and movement to your shadow practice",
      "Practice serve motion without a ball"
    ],
    tips: [
      "Use a mirror to check your form",
      "Keep your movements slow and controlled",
      "Focus on proper weight transfer",
      "Practice both forehand and backhand equally",
      "Imagine hitting a ball to maintain realistic motion"
    ]
  },
  {
    id: 5,
    title: "Basic Forehand Practice",
    description: "Practice forehand strokes with a partner. Focus on consistent contact.",
    timeRequired: 20,
    skillLevel: ["beginner"],
    equipment: ["partner"],
    icon: "🎾",
    instructions: [
      "Stand across from your partner at the baseline",
      "Start with gentle forehand exchanges",
      "Focus on consistent contact in the sweet spot",
      "Practice hitting to your partner's forehand side",
      "Gradually increase the pace of rallies",
      "Work on depth and placement"
    ],
    tips: [
      "Keep your eye on the ball through contact",
      "Use a semi-western or eastern forehand grip",
      "Transfer weight from back foot to front foot",
      "Follow through towards your target",
      "Stay relaxed and avoid over-hitting"
    ]
  },
  {
    id: 6,
    title: "Basic Backhand Practice",
    description: "Practice backhand strokes with a partner. Work on proper grip and form.",
    timeRequired: 20,
    skillLevel: ["beginner"],
    equipment: ["partner"],
    icon: "🎾",
    instructions: [
      "Position yourself across from your partner",
      "Start with two-handed backhand if you're a beginner",
      "Practice consistent contact and follow-through",
      "Focus on hitting to your partner's backhand side",
      "Work on keeping the ball in play",
      "Practice both cross-court and down-the-line shots"
    ],
    tips: [
      "Use continental grip for one-handed backhand",
      "Keep your non-dominant hand on the racket for two-handed",
      "Bend your knees and stay low",
      "Rotate your shoulders through the shot",
      "Follow through towards your target"
    ]
  },
  {
    id: 7,
    title: "Wall Serve Practice",
    description: "Practice serving against a wall to improve accuracy and consistency.",
    timeRequired: 15,
    skillLevel: ["beginner", "intermediate"],
    equipment: ["wall"],
    icon: "🎯",
    instructions: [
      "Mark a target area on the wall at net height",
      "Stand 20-25 feet from the wall",
      "Practice ball toss without hitting first",
      "Start with second serve technique",
      "Focus on hitting the target consistently",
      "Practice both deuce and ad court serves"
    ],
    tips: [
      "Use the wall to check your serve bounce",
      "Focus on consistent toss placement",
      "Practice rhythm and timing",
      "Work on different serve spins",
      "Use chalk to mark targets on the wall"
    ]
  },
  {
    id: 8,
    title: "Basic Volley Practice",
    description: "Practice basic volleys at the net with a partner.",
    timeRequired: 15,
    skillLevel: ["beginner", "intermediate"],
    equipment: ["partner"],
    icon: "⚡",
    instructions: [
      "One player stands at the net, the other at the baseline",
      "Baseline player feeds balls to the net player",
      "Practice forehand and backhand volleys",
      "Focus on short, compact strokes",
      "Work on volley placement and control",
      "Switch positions after 7-8 minutes"
    ],
    tips: [
      "Keep your volley stroke short and compact",
      "Use continental grip for all volleys",
      "Stay on the balls of your feet",
      "Move forward to meet the ball",
      "Keep your racket head above your wrist"
    ]
  },
  {
    id: 9,
    title: "Ball Toss Practice",
    description: "Practice ball toss for serves. Focus on consistency and height.",
    timeRequired: 10,
    skillLevel: ["beginner"],
    equipment: ["none"],
    icon: "⬆️",
    instructions: [
      "Stand in your serving position",
      "Practice tossing without hitting the ball",
      "Aim for consistent height (about 12-18 inches above your reach)",
      "Focus on straight arm and consistent placement",
      "Practice tossing to different positions",
      "Work on rhythm and timing"
    ],
    tips: [
      "Keep your tossing arm straight",
      "Release the ball at eye level",
      "Don't spin the ball during toss",
      "Practice in front of a mirror",
      "Use a target on the wall to check placement"
    ]
  },
  {
    id: 10,
    title: "Basic Rally Practice",
    description: "Practice simple rallies with a partner. Focus on keeping the ball in play.",
    timeRequired: 25,
    skillLevel: ["beginner"],
    equipment: ["partner"],
    icon: "🔄",
    instructions: [
      "Start with gentle cross-court rallies",
      "Focus on keeping the ball in play for as long as possible",
      "Practice both forehand and backhand exchanges",
      "Work on consistent depth and placement",
      "Gradually increase rally length",
      "Practice moving to the ball"
    ],
    tips: [
      "Focus on consistency over power",
      "Keep your eye on the ball",
      "Stay in ready position between shots",
      "Use proper footwork to get to the ball",
      "Communicate with your partner about pace"
    ]
  },
  {
    id: 11,
    title: "Cross-Court Rally",
    description: "Practice cross-court forehand and backhand rallies with a partner.",
    timeRequired: 25,
    skillLevel: ["intermediate", "advanced"],
    equipment: ["partner"],
    icon: "🔄",
    instructions: [
      "Position yourselves for cross-court rallies",
      "Start with forehand cross-court exchanges",
      "Focus on consistent depth and placement",
      "Switch to backhand cross-court rallies",
      "Work on maintaining rally length",
      "Practice hitting to specific targets"
    ],
    tips: [
      "Use the full width of the court",
      "Focus on consistent contact point",
      "Stay in ready position between shots",
      "Work on footwork and positioning",
      "Practice both directions equally"
    ]
  },
  {
    id: 12,
    title: "Approach Shot Practice",
    description: "Practice approach shots and moving to the net.",
    timeRequired: 20,
    skillLevel: ["intermediate", "advanced"],
    equipment: ["partner"],
    icon: "🏃",
    instructions: [
      "Start from the baseline",
      "Practice hitting approach shots down the line",
      "Move forward to the net after each approach shot",
      "Focus on deep, penetrating approach shots",
      "Practice both forehand and backhand approaches",
      "Work on timing and positioning"
    ],
    tips: [
      "Hit approach shots deep to the corners",
      "Move forward immediately after hitting",
      "Use slice for backhand approaches",
      "Stay aggressive and confident",
      "Practice split-step when reaching the net"
    ]
  },
  {
    id: 13,
    title: "Overhead Smash Practice",
    description: "Practice overhead smashes and lob returns.",
    timeRequired: 15,
    skillLevel: ["intermediate", "advanced"],
    equipment: ["partner"],
    icon: "💥",
    instructions: [
      "One player stands at the net, the other at the baseline",
      "Baseline player hits lobs to the net player",
      "Practice overhead smashes from different positions",
      "Focus on proper positioning and timing",
      "Work on smash placement and power",
      "Switch positions after 7-8 minutes"
    ],
    tips: [
      "Use the same motion as your serve",
      "Position yourself under the ball",
      "Keep your eye on the ball throughout",
      "Use your legs to generate power",
      "Follow through towards your target"
    ]
  },
  {
    id: 14,
    title: "Drop Shot Practice",
    description: "Practice drop shots and touch shots at the net.",
    timeRequired: 15,
    skillLevel: ["intermediate", "advanced"],
    equipment: ["partner"],
    icon: "🎯",
    instructions: [
      "Practice drop shots from the baseline",
      "Focus on soft hands and gentle contact",
      "Work on drop shot placement and disguise",
      "Practice both forehand and backhand drop shots",
      "Add movement to retrieve drop shots",
      "Practice touch shots at the net"
    ],
    tips: [
      "Use continental grip for better touch",
      "Keep your wrist firm but relaxed",
      "Disguise your drop shot intention",
      "Practice from different court positions",
      "Work on recovery after drop shots"
    ]
  },
  {
    id: 15,
    title: "Advanced Volley Mastery",
    description: "Extended volley practice session focusing on advanced techniques.",
    timeRequired: 35,
    skillLevel: ["advanced"],
    equipment: ["partner"],
    icon: "⚡",
    instructions: [
      "Practice quick volley exchanges at the net",
      "Work on reflex volleys and half-volleys",
      "Practice volley placement and angles",
      "Focus on aggressive net play",
      "Work on volley combinations and patterns",
      "Practice volley defense and recovery"
    ],
    tips: [
      "Stay on the balls of your feet",
      "Keep your racket head up and ready",
      "Move forward to meet the ball",
      "Use your legs for power and stability",
      "Practice both offensive and defensive volleys"
    ]
  },
  {
    id: 16,
    title: "Ball Machine Practice",
    description: "Practice with a ball machine to improve consistency and technique.",
    timeRequired: 30,
    skillLevel: ["intermediate", "advanced"],
    equipment: ["ball machine"],
    icon: "🤖",
    instructions: [
      "Set up the ball machine at the baseline",
      "Start with forehand practice at medium speed",
      "Focus on consistent contact and form",
      "Practice backhand strokes with proper technique",
      "Work on different ball heights and speeds",
      "Practice moving to the ball and positioning"
    ],
    tips: [
      "Keep your eye on the ball from the machine",
      "Stay in ready position between shots",
      "Use proper footwork to get to each ball",
      "Focus on form over power initially",
      "Practice both forehand and backhand equally"
    ]
  },
  {
    id: 17,
    title: "Return of Serve Practice",
    description: "Practice returning serves with a partner.",
    timeRequired: 20,
    skillLevel: ["intermediate", "advanced"],
    equipment: ["partner"],
    icon: "🎯",
    instructions: [
      "One player serves, the other returns",
      "Start with second serves for consistency",
      "Practice returning to different targets",
      "Work on both forehand and backhand returns",
      "Focus on getting the ball back in play",
      "Practice aggressive returns when appropriate"
    ],
    tips: [
      "Stay on the balls of your feet",
      "Split-step when your partner tosses",
      "Take the ball early when possible",
      "Use continental grip for better control",
      "Focus on depth and placement"
    ]
  },
  {
    id: 18,
    title: "Lob Practice",
    description: "Practice defensive and offensive lobs.",
    timeRequired: 15,
    skillLevel: ["intermediate", "advanced"],
    equipment: ["partner"],
    icon: "☁️",
    instructions: [
      "Practice defensive lobs from the baseline",
      "Work on offensive lobs when opponent is at net",
      "Focus on proper height and depth",
      "Practice both forehand and backhand lobs",
      "Work on lob placement and disguise",
      "Practice retrieving lobs and overheads"
    ],
    tips: [
      "Use continental grip for better control",
      "Keep your racket face open",
      "Follow through high and long",
      "Disguise your lob intention",
      "Practice from different court positions"
    ]
  },
  {
    id: 19,
    title: "Slice Practice",
    description: "Practice slice shots for variety and control.",
    timeRequired: 20,
    skillLevel: ["intermediate", "advanced"],
    equipment: ["partner"],
    icon: "🔪",
    instructions: [
      "Practice forehand slice from the baseline",
      "Work on backhand slice technique",
      "Focus on low, skidding slice shots",
      "Practice slice approach shots",
      "Work on slice volleys at the net",
      "Practice returning slice shots"
    ],
    tips: [
      "Use continental grip for better slice control",
      "Keep your racket face slightly open",
      "Follow through low and forward",
      "Stay low and bend your knees",
      "Use slice for variety and defense"
    ]
  },
  {
    id: 20,
    title: "Topspin Practice",
    description: "Practice heavy topspin shots for power and control.",
    timeRequired: 25,
    skillLevel: ["intermediate", "advanced"],
    equipment: ["partner"],
    icon: "🌀",
    instructions: [
      "Practice heavy topspin forehands",
      "Work on topspin backhand technique",
      "Focus on brushing up on the ball",
      "Practice topspin lobs and defensive shots",
      "Work on topspin approach shots",
      "Practice returning heavy topspin"
    ],
    tips: [
      "Use semi-western or western grip for forehand",
      "Brush up on the ball for maximum spin",
      "Transfer weight from back to front foot",
      "Follow through high and over your shoulder",
      "Stay low and use your legs for power"
    ]
  },
  {
    id: 21,
    title: "Quick Reflex Practice",
    description: "Improve reflexes and reaction time at the net.",
    timeRequired: 15,
    skillLevel: ["advanced"],
    equipment: ["partner"],
    icon: "⚡",
    instructions: [
      "Stand close to the net with your partner",
      "Practice quick volley exchanges",
      "Work on reflex volleys and half-volleys",
      "Focus on quick reactions and positioning",
      "Practice volley combinations and patterns",
      "Work on defensive volleys and recovery"
    ],
    tips: [
      "Stay on the balls of your feet",
      "Keep your racket head up and ready",
      "React quickly to each shot",
      "Use your legs for quick movements",
      "Practice both offensive and defensive play"
    ]
  },
  {
    id: 22,
    title: "Court Coverage Practice",
    description: "Practice moving and covering the entire court effectively.",
    timeRequired: 30,
    skillLevel: ["intermediate", "advanced"],
    equipment: ["partner"],
    icon: "🏃",
    instructions: [
      "Practice moving to all areas of the court",
      "Work on recovery to center position",
      "Focus on efficient movement patterns",
      "Practice split-steps and direction changes",
      "Work on covering wide shots and angles",
      "Practice moving forward and backward"
    ],
    tips: [
      "Stay in ready position between shots",
      "Use split-steps before moving",
      "Recover to center after each shot",
      "Stay on the balls of your feet",
      "Practice both directions equally"
    ]
  },
  {
    id: 23,
    title: "Mental Focus Practice",
    description: "Practice maintaining focus and mental toughness during play.",
    timeRequired: 20,
    skillLevel: ["intermediate", "advanced"],
    equipment: ["partner"],
    icon: "🧠",
    instructions: [
      "Play practice points with specific goals",
      "Focus on one shot at a time",
      "Practice breathing and relaxation techniques",
      "Work on positive self-talk and confidence",
      "Practice handling pressure situations",
      "Focus on process over outcome"
    ],
    tips: [
      "Stay present and focused on each point",
      "Use positive affirmations between points",
      "Control your breathing during pressure",
      "Focus on what you can control",
      "Learn from mistakes without dwelling"
    ]
  },
  {
    id: 24,
    title: "Match Play Practice",
    description: "Practice playing actual games and sets.",
    timeRequired: 45,
    skillLevel: ["intermediate", "advanced"],
    equipment: ["partner"],
    icon: "🏆",
    instructions: [
      "Play practice games with scoring",
      "Focus on implementing your practice skills",
      "Work on strategy and tactics",
      "Practice serving and returning under pressure",
      "Focus on mental toughness and focus",
      "Practice different game situations"
    ],
    tips: [
      "Treat practice matches like real matches",
      "Focus on your game plan and strategy",
      "Stay positive and confident throughout",
      "Learn from each point and game",
      "Practice good sportsmanship and etiquette"
    ]
  },
  {
    id: 25,
    title: "Fitness and Conditioning",
    description: "Improve overall fitness and conditioning for tennis.",
    timeRequired: 30,
    skillLevel: ["beginner", "intermediate", "advanced"],
    equipment: ["none"],
    icon: "💪",
    instructions: [
      "Start with dynamic stretching and warm-up",
      "Practice tennis-specific footwork drills",
      "Work on cardiovascular endurance",
      "Practice strength training exercises",
      "Focus on flexibility and mobility",
      "End with cool-down and stretching"
    ],
    tips: [
      "Warm up properly before any exercise",
      "Focus on tennis-specific movements",
      "Build endurance gradually over time",
      "Include rest days in your routine",
      "Stay hydrated throughout your workout"
    ]
  },
  {
    id: 26,
    title: "Down-the-Line Practice",
    description: "Practice hitting straight down the line shots for precision and control.",
    timeRequired: 20,
    skillLevel: ["intermediate", "advanced"],
    equipment: ["partner"],
    icon: "📏",
    instructions: [
      "Position yourselves for down-the-line rallies",
      "Start with forehand down-the-line exchanges",
      "Focus on hitting straight and keeping the ball in bounds",
      "Practice backhand down-the-line shots",
      "Work on depth and placement accuracy",
      "Practice both cross-court and down-the-line combinations"
    ],
    tips: [
      "Aim for the sidelines but stay within bounds",
      "Use proper footwork to get in position",
      "Keep your eye on the ball through contact",
      "Follow through towards your target",
      "Practice both forehand and backhand equally"
    ]
  },
  {
    id: 27,
    title: "Half-Volley Practice",
    description: "Practice half-volleys and low volleys for better net play.",
    timeRequired: 15,
    skillLevel: ["intermediate", "advanced"],
    equipment: ["partner"],
    icon: "🎯",
    instructions: [
      "One player stands at the net, the other at the baseline",
      "Baseline player hits low shots to the net player",
      "Practice half-volleys from different positions",
      "Focus on soft hands and gentle contact",
      "Work on half-volley placement and control",
      "Practice recovery after half-volleys"
    ],
    tips: [
      "Keep your racket head low and ready",
      "Use soft hands and gentle contact",
      "Stay on the balls of your feet",
      "Bend your knees to get low",
      "Practice from different court positions"
    ]
  },
  {
    id: 28,
    title: "Angle Shot Practice",
    description: "Practice hitting angled shots to open up the court.",
    timeRequired: 20,
    skillLevel: ["intermediate", "advanced"],
    equipment: ["partner"],
    icon: "📐",
    instructions: [
      "Practice hitting sharp cross-court angles",
      "Work on opening up the court with angled shots",
      "Focus on placement and disguise",
      "Practice both forehand and backhand angles",
      "Work on recovery after hitting angles",
      "Practice defensive angle shots"
    ],
    tips: [
      "Use the full width of the court",
      "Disguise your angle shot intention",
      "Stay balanced when hitting angles",
      "Recover quickly after hitting angles",
      "Practice from different court positions"
    ]
  },
  {
    id: 29,
    title: "Passing Shot Practice",
    description: "Practice passing shots when your opponent is at the net.",
    timeRequired: 20,
    skillLevel: ["intermediate", "advanced"],
    equipment: ["partner"],
    icon: "🎯",
    instructions: [
      "One player stands at the net, the other at the baseline",
      "Practice hitting passing shots around the net player",
      "Work on both forehand and backhand passing shots",
      "Focus on placement and disguise",
      "Practice lob passing shots as well",
      "Work on different passing shot techniques"
    ],
    tips: [
      "Keep your passing shots low and fast",
      "Disguise your passing shot intention",
      "Use the full width of the court",
      "Stay balanced and focused",
      "Practice both sides equally"
    ]
  },
  {
    id: 30,
    title: "Defensive Play Practice",
    description: "Practice defensive shots and recovery techniques.",
    timeRequired: 25,
    skillLevel: ["intermediate", "advanced"],
    equipment: ["partner"],
    instructions: [
      "Practice defensive lobs and high shots",
      "Work on getting back into position quickly",
      "Focus on keeping the ball in play under pressure",
      "Practice defensive slices and moonballs",
      "Work on recovery footwork and positioning",
      "Practice defensive shot combinations"
    ],
    tips: [
      "Stay calm and focused under pressure",
      "Use high, deep shots to buy time",
      "Recover to center position quickly",
      "Stay balanced and ready",
      "Practice both forehand and backhand defense"
    ]
  },
  {
    id: 31,
    title: "Aggressive Net Play",
    description: "Practice aggressive net play and finishing points.",
    timeRequired: 20,
    skillLevel: ["advanced"],
    equipment: ["partner"],
    icon: "⚡",
    instructions: [
      "Practice approach shots and moving to the net",
      "Work on aggressive volleys and overheads",
      "Focus on finishing points at the net",
      "Practice net positioning and movement",
      "Work on aggressive volley placement",
      "Practice net play combinations"
    ],
    tips: [
      "Move forward aggressively after approach shots",
      "Stay on the balls of your feet at the net",
      "Use your legs for power and stability",
      "Focus on finishing points quickly",
      "Practice both offensive and defensive net play"
    ]
  },
  {
    id: 32,
    title: "Baseline Power Practice",
    description: "Practice hitting powerful groundstrokes from the baseline.",
    timeRequired: 25,
    skillLevel: ["intermediate", "advanced"],
    equipment: ["partner"],
    icon: "💥",
    instructions: [
      "Practice hitting powerful forehands from the baseline",
      "Work on backhand power and control",
      "Focus on generating power with proper technique",
      "Practice power shot placement and accuracy",
      "Work on power shot combinations",
      "Practice returning powerful shots"
    ],
    tips: [
      "Use your legs to generate power",
      "Transfer weight from back to front foot",
      "Keep your eye on the ball through contact",
      "Follow through towards your target",
      "Stay balanced and controlled"
    ]
  },
  {
    id: 33,
    title: "Serve and Volley Practice",
    description: "Practice the classic serve and volley game style.",
    timeRequired: 30,
    skillLevel: ["advanced"],
    equipment: ["partner"],
    icon: "🎯",
    instructions: [
      "Practice serving and immediately moving to the net",
      "Work on first volley technique and placement",
      "Focus on serve and volley combinations",
      "Practice different serve types with volley follow-up",
      "Work on serve and volley positioning",
      "Practice serve and volley strategy"
    ],
    tips: [
      "Move forward immediately after serving",
      "Stay on the balls of your feet",
      "Use your legs for quick movement",
      "Focus on first volley placement",
      "Practice both sides of the court"
    ]
  },
  {
    id: 34,
    title: "Doubles Practice",
    description: "Practice doubles-specific skills and positioning.",
    timeRequired: 35,
    skillLevel: ["intermediate", "advanced"],
    equipment: ["partner"],
    icon: "👥",
    instructions: [
      "Practice doubles positioning and movement",
      "Work on doubles volleys and overheads",
      "Focus on communication with your partner",
      "Practice doubles strategy and tactics",
      "Work on doubles-specific shots",
      "Practice doubles court coverage"
    ],
    tips: [
      "Communicate clearly with your partner",
      "Stay in proper doubles positioning",
      "Cover your side of the court",
      "Work together as a team",
      "Practice both serving and receiving"
    ]
  },
  {
    id: 35,
    title: "Match Strategy Practice",
    description: "Practice implementing different match strategies.",
    timeRequired: 40,
    skillLevel: ["advanced"],
    equipment: ["partner"],
    icon: "🧠",
    instructions: [
      "Practice different match strategies and tactics",
      "Work on adapting your game to different opponents",
      "Focus on mental toughness and focus",
      "Practice pressure situations and handling stress",
      "Work on match planning and execution",
      "Practice different game styles and approaches"
    ],
    tips: [
      "Stay focused on your game plan",
      "Adapt to your opponent's style",
      "Stay positive and confident",
      "Learn from each point and game",
      "Practice good sportsmanship"
    ]
  }
];
