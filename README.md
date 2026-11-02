# Challenge 1.9: Vibe Coding vs AI Pair Programming

## Project Overview

This challenge explores two AI-assisted software development approaches by building the same Task Manager application using different development workflows.

The application was implemented in two versions:

1. **Vibe Coding:** Developed using Lovable by providing natural-language prompts.
2. **AI Pair Programming:** Developed using React, Vite, and GitHub Copilot in Visual Studio Code through an iterative coding process.

The objective is to compare both approaches based on development speed, control, code quality, explainability, and editability while implementing the same application requirements.

---

## Live Applications

| Version | Development Tool | Deployment Platform | Live Application |
|---|---|---|---|
| Vibe Version | Lovable | Lovable | [View Application](https://preview--buildtaskmangerforpet.lovable.app/?__lovable_receipt=mat_7b2tzynh678py8fpw641n2qfp5) |
| Pair Version | VS Code + GitHub Copilot | Vercel | [View Application](https://project-engineering-pair-version.vercel.app/) |

---

## Application Requirements

Both versions implement the same Task Manager functionality.

### Features

- **Add Tasks:** Users can enter a task title and add it using the Add button.
- **Keyboard Support:** Pressing Enter also adds a new task.
- **Complete Tasks:** Users can mark tasks as completed or active.
- **Visual Status:** Completed tasks are visually distinguished from active tasks.
- **Task Filtering:** Tasks can be filtered using All, Active, and Completed options.
- **Remaining Task Count:** The application dynamically displays the number of incomplete tasks.

### Scope

The application intentionally focuses on the specified requirements.

- No authentication or user accounts.
- No backend or database integration.
- No task editing or deletion.
- No persistent storage.
- Tasks reset when the application is refreshed.

---

## Version 1: Vibe Coding

**Tool:** Lovable

The Vibe Version was created using Lovable with natural-language prompts describing the required functionality and user interface.

### Development Workflow

1. Prepared a prompt describing the Task Manager requirements.
2. Provided the prompt to Lovable.
3. Generated the application using AI.
4. Reviewed the generated application and its functionality.
5. Tested the required features.
6. Deployed the application using Lovable.

### Observations

- Natural-language prompts made it possible to generate the initial application quickly.
- The development process required less direct coding.
- The generated application still needed functional verification.
- Changes could be requested through additional prompts.

---

## Version 2: AI Pair Programming

**Tools:** Visual Studio Code, GitHub Copilot, React, Vite, JavaScript, CSS

The Pair Version was developed incrementally using GitHub Copilot as an AI coding assistant.

### Development Workflow

1. Created a React application using Vite.
2. Established the main application component and structure.
3. Implemented state management using React's `useState` hook.
4. Developed task creation functionality.
5. Implemented task completion and status updates.
6. Added All, Active, and Completed filters.
7. Implemented the dynamic remaining-task count.
8. Reviewed and refined the code with GitHub Copilot.
9. Tested the application locally.
10. Deployed the application using Vercel.

### Observations

- Developing incrementally provided greater visibility into the implementation.
- React state management helped organize task-related functionality.
- GitHub Copilot assisted with code generation, suggestions, and refinements.
- Direct code access made it easier to modify and debug individual components.
- Testing remained necessary to validate the generated code.

---

## Comparative Analysis

The following table summarizes the practical differences observed during development.

| Criteria | Vibe Coding – Lovable | AI Pair Programming – Copilot |
|---|---|---|
| Speed | Faster initial application generation through a main prompt. | Required multiple development and refinement steps. |
| Control | Changes were primarily guided through natural-language prompts. | Direct control over the application code. |
| Code Quality | Generated code required review and testing. | Code could be reviewed and refined incrementally. |
| Explainability | Required inspecting generated code to understand its implementation. | Individual implementation steps were easier to follow. |
| Editability | Changes could be requested through additional prompts. | Direct modifications could be made in the code editor. |

### Key Findings

**1. Speed**

Vibe Coding was effective for generating the initial application quickly. AI Pair Programming involved a more gradual development process because the application was built and refined in multiple steps.

**2. Control**

AI Pair Programming provided greater direct control over the source code, application logic, and individual components.

**3. Code Quality**

Both approaches required code review and functional testing. AI-generated code should not be assumed to be correct without validation.

**4. Explainability**

The incremental development process in Pair Programming made it easier to understand how state management, event handling, and filtering were implemented.

**5. Editability**

Direct code editing in VS Code allowed precise modifications, whereas Lovable supported changes primarily through natural-language instructions.

---

## Testing and Validation

Both deployed applications were tested against the specified functional requirements.

| Test Case | Vibe Version | Pair Version |
|---|---|---|
| Add task using the Add button | Passed | Passed |
| Add task using Enter key | Passed | Passed |
| Mark a task as completed | Passed | Passed |
| Display completed task differently | Passed | Passed |
| Filter all tasks | Passed | Passed |
| Filter active tasks | Passed | Passed |
| Filter completed tasks | Passed | Passed |
| Update remaining-task count | Passed | Passed |

**Result:** Both implementations successfully demonstrated all required application features.

---

## Technology Stack

| Technology / Tool | Purpose |
|---|---|
| Lovable | AI-powered application generation |
| React | Frontend development |
| Vite | Development server and build tooling |
| JavaScript | Application logic |
| CSS | User interface styling |
| GitHub Copilot | AI Pair Programming |
| Visual Studio Code | Code editor |
| Git | Version control |
| GitHub | Source code hosting |
| Vercel | Pair Version deployment |

---

## Repository Structure

```text
challenge 1.9/
│
├── vibe-version/
│   └── Lovable-generated application
│
├── pair-version/
│   └── React + Vite application
│
├── app-spec.md
│
└── README.md
```

---

## Conclusion

This challenge provided practical experience with two different AI-assisted software development approaches.

Vibe Coding demonstrated how natural-language prompts can accelerate the creation of a working application with minimal direct coding. It is particularly useful for rapid prototyping and quickly translating requirements into an initial implementation.

AI Pair Programming demonstrated the advantages of working incrementally with an AI coding assistant. It provided greater visibility into the source code, more direct control over implementation, and opportunities to understand and refine individual components.

Both approaches successfully produced functional Task Manager applications that satisfied the specified requirements.

The overall learning is that AI tools can improve developer productivity, but understanding the generated code, validating functionality, and making informed technical decisions remain essential responsibilities of the developer.