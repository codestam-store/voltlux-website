export interface BuildConfig {
  category: string;
  style: string;
  theme: string;
  seed: string;
}

const categories = [
  'SaaS Product',
  'Mobile App',
  'Ecommerce',
  'Event',
  'Portfolio',
  'Agency',
  'Local Business',
  'Course',
  'Nonprofit',
  'Coming Soon'
];

const styles = [
  'Minimalist',
  'Bold Typography',
  'Dark-mode Aesthetic',
  'Gradient-heavy',
  'Illustration-driven',
  'Photographic Hero',
  'Glassmorphism/Neumorphism',
  'Retro',
  'Interactive/Micro-animation Heavy',
  'Split-screen'
];

const themes = [
  'Modern',
  'Classic',
  'Corporate',
  'Creative',
  'Futuristic',
  'Elegant',
  'Playful',
  'Professional',
  'Edgy',
  'Luxury'
];

function generateSeed(): string {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

function seededRandom(seed: string): number {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    const char = seed.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return Math.abs(hash) / 2147483647; // Normalize to 0-1
}

function pickRandom<T>(array: T[], seed: string): T {
  const random = seededRandom(seed);
  const index = Math.floor(random * array.length);
  return array[index];
}

export function generateBuildConfig(): BuildConfig {
  // Use environment variable for deterministic builds, or generate new seed
  const seed = process.env.BUILD_SEED || generateSeed();
  
  return {
    category: pickRandom(categories, seed),
    style: pickRandom(styles, seed + 'style'),
    theme: pickRandom(themes, seed + 'theme'),
    seed
  };
}

export function getBuildConfig(): BuildConfig {
  // This will be called at build time
  return generateBuildConfig();
}
