import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Todo } from '../../types/todo';

interface TodoFormProps {
  onSubmit: (todo: Omit<Todo, 'id' | 'createdAt'>) => void;
}

const FormContainer = styled.div`
  margin-bottom: var(--spacing-lg);
  width: 100%;
  
  @media (max-width: 768px) {
    margin-bottom: var(--spacing-md);
    padding: 0 var(--spacing-sm);
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  padding: var(--spacing-lg);
  background-color: ${props => props.theme.cardBackground};
  border-radius: var(--border-radius-md);
  box-shadow: ${props => props.theme.shadow};
  transition: all ${props => props.theme.transitionDuration} ${props => props.theme.transitionTiming};
  width: 100%;
  max-width: 100%;

  &:focus-within {
    box-shadow: ${props => props.theme.shadowHover};
  }

  @media (max-width: 768px) {
    padding: var(--spacing-md);
    border-radius: var(--border-radius-sm);
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
`;

const Label = styled.label`
  font-weight: 500;
  color: ${props => props.theme.text};
  font-size: 0.9rem;
`;

const Input = styled.input`
  padding: var(--spacing-sm) var(--spacing-md);
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
`;

const TextArea = styled.textarea`
  padding: var(--spacing-sm) var(--spacing-md);
  border: 2px solid ${props => props.theme.border};
  border-radius: var(--border-radius-sm);
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;
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

  &:focus {
    outline: none;
    border-color: ${props => props.theme.primary};
    box-shadow: 0 0 0 3px ${props => props.theme.primary}33;
  }

  option {
    background-color: ${props => props.theme.cardBackground};
    color: ${props => props.theme.text};
  }
`;

const Button = styled.button`
  padding: var(--spacing-sm) var(--spacing-md);
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.buttonText};
  border: none;
  border-radius: var(--border-radius-sm);
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all ${props => props.theme.transitionDuration} ${props => props.theme.transitionTiming};

  &:hover {
    background-color: ${props => props.theme.primaryHover};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${props => props.theme.primary}33;
  }

  &:disabled {
    background-color: ${props => props.theme.secondary};
    cursor: not-allowed;
    transform: none;
  }
`;

export const TodoForm: React.FC<TodoFormProps> = ({ onSubmit }) => {
  const { register, handleSubmit, reset } = useForm<Omit<Todo, 'id' | 'createdAt'>>({
    defaultValues: {
      title: '',
      description: '',
      completed: false,
      priority: 'medium',
    },
  });

  const onFormSubmit = (data: Omit<Todo, 'id' | 'createdAt'>) => {
    onSubmit(data);
    reset();
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit(onFormSubmit)}>
        <FormGroup>
          <Label htmlFor="title">Task Title</Label>
          <Input
            id="title"
            {...register('title', { required: true })}
            placeholder="What needs to be done?"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="description">Description</Label>
          <TextArea
            id="description"
            {...register('description')}
            placeholder="Add more details about your task..."
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="priority">Priority</Label>
          <Select id="priority" {...register('priority')}>
            <option value="low">Low Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="high">High Priority</option>
          </Select>
        </FormGroup>
        <Button type="submit">Add Task</Button>
      </Form>
    </FormContainer>
  );
}; 