import React, { useState, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';
import { Todo } from '../../types/todo';
import { EditTodoForm } from './EditTodoForm';
import { ThemeColors } from '../../types/theme.ts';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (todo: Todo) => void;
}

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const StyledTodoItem = styled.div<{ completed: boolean }>`
  display: flex;
  align-items: flex-start;
  padding: var(--spacing-md);
  margin: var(--spacing-sm) 0;
  background: ${props => props.theme.cardGradient};
  border-radius: var(--border-radius-md);
  box-shadow: ${props => props.theme.shadow};
  transition: all ${props => props.theme.transitionDuration} ${props => props.theme.transitionTiming};
  position: relative;
  overflow: hidden;
  animation: ${slideIn} 0.3s ease-out;
  border: 1px solid ${props => props.theme.borderLight};
  flex-wrap: wrap;
  gap: var(--spacing-sm);

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadowHover};
    background: ${props => props.theme.cardBackgroundHover};
    border-color: ${props => props.theme.borderActive};
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: var(--spacing-sm);
    
    &:hover {
      transform: none;
    }
  }
`;

const PriorityIndicator = styled.div<{ priority: string }>`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background-color: ${props => {
    switch (props.priority) {
      case 'high': return props.theme.priorityHigh;
      case 'medium': return props.theme.priorityMedium;
      case 'low': return props.theme.priorityLow;
      default: return props.theme.secondary;
    }
  }};
  box-shadow: 0 0 8px ${props => {
    switch (props.priority) {
      case 'high': return props.theme.priorityHigh + '80';
      case 'medium': return props.theme.priorityMedium + '80';
      case 'low': return props.theme.priorityLow + '80';
      default: return props.theme.secondary + '80';
    }
  }};
  transition: all ${props => props.theme.transitionDuration} ${props => props.theme.transitionTiming};
`;

const CheckboxContainer = styled.div`
  margin-right: var(--spacing-md);
  margin-left: var(--spacing-sm);
  position: relative;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
  margin: 0;
  padding: 0;
`;

const StyledCheckbox = styled.div<{ checked: boolean }>`
  display: inline-block;
  width: 24px;
  height: 24px;
  background: ${props => props.checked ? props.theme.success : props.theme.inputBackground};
  border: 2px solid ${props => props.checked ? props.theme.success : props.theme.borderLight};
  border-radius: var(--border-radius-sm);
  transition: all ${props => props.theme.transitionDuration} ${props => props.theme.transitionTiming};
  cursor: pointer;
  position: relative;

  &:hover {
    border-color: ${props => props.checked ? props.theme.success : props.theme.primary};
    box-shadow: ${props => props.theme.activeGlow};
  }

  ${HiddenCheckbox}:focus + & {
    box-shadow: ${props => props.theme.activeGlow};
  }

  &::after {
    content: '';
    position: absolute;
    left: 7px;
    top: 3px;
    width: 6px;
    height: 11px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    opacity: ${props => props.checked ? 1 : 0};
    transition: opacity ${props => props.theme.transitionDuration} ${props => props.theme.transitionTiming};
  }
`;

const Content = styled.div`
  flex: 1;
  margin-right: var(--spacing-md);
  min-width: 0;

  @media (max-width: 768px) {
    margin-right: 0;
    width: 100%;
    order: 2;
  }
`;

const Title = styled.h3<{ completed: boolean }>`
  font-size: 1.1rem;
  margin: 0;
  color: ${props => props.completed ? props.theme.textMuted : props.theme.text};
  text-decoration: ${props => props.completed ? 'line-through' : 'none'};
  transition: all ${props => props.theme.transitionDuration} ${props => props.theme.transitionTiming};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    font-size: 1rem;
    white-space: normal;
    word-wrap: break-word;
  }
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: ${props => props.theme.textLight};
  margin: var(--spacing-xs) 0 0 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    white-space: normal;
    word-wrap: break-word;
  }
`;

