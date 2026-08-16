# Task Manager App

A Full-Stack task management application featuring an animated task carousel

## Setup instructions

### Backend Setup

1. `cd backend`
2. `npm install`
3. `npm start` (runs on port 4000)

### Frontend Setup

1. `cd frontend`
2. `npm install` 3.`npm run dev`

## API

- GET `/api/tasks` - Retrieve all tasks
- POST `/api/tasks` - Create a new task
- PUT `/api/tasks/:id` - Update an existing task
- DELETE `/api/tasks/:id` - Delete a task
- PATCH `/api/tasks/:id/toggle` - Toggle task completion status

## Design

- Storage: In-memory array
- Carousel: custom React/CSS implementation.
- Styling: Vanilla CSS, as requested.

## Time Spent

- Backend API: ~45 minutes
- Frontend: ~90 minutes
- Carousel logic: ~60 minutes
- styling and debugging: ~40 minutes

<img width="1024" height="669" alt="App" src="https://github.com/user-attachments/assets/7881e250-c7f4-4cc5-9888-e5e143931b10" />
