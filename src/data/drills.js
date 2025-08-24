// Import drills from separate skill level files
import { beginnerDrills } from './beginnerDrills.js';
import { intermediateDrills } from './intermediateDrills.js';
import { advancedDrills } from './advancedDrills.js';

// Combine all drills into one array
export const allDrills = [
  ...beginnerDrills,
  ...intermediateDrills,
  ...advancedDrills
];

// Export individual skill level arrays for specific use
export { beginnerDrills, intermediateDrills, advancedDrills };
