import React from 'react';
import styled from 'styled-components';
import { TodoFilter as FilterType } from '../../types/todo';

interface TodoFilterProps {
  filter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const FilterContainer = styled.div`
  display: flex;
  gap: var(--spacing-md);
  padding: var(--spacing-lg);
  background-color: ${props => props.theme.cardBackground};
  border-radius: var(--border-radius-md);
  box-shadow: ${props => props.theme.shadow};
  margin-bottom: var(--spacing-lg);
  flex-wrap: wrap;
  transition: all ${props => props.theme.transitionDuration} ${props => props.theme.transitionTiming};

  &:focus-within {
    box-shadow: ${props => props.theme.shadowHover};
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: var(--spacing-sm);
    padding: var(--spacing-md);
    margin-bottom: var(--spacing-md);
  }
`;

const SearchGroup = styled.div`
  position: relative;
  flex: 1;
  min-width: 200px;

  @media (max-width: 768px) {
    min-width: 100%;
  }
`;

const SearchIcon = styled.span`
  position: absolute;
  left: var(--spacing-md);
  top: 50%;
  transform: translateY(-50%);
  color: ${props => props.theme.textMuted};
  font-size: 1.2rem;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: var(--spacing-md) var(--spacing-md) var(--spacing-md) calc(var(--spacing-md) * 2.5);
  border: 2px solid ${props => props.theme.border};
  border-radius: var(--border-radius-sm);
  font-size: 1rem;
  background-color: ${props => props.theme.inputBackground};
  color: ${props => props.theme.inputText};
  transition: all ${props => props.theme.transitionDuration} ${props => props.theme.transitionTiming};

  &:focus {
    outline: none;
    border-color: ${props => props.theme.primary};
    box-shadow: 0 0 0 3px ${props => props.theme.primary}33;
  }

  &::placeholder {
    color: ${props => props.theme.textMuted};
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: var(--spacing-sm) var(--spacing-md) var(--spacing-sm) calc(var(--spacing-md) * 2.5);
  }
`;

const FilterGroup = styled.div`
  display: flex;
  gap: var(--spacing-md);
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    gap: var(--spacing-sm);
  }
`;

const FilterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  min-width: 200px;

  @media (max-width: 768px) {
    width: 100%;
    min-width: 100%;
  }
`;

const FilterLabel = styled.label`
  font-weight: 500;
  color: ${props => props.theme.text};
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const Select = styled.select`
  padding: var(--spacing-sm) var(--spacing-md);
  border: 2px solid ${props => props.theme.border};
  border-radius: var(--border-radius-sm);
  font-size: 1rem;
  background-color: ${props => props.theme.inputBackground};
  color: ${props => props.theme.inputText};
  cursor: pointer;
  transition: all ${props => props.theme.transitionDuration} ${props => props.theme.transitionTiming};
  width: 100%;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.primary};
    box-shadow: 0 0 0 3px ${props => props.theme.primary}33;
  }

  option {
    background-color: ${props => props.theme.cardBackground};
    color: ${props => props.theme.text};
    padding: var(--spacing-xs) var(--spacing-sm);
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: var(--spacing-xs) var(--spacing-sm);
  }
`;

export const TodoFilter: React.FC<TodoFilterProps> = ({ filter, onFilterChange }) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({
      ...filter,
      search: e.target.value,
    });
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange({
      ...filter,
      status: e.target.value as FilterType['status'],
    });
  };

  const handlePriorityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange({
      ...filter,
      priority: e.target.value as FilterType['priority'],
    });
  };

  return (
    <FilterContainer>
      <SearchGroup>
        <SearchIcon>🔍</SearchIcon>
        <SearchInput
          type="text"
          placeholder="Search tasks..."
          value={filter.search}
          onChange={handleSearchChange}
          aria-label="Search tasks"
        />
      </SearchGroup>
      <FilterGroup>
        <FilterSection>
          <FilterLabel htmlFor="status">
            📋 Status
          </FilterLabel>
          <Select id="status" value={filter.status} onChange={handleStatusChange}>
            <option value="all">All Tasks</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
          </Select>
        </FilterSection>
        <FilterSection>
          <FilterLabel htmlFor="priority">
            🎯 Priority
          </FilterLabel>
          <Select id="priority" value={filter.priority} onChange={handlePriorityChange}>
            <option value="all">All Priorities</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </Select>
        </FilterSection>
      </FilterGroup>
    </FilterContainer>
  );
}; 