# Mini Project 1 - Task Manager

A responsive React task management application built for the AIM course. It fetches dynamic task data from the public [DummyJSON API](https://dummyjson.com/todos), allowing users to browse tasks, search locally, and view specific task details via dynamic routing.

## Features & Requirements

- **3 Routes**: Includes Home (`/`), Task List (`/tasks`), and Dynamic Task Details (`/tasks/:id`).
- **Data Fetching**: Powered by TanStack Query (`@tanstack/react-query`) with structured query keys (`['todos']` and `['todo', id]`).
- **State Handling**: Comprehensive UI state handling for loading, error, and empty search results.
- **Local State (`useState`)**: Client-side task filtering using a controlled search bar input.
- **Styling**: Styled using Tailwind CSS v3.

## Routes Overview

- `/` — Welcome dashboard and navigation quick links.
- `/tasks` — Displays all tasks with real-time search and status badges.
- `/tasks/:id` — Displays full details for a selected task by ID.

## Tech Stack

- **Framework**: React (Vite)
- **Routing**: React Router v6
- **Server State**: TanStack Query (React Query)
- **Styling**: Tailwind CSS
- **API**: DummyJSON API (`https://dummyjson.com/todos`)

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone <YOUR_GITHUB_REPO_URL>
   cd mini-project-app