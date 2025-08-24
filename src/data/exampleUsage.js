// Example usage of the separate skill level drill files
import { beginnerDrills, intermediateDrills, advancedDrills } from './drills.js';

// Example: Get only beginner drills
export const getBeginnerDrills = () => {
  return beginnerDrills;
};

// Example: Get only intermediate drills
export const getIntermediateDrills = () => {
  return intermediateDrills;
};

// Example: Get only advanced drills
export const getAdvancedDrills = () => {
  return advancedDrills;
};

// Example: Get drills by specific skill level
export const getDrillsBySkillLevel = (skillLevel) => {
  switch (skillLevel.toLowerCase()) {
    case 'beginner':
      return beginnerDrills;
    case 'intermediate':
      return intermediateDrills;
    case 'advanced':
      return advancedDrills;
    default:
      return [];
  }
};

// Example: Get drills for multiple skill levels
export const getDrillsForSkillLevels = (skillLevels) => {
  const drills = [];
  
  skillLevels.forEach(level => {
    switch (level.toLowerCase()) {
      case 'beginner':
        drills.push(...beginnerDrills);
        break;
      case 'intermediate':
        drills.push(...intermediateDrills);
        break;
      case 'advanced':
        drills.push(...advancedDrills);
        break;
    }
  });
  
  return drills;
};

// Example: Get drill count by skill level
export const getDrillCounts = () => {
  return {
    beginner: beginnerDrills.length,
    intermediate: intermediateDrills.length,
    advanced: advancedDrills.length,
    total: beginnerDrills.length + intermediateDrills.length + advancedDrills.length
  };
};