const DateInfo = styled.span`
  font-size: 0.8rem;
  color: ${props => props.theme.textLight};
  margin-top: var(--spacing-xs);
  display: block;
`;

const TopSection = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  width: 100%;

  @media (max-width: 768px) {
    order: 1;
  }
`;

const PriorityBadge = styled.span<{ priority: string }>`
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--border-radius-sm);
  font-size: 0.8rem;
  font-weight: 500;
  margin-right: var(--spacing-md);
  background-color: ${props => {
    switch (props.priority) {
      case 'high': return props.theme.priorityHigh + '33';
      case 'medium': return props.theme.priorityMedium + '33';
      case 'low': return props.theme.priorityLow + '33';
      default: return props.theme.secondary + '33';
    }
  }};
  color: ${props => {
    switch (props.priority) {
      case 'high': return props.theme.priorityHigh;
      case 'medium': return props.theme.priorityMedium;
      case 'low': return props.theme.priorityLow;
      default: return props.theme.secondary;
    }
  }};
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  border: 1px solid ${props => {
    switch (props.priority) {
      case 'high': return props.theme.priorityHigh + '66';
      case 'medium': return props.theme.priorityMedium + '66';
      case 'low': return props.theme.priorityLow + '66';
      default: return props.theme.secondary + '66';
    }
  }};

  @media (max-width: 768px) {
    order: 3;
    margin-right: 0;
    align-self: flex-start;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: var(--spacing-sm);

  @media (max-width: 768px) {
    width: 100%;
    order: 4;
    margin-top: var(--spacing-sm);
    
    button {
      flex: 1;
      justify-content: center;
    }
  }
`;

const Button = styled.button<{ variant?: 'danger' | 'primary' }>`
  background-color: ${props => props.variant === 'danger' ? props.theme.error : props.theme.primary};
  color: ${props => props.theme.buttonText};
  border: none;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--border-radius-sm);
  cursor: pointer;
  font-weight: 500;
  transition: all ${props => props.theme.transitionDuration} ${props => props.theme.transitionTiming};
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);

  &:hover {
    background-color: ${props => props.variant === 'danger' ? props.theme.errorHover : props.theme.primaryHover};
    transform: translateY(-1px);
    box-shadow: ${props => props.theme.shadow};
  }

  &:active {
    transform: translateY(0);
  }

  &:focus {
    outline: none;
    box-shadow: ${props => props.theme.activeGlow};
  }

  &::before {
    content: ${props => props.variant === 'danger' ? '"🗑️"' : '"✏️"'};
    font-size: 1rem;
  }
`;

export const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleToggle = useCallback(() => {
    onToggle(todo.id);
  }, [todo.id, onToggle]);

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (isEditing) {
    return (
      <EditTodoForm
        todo={todo}
        onSubmit={(updatedTodo) => {
          onEdit(updatedTodo);
          setIsEditing(false);
        }}
        onCancel={() => setIsEditing(false)}
      />
    );
  }

  return (
    <StyledTodoItem completed={todo.completed}>
      <TopSection>
        <PriorityIndicator priority={todo.priority} />
        <CheckboxContainer>
          <HiddenCheckbox
            checked={todo.completed}
            onChange={handleToggle}
            id={`todo-${todo.id}`}
          />
          <StyledCheckbox checked={todo.completed} onClick={handleToggle} />
        </CheckboxContainer>
        <Content>
          <Title completed={todo.completed}>{todo.title}</Title>
          {todo.description && <Description>{todo.description}</Description>}
          <DateInfo>Created: {formatDate(todo.createdAt)}</DateInfo>
        </Content>
      </TopSection>
      <PriorityBadge priority={todo.priority}>
        {todo.priority}
      </PriorityBadge>
      <ButtonGroup>
        <Button onClick={() => setIsEditing(true)}>Edit</Button>
        <Button variant="danger" onClick={() => onDelete(todo.id)}>Delete</Button>
      </ButtonGroup>
    </StyledTodoItem>
  );
}; 