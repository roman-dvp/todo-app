import { createGlobalStyle } from 'styled-components';
import { ThemeColors } from '../types/theme';

export const GlobalStyle = createGlobalStyle<{ theme: ThemeColors }>`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

  :root {
    --font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    --border-radius-sm: 4px;
    --border-radius-md: 8px;
    --border-radius-lg: 12px;
    --spacing-xs: 0.25rem;
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 1.5rem;
    --spacing-xl: 2rem;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.text};
    font-family: var(--font-primary);
    font-size: 16px;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: background-color ${props => props.theme.transitionDuration} ${props => props.theme.transitionTiming},
                color ${props => props.theme.transitionDuration} ${props => props.theme.transitionTiming};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-primary);
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: var(--spacing-md);
  }

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.75rem;
  }

  p {
    margin-bottom: var(--spacing-md);
  }

  button {
    font-family: var(--font-primary);
    font-size: 1rem;
  }

  input, textarea, select {
    font-family: var(--font-primary);
    font-size: 1rem;
    transition: all ${props => props.theme.transitionDuration} ${props => props.theme.transitionTiming};
  }

  /* Scrollbar Styles */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${props => props.theme.background};
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.secondary};
    border-radius: var(--border-radius-sm);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.primary};
  }

  /* Mobile Responsive */
  @media (max-width: 768px) {
    body {
      font-size: 14px;
    }

    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.75rem;
    }

    h3 {
      font-size: 1.5rem;
    }
  }
`; 