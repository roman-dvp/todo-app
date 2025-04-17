---
description: React Component Standards for Todo App
globs: "**/*.tsx,**/*.jsx"
alwaysApply: true
---

# React Component Standards

## Component Structure
- Use functional components with hooks instead of class components
- Keep components small and focused on a single responsibility
- Break down complex components into smaller, reusable pieces
- Use proper TypeScript typing for component props and state
- Implement proper prop validation with default values where appropriate
- Extract complex logic to custom hooks

## Component Organization
- Place reusable UI components in `src/components/common`
- Keep todo-specific components in `src/components/todos`
- Put layout components in `src/components/layout`
- Create container components to connect to Redux store
- Separate presentation from logic using container/presentational pattern

## Styling Approach
- Use Styled Components for component styling
- Define theme variables in a central theme file
- Implement responsive design for all components
- Support both light and dark themes
- Use relative units (rem, em) instead of pixels for better accessibility

## Performance Optimization
- Use React.memo for pure components to prevent unnecessary re-renders
- Implement useMemo and useCallback for expensive calculations and callbacks
- Use proper dependency arrays in useEffect hooks
- Implement virtualization for long lists of todos
- Avoid inline function definitions in render
- Implement code splitting for larger components

## Accessibility Standards
- Use semantic HTML elements for better accessibility
- Add proper ARIA attributes where necessary
- Ensure keyboard navigation works properly
- Maintain proper color contrast ratios for text
- Make interactive elements properly sized for touch interaction

## Component Best Practices
- Add proper data-testid attributes for testing
- Implement error boundaries for robust error handling
- Use fragments to avoid unnecessary div wrappers
- Follow a consistent naming convention for components and files
- Add JSDoc comments for complex components or functions