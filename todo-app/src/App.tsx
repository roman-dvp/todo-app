import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import styled, { ThemeProvider } from 'styled-components';
import { store, persistor } from './store';
import { TodoForm } from './components/todos/TodoForm';
import { TodoList } from './components/todos/TodoList';
import { TodoFilter } from './components/todos/TodoFilter';
import { ThemeToggle } from './components/layout/ThemeToggle';
import { useAppDispatch, useAppSelector } from './hooks.tsx';
import { addTodo, toggleTodo, deleteTodo, updateTodo } from './store/todoSlice';
import { setFilter } from './store/filterSlice';
import { toggleTheme } from './store/themeSlice';
import { Todo, TodoFilter as FilterType } from './types/todo';
import { lightTheme, darkTheme } from './types/theme';
import { GlobalStyle } from './styles/GlobalStyle';
import { RootState } from './store';

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-xl);
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: var(--spacing-md);
  }
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: var(--spacing-xl);
  position: relative;
`;

const Title = styled.h1`
  color: ${props => props.theme.text};
  font-size: 2.5rem;
  margin-bottom: var(--spacing-md);
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const MainContent = styled.main`
  display: grid;
  grid-template-columns: 350px 1fr;
  gap: var(--spacing-xl);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 350px;
    top: 0;
    bottom: 0;
    width: 1px;
    background-color: ${props => props.theme.border};
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);

    &::after {
      display: none;
    }
  }
`;

const SidePanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
`;

const MainPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
  padding-left: var(--spacing-xl);

  @media (max-width: 1024px) {
    padding-left: 0;
  }
`;

const SectionTitle = styled.h2`
  color: ${props => props.theme.textHighlight};
  font-size: 1.5rem;
  margin-bottom: var(--spacing-md);
  font-weight: 600;
  position: relative;
  display: inline-block;
  padding-bottom: var(--spacing-xs);

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: ${props => props.theme.primary};
    opacity: 0.5;
  }

  &:hover::after {
    opacity: 1;
    transition: opacity ${props => props.theme.transitionDuration} ${props => props.theme.transitionTiming};
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: var(--spacing-xl);
  color: ${props => props.theme.textMuted};
  background-color: ${props => props.theme.cardBackground};
  border-radius: var(--border-radius-md);
  box-shadow: ${props => props.theme.shadow};
`;

const EmptyStateIcon = styled.div`
  font-size: 3rem;
  margin-bottom: var(--spacing-md);
`;

const EmptyStateText = styled.p`
  font-size: 1.1rem;
  margin-bottom: var(--spacing-sm);
`;

const EmptyStateSubtext = styled.p`
  font-size: 0.9rem;
  color: ${props => props.theme.textLight};
`;

function AppContent() {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state: RootState) => state.todos.todos);
  const filter = useAppSelector((state: RootState) => state.filter);
  const themeMode = useAppSelector((state: RootState) => state.theme.mode);

  const handleAddTodo = (todo: Omit<Todo, 'id' | 'createdAt'>) => {
    dispatch(addTodo(todo));
  };

  const handleToggleTodo = (id: string) => {
    dispatch(toggleTodo(id));
  };

  const handleDeleteTodo = (id: string) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      dispatch(deleteTodo(id));
    }
  };

  const handleEditTodo = (todo: Todo) => {
    dispatch(updateTodo(todo));
  };

  const handleFilterChange = (newFilter: FilterType) => {
    dispatch(setFilter(newFilter));
  };

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  const filteredTodos = todos.filter(todo => {
    if (filter.status !== 'all' && 
      (filter.status === 'completed' ? !todo.completed : todo.completed)) {
      return false;
    }

    if (filter.priority !== 'all' && todo.priority !== filter.priority) {
      return false;
    }

    if (filter.search && !todo.title.toLowerCase().includes(filter.search.toLowerCase())) {
      return false;
    }

    return true;
  });

  const currentTheme = themeMode === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle theme={currentTheme} />
      <AppContainer>
        <Header>
          <Title>Todo App</Title>
          <ThemeToggle theme={themeMode} onToggle={handleThemeToggle} />
        </Header>
        <MainContent>
          <SidePanel>
            <SectionTitle>Create Task</SectionTitle>
            <TodoForm onSubmit={handleAddTodo} />
          </SidePanel>
          <MainPanel>
            <SectionTitle>Task List</SectionTitle>
            <TodoFilter filter={filter} onFilterChange={handleFilterChange} />
            {filteredTodos.length > 0 ? (
              <TodoList
                todos={filteredTodos}
                onToggle={handleToggleTodo}
                onDelete={handleDeleteTodo}
                onEdit={handleEditTodo}
              />
            ) : (
              <EmptyState>
                <EmptyStateIcon>📝</EmptyStateIcon>
                <EmptyStateText>No tasks found</EmptyStateText>
                <EmptyStateSubtext>
                  {todos.length === 0
                    ? "Add your first task using the form on the left!"
                    : "Try changing the filters to see more tasks"}
                </EmptyStateSubtext>
              </EmptyState>
            )}
          </MainPanel>
        </MainContent>
      </AppContainer>
    </ThemeProvider>
  );
}

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppContent />
      </PersistGate>
    </Provider>
  );
}

export default App;
