# General Agent Directives

When acting upon this repository, all AI agents must strictly adhere to the following rules:

1. **Commit Protocol**:
   - Always commit your changes immediately after completing a cohesive set of updates. Do not leave the workspace with uncommitted modifications.
   - Use descriptive conventional commit messages (e.g., `feat: ...`, `fix: ...`, `style: ...`, `docs: ...`).

2. **Design & CSS Guidelines**:
   - The project uses Vanilla CSS in `src/assets/main.css` and scoped styles within Vue components.
   - Maintain the premium dark-mode, glassmorphism aesthetics.
   - Ensure elements look perfect in both web view and `@media print` (specifically adjusting margins, text colors to black, and hiding interactive elements with `.no-print`).

3. **Code Quality**:
   - Run `npm run format` (Prettier) before committing to ensure uniform code style.
   - Keep Vue components modular and clean.
