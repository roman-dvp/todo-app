import React from 'react';
import styled from 'styled-components';
import { Todo } from '../../types/todo';
import { TodoItem } from './TodoItem';

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (todo: Todo) => void;
}

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  background-color: ${props => props.theme.background};
  border-radius: 4px;
  border: 1px solid ${props => props.theme.border};
`;

const EmptyMessage = styled.p`
  text-align: center;
  color: ${props => props.theme.secondary};
  padding: 2rem;
`;

export const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onDelete, onEdit }) => {
  if (todos.length === 0) {
    return <EmptyMessage>No tasks yet. Add your first task!</EmptyMessage>;
  }

  return (
    <List>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </List>
  );
}; 