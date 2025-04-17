export type Theme = 'light' | 'dark';

export interface ThemeColors {
  // Base colors
  background: string;
  text: string;
  primary: string;
  secondary: string;
  border: string;
  cardBackground: string;
  
  // Status colors
  error: string;
  success: string;
  warning: string;
  
  // Priority colors
  priorityHigh: string;
  priorityMedium: string;
  priorityLow: string;
  
  // Component specific
  inputBackground: string;
  inputText: string;
  buttonText: string;
  shadow: string;
  shadowHover: string;
  
  // Text colors
  textMuted: string;
  textLight: string;
  textHighlight: string;
  
  // Hover states
  primaryHover: string;
  errorHover: string;
  cardBackgroundHover: string;
  
  // Borders
  borderLight: string;
  borderActive: string;
  
  // Gradients and effects
  cardGradient: string;
  activeGlow: string;
  
  // Transitions
  transitionDuration: string;
  transitionTiming: string;
}

export const lightTheme: ThemeColors = {
  // Base colors
  background: '#f8f9fa',
  text: '#2d3436',
  primary: '#3498db',
  secondary: '#95a5a6',
  border: '#e0e0e0',
  cardBackground: '#ffffff',
  
  // Status colors
  error: '#e74c3c',
  success: '#2ecc71',
  warning: '#f1c40f',
  
  // Priority colors
  priorityHigh: '#ff6b6b',
  priorityMedium: '#ffd93d',
  priorityLow: '#6dd5ed',
  
  // Component specific
  inputBackground: '#ffffff',
  inputText: '#2d3436',
  buttonText: '#ffffff',
  shadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  shadowHover: '0 4px 8px rgba(0, 0, 0, 0.15)',
  
  // Text colors
  textMuted: '#95a5a6',
  textLight: '#bdc3c7',
  textHighlight: '#2d3436',
  
  // Hover states
  primaryHover: '#2980b9',
  errorHover: '#c0392b',
  cardBackgroundHover: '#f8f9fa',
  
  // Borders
  borderLight: '#e0e0e0',
  borderActive: '#3498db',
  
  // Gradients and effects
  cardGradient: 'linear-gradient(to bottom, #ffffff, #f8f9fa)',
  activeGlow: '0 0 0 3px rgba(52, 152, 219, 0.2)',
  
  // Transitions
  transitionDuration: '0.2s',
  transitionTiming: 'ease-in-out',
};

export const darkTheme: ThemeColors = {
  // Base colors
  background: '#1a1b1e',
  text: '#ecf0f1',
  primary: '#3498db',
  secondary: '#95a5a6',
  border: '#2d3436',
  cardBackground: '#2d3436',
  
  // Status colors
  error: '#e74c3c',
  success: '#2ecc71',
  warning: '#f1c40f',
  
  // Priority colors
  priorityHigh: '#ff6b6b',
  priorityMedium: '#ffd93d',
  priorityLow: '#6dd5ed',
  
  // Component specific
  inputBackground: '#232629',
  inputText: '#ecf0f1',
  buttonText: '#ffffff',
  shadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  shadowHover: '0 4px 8px rgba(0, 0, 0, 0.3)',
  
  // Text colors
  textMuted: '#95a5a6',
  textLight: '#bdc3c7',
  textHighlight: '#3498db',
  
  // Hover states
  primaryHover: '#2980b9',
  errorHover: '#c0392b',
  cardBackgroundHover: '#34495e',
  
  // Borders
  borderLight: '#34495e',
  borderActive: '#3498db',
  
  // Gradients and effects
  cardGradient: 'linear-gradient(to bottom, #2d3436, #2c3e50)',
  activeGlow: '0 0 0 3px rgba(52, 152, 219, 0.3)',
  
  // Transitions
  transitionDuration: '0.2s',
  transitionTiming: 'ease-in-out',
}; 