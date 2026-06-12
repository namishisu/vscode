```markdown
# vscode Development Patterns

> Auto-generated skill from repository analysis

## Overview
This skill teaches you the core development patterns and conventions used in the `vscode` TypeScript codebase. You'll learn how to structure files, write imports and exports, follow commit message conventions, and organize tests. These patterns ensure consistency and maintainability across the project.

## Coding Conventions

### File Naming
- Use **camelCase** for file names.
  - Example: `myComponent.ts`, `userSettings.test.ts`

### Imports
- Use **relative imports** for referencing other modules.
  - Example:
    ```typescript
    import { myFunction } from './utils';
    ```

### Exports
- Use **named exports** instead of default exports.
  - Example:
    ```typescript
    // utils.ts
    export function myFunction() { ... }
    ```

### Commit Messages
- Use **conventional commits** with clear prefixes.
- Common prefix: `refactor`
- Keep commit messages concise (average 71 characters).
  - Example:
    ```
    refactor: simplify user authentication logic
    ```

## Workflows

### Refactoring Code
**Trigger:** When you need to improve code structure without changing its behavior  
**Command:** `/refactor`

1. Identify the code section that needs improvement.
2. Make structural changes (e.g., rename variables, extract functions).
3. Ensure all tests pass.
4. Commit your changes with a message like:
   ```
   refactor: [short description of the refactor]
   ```
5. Push your changes for review.

### Adding a New Feature
**Trigger:** When implementing a new functionality  
**Command:** `/add-feature`

1. Create a new file using camelCase naming.
2. Use relative imports to include dependencies.
3. Export new functions or components using named exports.
4. Write corresponding tests in a `*.test.ts` file.
5. Commit with a conventional message (e.g., `feat: add user profile page`).
6. Push your branch for review.

### Writing Tests
**Trigger:** When adding or updating code that requires verification  
**Command:** `/write-test`

1. Create a test file named `yourFeature.test.ts`.
2. Write tests according to the project's (unknown) testing framework.
3. Use relative imports to bring in code under test.
4. Run all tests to ensure correctness.
5. Commit changes with a message like `test: add tests for user settings`.

## Testing Patterns

- Test files follow the pattern: `*.test.*` (e.g., `userSettings.test.ts`)
- The specific test framework is **unknown**, but standard TypeScript testing practices apply.
- Tests are colocated with or near the code they verify.
- Example test file:
  ```typescript
  import { myFunction } from './myFunction';

  describe('myFunction', () => {
    it('should return true for valid input', () => {
      expect(myFunction('valid')).toBe(true);
    });
  });
  ```

## Commands
| Command      | Purpose                                         |
|--------------|-------------------------------------------------|
| /refactor    | Start a refactoring workflow                    |
| /add-feature | Begin implementing a new feature                |
| /write-test  | Add or update tests for existing/new code       |
```
