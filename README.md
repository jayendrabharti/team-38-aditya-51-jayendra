# Team 38-51: MERN Stack Evaluation

A collaborative project by Jayendra Bharti (51) and Aditya Sharma (38) exploring the MERN stack with Next.js, React, and modern web technologies.

## Features

### 🏠 Home
The main landing page showcasing the team information and project overview.

### 🔢 Counter
A simple counter application with increment, decrement, and reset functionality.
- Click "Increase" to increment the counter
- Click "Decrease" to decrement the counter
- Click "Reset" to set the counter back to 0
- Real-time UI updates with a beautiful gradient display

### ✅ Todo List
A fully functional todo list application with persistent storage.
- Add new tasks using the input field (or press Enter)
- Mark tasks as complete by checking the checkbox
- Delete tasks with the Delete button
- All tasks are automatically synced to browser's localStorage
- View progress with completion statistics

## Tech Stack

- **Frontend**: React 19.2.4 with Next.js 16.2.2
- **Styling**: Tailwind CSS 4 with PostCSS
- **Language**: TypeScript 5
- **Development**: Node.js & npm

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Production

```bash
# Build the project
npm run build

# Start the production server
npm start
```

## Project Structure

```
.
├── app/
│   ├── page.tsx           # Home page
│   ├── counter/           # Counter page
│   │   └── page.tsx
│   ├── todo/              # Todo list page
│   │   └── page.tsx
│   ├── layout.tsx         # Root layout with navbar and footer
│   └── globals.css        # Global styles
├── components/
│   ├── Navbar.tsx         # Navigation component
│   └── Button.tsx         # Button component
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## Team Members

- **Jayendra Bharti** - Roll No. 51
- **Aditya Sharma** - Roll No. 38

## License

This project is part of the MERN Stack evaluation.
