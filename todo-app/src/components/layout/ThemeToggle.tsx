import React from 'react';
import styled from 'styled-components';
import { Theme } from '../../types/theme';

interface ThemeToggleProps {
  theme: Theme;
  onToggle: () => void;
}

const ToggleButton = styled.button`
  position: fixed;
  top: 1rem;
  right: 1rem;
  width: 40px;
  height: 40px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background-color: ${props => props.theme.cardBackground};
  color: ${props => props.theme.text};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${props => props.theme.shadow};
  transition: all ${props => props.theme.transitionDuration} ${props => props.theme.transitionTiming};
  z-index: 1000;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadowHover};
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    top: 0.5rem;
    right: 0.5rem;
    width: 36px;
    height: 36px;
  }
`;

const Icon = styled.span`
  font-size: 1.2rem;
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, onToggle }) => {
  return (
    <ToggleButton onClick={onToggle} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
      <Icon>{theme === 'light' ? '🌙' : '☀️'}</Icon>
    </ToggleButton>
  );
}; 