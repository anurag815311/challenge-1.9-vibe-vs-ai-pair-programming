# Challenge 1.9: Vibe Coding vs AI Pair Programming

## Project Overview

This challenge explores two AI-assisted software development approaches by building the same Task Manager application using different development workflows.

The application was implemented in two versions:

1. **Vibe Coding:** Developed using Lovable through natural-language prompts.
2. **AI Pair Programming:** Developed using React, Vite, and GitHub Copilot in Visual Studio Code through an iterative coding process.

The objective is to compare both approaches based on five dimensions: Speed, Control, Code Quality, Explainability, and Editability.

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
- **Remaining Task Count:** The application displays the number of incomplete tasks.

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

The Vibe Version was created using Lovable by providing natural-language prompts describing the required functionality and user interface.

### Development Workflow

1. Prepared a prompt describing the Task Manager requirements.
2. Provided the prompt to Lovable.
3. Generated the application using AI.
4. Reviewed the generated application and its functionality.
5. Tested the required features.
6. Deployed the application using Lovable.

### Observations

- Natural-language prompts allowed the initial application to be generated without manually creating each component.
- The initial development process required less direct coding.
- The generated application provided a starting implementation of the requested functionality.
- Functional verification was still necessary after generation.
- Further modifications could be requested using additional natural-language prompts.

### Key Observation

Lovable was useful for translating a written application specification into an initial working interface. However, understanding and verifying the generated implementation still required reviewing the resulting application and code.

---

## Version 2: AI Pair Programming

**Tools:** Visual Studio Code, GitHub Copilot, React, Vite, JavaScript, CSS

The Pair Version was developed incrementally using GitHub Copilot as an AI coding assistant.

### Development Workflow

1. Created a React application using Vite.
2. Established the main application component and project structure.
3. Implemented state management using React's `useState` hook.
4. Developed task creation functionality.
5. Implemented task completion and status updates.
6. Added All, Active, and Completed filters.
7. Implemented the remaining-task count.
8. Reviewed and refined the code with GitHub Copilot.
9. Tested the application locally.
10. Deployed the application using Vercel.

### Observations

- Building the application incrementally provided visibility into individual implementation steps.
- React state management helped organize task-related functionality.
- GitHub Copilot assisted with code suggestions and implementation refinements.
- Direct access to the source code made it possible to inspect and modify individual components.
- Testing was necessary to identify and validate implementation issues.

### Key Observation

The pair-programming workflow provided more direct involvement in implementation decisions. Instead of relying primarily on a generated application, the developer worked with individual React components, application state, and event-handling logic.

---

## Comparative Analysis

The following comparison evaluates the two approaches based on the five dimensions specified in the challenge.

| Dimension | Vibe Version (Lovable) | Pair Version (VS Code + GitHub Copilot) | Verdict |
|---|---|---|---|
| **Speed** | A natural-language prompt generated the initial application and its interface without manually creating each component. | Required setting up React with Vite and implementing task creation, completion, filtering, and state management incrementally. | **Vibe Coding** was more convenient for generating the initial application. |
| **Control** | Application generation and modifications were primarily guided through natural-language prompts. | Direct access to React components, state variables, event handlers, and CSS allowed precise implementation changes. | **AI Pair Programming** offered greater direct control over implementation. |
| **Code Quality** | Generated code required inspection and functional testing before it could be considered reliable. | Individual implementation steps could be reviewed and refined during development, although testing was still necessary. | **AI Pair Programming** offered better visibility into code-level decisions. |
| **Explainability** | Understanding the implementation required inspecting the generated code after the application was created. | The developer could follow how `useState`, event handlers, and filtering logic were introduced into the application. | **AI Pair Programming** made the implementation process easier to follow. |
| **Editability** | Modifications could be requested through additional prompts, with the generated result requiring verification. | Individual components, functions, state updates, and styles could be edited directly in VS Code. | **AI Pair Programming** provided more precise editing flexibility. |

### Key Findings

**1. Speed**

Vibe Coding reduced the amount of initial manual implementation because Lovable generated the application from a natural-language specification. Pair Programming required more incremental development steps, including setting up the React project and implementing its functionality.

**2. Control**

Pair Programming provided greater control because the application logic and interface were directly accessible in the code editor. In the Vibe Version, the development process relied more heavily on prompts and generated changes.

**3. Code Quality**

Neither approach guarantees correct or production-ready code. Both implementations required functional testing and code review. Pair Programming made it easier to inspect individual implementation decisions during development.

**4. Explainability**

The Pair Version made it easier to understand the relationship between React state, user interactions, and filtered task lists because these elements were implemented incrementally.

**5. Editability**

Direct source-code access made the Pair Version more flexible for precise modifications. Lovable provided a more prompt-driven approach to changing the generated application.

---

## When Should Each Approach Be Used?

### Vibe Coding: Rapid Prototyping

Vibe Coding is suitable when:

- A developer wants to quickly convert an idea into a working prototype.
- The application has a relatively straightforward feature set.
- Initial UI generation is more important than detailed control over implementation.
- The goal is to explore an idea before investing in detailed development.

**Reason based on this challenge:** Lovable generated the initial Task Manager application from a natural-language description, reducing the need to manually create the initial interface and components.

### AI Pair Programming: Controlled Development

AI Pair Programming is suitable when:

- A developer needs direct control over application logic.
- The project requires incremental implementation and debugging.
- Understanding the source code is important.
- The developer wants to modify individual components and functions precisely.

**Reason based on this challenge:** React and GitHub Copilot allowed the Task Manager to be developed through individual implementation steps, including state management, task creation, completion, and filtering.

---

## Testing and Validation

Both applications were evaluated against the same functional requirements.

| Test Case | Expected Behaviour | Vibe Version | Pair Version |
|---|---|---|---|
| Add task using the Add button | A new task should appear. | Tested | Tested |
| Add task using Enter key | A new task should appear. | Tested | Tested |
| Mark a task as completed | Task status should change. | Tested | Tested |
| Display completed tasks differently | Completed tasks should have a distinct visual appearance. | Tested | Tested |
| Filter all tasks | All tasks should be displayed. | Tested | Tested |
| Filter active tasks | Only incomplete tasks should be displayed. | Tested | Tested |
| Filter completed tasks | Only completed tasks should be displayed. | Tested | Tested |
| Update remaining-task count | Count should decrease when a task is completed and increase when reactivated. | Verify before submission | Verify before submission |

**Important implementation detail:** The remaining-task count should represent incomplete tasks, not the total number of tasks. In the Pair Version, the correct calculation is:

```javascript
tasks.filter(task => !task.completed).length
```

The deployed application should be checked against this behaviour before claiming that all test cases have passed.

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
challenge-1.9-vibe-vs-ai-pair-programming/
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

Vibe Coding demonstrated how natural-language prompts can accelerate the creation of an initial application with minimal direct coding. It is particularly useful for rapid prototyping and translating requirements into an initial implementation.

AI Pair Programming demonstrated the advantages of working incrementally with an AI coding assistant. It provided greater visibility into the source code, more direct control over implementation, and opportunities to understand and refine individual components.

The key difference observed was the level of developer involvement. Vibe Coding focused on generating an application from a high-level description, whereas AI Pair Programming involved the developer more directly in implementing and refining the underlying code.

**Overall Learning:** AI tools can improve developer productivity, but understanding generated code, validating functionality, and making informed technical decisions remain essential responsibilities of the developer.
