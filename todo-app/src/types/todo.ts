export type Priority = 'low' | 'medium' | 'high';

export interface Todo {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  priority: Priority;
  dueDate?: string;
  createdAt: string;
}

export interface TodoFilter {
  status: 'all' | 'active' | 'completed';
  priority: 'all' | Priority;
  search: string;
} 