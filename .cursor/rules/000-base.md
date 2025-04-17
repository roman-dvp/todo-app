---
description: Base Rules for React Todo App
globs: "**/*.tsx,**/*.ts,**/*.jsx,**/*.js"
alwaysApply: true
---

# Base Rules for React Todo App

## Project Context
- This is a simple but feature-rich Todo application built with React
- The application uses local storage for data persistence
- No backend or authentication is required
- Follow all documentation in `.planr` and `docs` directories

## Code Standards
- Use TypeScript for all new code
- Follow functional programming paradigms with React hooks
- Keep components small and focused on a single responsibility
- Apply proper TypeScript typing to all variables, functions, and components
- Use named exports for better code navigation
- Follow eslint and prettier configurations

## Project Structure
- Place components in the appropriate directory based on their role:
  - `src/components/common` for reusable UI components
  - `src/components/todos` for todo-specific components
  - `src/components/layout` for layout components
- Keep state management logic in `src/store` directory
- Place utility functions in `src/utils` directory
- Define TypeScript interfaces and types in `src/types` directory
- Create custom hooks in `src/hooks` directory

## Application Requirements
- Tasks must have title, optional description, priority, and optional due date
- Tasks must be filterable by status, priority, and searchable by text
- Application must support both light and dark themes
- All user data must be persisted to localStorage
- User interface must be responsive and work on mobile devices