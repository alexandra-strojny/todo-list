# To-Do List App

A simple, accessible to-do list application built with **React** and **TypeScript**, **Next**, and **Tailwind CSS**.
Deployed on **Vercel**  
You can add, complete, edit, and delete tasks. Your tasks are saved in your browser's local storage.

## Features

- ✏️ **Add Tasks:** Enter a task and add it to your list.
- ✅ **Complete Tasks:** Mark tasks as completed with a checkbox.
- 📝 **Edit Tasks:** Click the edit button to modify a task.
- 🗑️ **Delete Tasks:** Remove tasks from your list.
- 🔢 **Task Count:** See how many tasks you have.
- 💾 **Storage:** Tasks are saved in local storage.

## Deployment 

Demo can be found here: https://todo-list-steel-five-35.vercel.app

## Getting Started Locally

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/)

### Installation and Running the App

  ```sh
  npm install
  ```

  ```sh
  npm run dev
  ```

## Project Structure

- `src/app/List.tsx` — Main to-do list component
- `src/app/ListItem.tsx` — Individual to-do item component
- `src/app/util.ts` — Local storage utility functions

## Accessibility

- All interactive elements are keyboard accessible.
- Inputs and buttons have descriptive `aria-label`s.
- Sufficient color contrast for readability.

## License

MIT

---
