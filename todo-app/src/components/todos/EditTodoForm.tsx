import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Todo } from '../../types/todo';

interface EditTodoFormProps {
  todo: Todo;
  onSubmit: (todo: Todo) => void;
  onCancel: () => void;
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  padding: var(--spacing-lg);
  background: ${props => props.theme.cardGradient};
  border-radius: var(--border-radius-md);
  box-shadow: ${props => props.theme.shadow};
  border: 1px solid ${props => props.theme.borderLight};
  transition: all ${props => props.theme.transitionDuration} ${props => props.theme.transitionTiming};

  &:focus-within {
    box-shadow: ${props => props.theme.shadowHover};
    border-color: ${props => props.theme.borderActive};
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

const ButtonGroup = styled.div`
  display: flex;
  gap: var(--spacing-md);
  justify-content: flex-end;
  margin-top: var(--spacing-md);
`;

const Button = styled.button<{ variant?: 'danger' | 'primary' }>`
  padding: var(--spacing-sm) var(--spacing-md);
  background-color: ${props => props.variant === 'danger' ? props.theme.error : props.theme.primary};
  color: ${props => props.theme.buttonText};
  border: none;
  border-radius: var(--border-radius-sm);
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
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
    content: ${props => props.variant === 'danger' ? '"❌"' : '"💾"'};
    font-size: 1rem;
  }
`;

export const EditTodoForm: React.FC<EditTodoFormProps> = ({ todo, onSubmit, onCancel }) => {
  const { register, handleSubmit } = useForm<Todo>({
    defaultValues: {
      ...todo
    },
  });

  const onFormSubmit = (data: Todo) => {
    onSubmit({
      ...data,
      id: todo.id,
      createdAt: todo.createdAt
    });
  };

  return (
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
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </Select>
      </FormGroup>
      <ButtonGroup>
        <Button type="button" variant="danger" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">
          Save Changes
        </Button>
      </ButtonGroup>
    </Form>
  );
}; 