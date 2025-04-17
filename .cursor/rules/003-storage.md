---
description: Local Storage Standards for Todo App
globs: "**/utils/storage.ts,**/services/storage.ts"
alwaysApply: true
---

# Local Storage Standards

## Storage Implementation
- Create a storage service abstraction for localStorage operations
- Implement proper error handling for storage operations
- Add versioning to stored data for future migrations
- Use a consistent key naming convention
- Handle storage quota limitations gracefully

## Data Persistence
- Store todos in localStorage using redux-persist
- Persist application preferences (theme, filters, sort)
- Implement throttling or debouncing for frequent updates
- Add data validation when loading from storage
- Provide fallbacks for corrupted or invalid data

## Storage Operations
- Wrap localStorage operations in try-catch blocks
- Handle storage errors gracefully with user feedback
- Implement storage operation retry logic
- Add storage availability detection
- Provide import/export functionality for data backup

## Data Structure
- Store todos in a normalized format for efficiency
- Include metadata with stored data (version, last updated)
- Keep storage format consistent with application state
- Implement proper serialization and deserialization
- Avoid storing sensitive or temporary data

## Security Considerations
- Do not store sensitive information in localStorage
- Validate data integrity when loading from storage
- Sanitize user-generated content before storage
- Implement data migration strategy for schema changes
- Add proper error reporting for storage failures