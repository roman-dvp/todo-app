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
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: ${props => props.theme.cardBackground};
  color: ${props => props.theme.text};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const Icon = styled.span`
  font-size: 1.2rem;
`;

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, onToggle }) => {
  return (
    <ToggleButton onClick={onToggle}>
      <Icon>{theme === 'light' ? '🌙' : '☀️'}</Icon>
      {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
    </ToggleButton>
  );
}; 