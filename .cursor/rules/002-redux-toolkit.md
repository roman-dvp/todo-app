---
description: Redux Toolkit Standards for Todo App
globs: "**/store/**/*.ts,**/store/**/*.js"
alwaysApply: true
---

# Redux Toolkit Standards

## State Management Structure
- Use Redux Toolkit for all state management
- Organize state into slices based on features (todos, filters, theme)
- Implement proper TypeScript typing for state and actions
- Use createSlice for defining reducers and actions
- Implement selectors for accessing state
- Use thunks for async operations when needed

## Redux Best Practices
- Keep state serializable (avoid non-serializable values like functions or classes)
- Normalize complex state structures using createEntityAdapter
- Use proper error handling in async thunks
- Implement optimistic updates for better UX
- Add meaningful action types with proper naming

## State Persistence
- Use redux-persist for localStorage persistence
- Implement proper versioning for persisted state
- Add migration logic for schema changes
- Blacklist sensitive or temporary state from persistence
- Handle storage failures gracefully

## Performance Considerations
- Use memoized selectors with createSelector for derived data
- Avoid unnecessary state updates that trigger re-renders
- Keep state updates granular to minimize re-renders
- Implement proper state structure to avoid deep nesting
- Use batch updates for multiple simultaneous state changes

## Todo State Structure
- Store todos in a normalized structure using createEntityAdapter
- Include proper metadata (id, title, description, priority, dueDate, completed, createdAt, updatedAt)
- Implement proper actions for CRUD operations
- Add selectors for filtered and sorted todos
- Include error and loading states for async operations

## Filter State Structure
- Store filter criteria (status, priority, search, sort)
- Implement actions for changing filters
- Add selectors that combine filters with todos
- Persist filter preferences between sessions
- Allow clearing all filters with a single action