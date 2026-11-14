# Course Catalog

A simple, responsive course catalog web application built with **React** and **Vite**. Browse, search, and filter courses across multiple categories and difficulty levels.

## Features

- **Search** — Find courses by title, instructor name, or topic
- **Filter by Category** — Narrow results to Web Development, Data Science, Programming, etc.
- **Filter by Level** — Choose between Beginner, Intermediate, and Advanced
- **Course Cards** — Each course shows its title, instructor, description, rating, student count, duration, and price
- **Detail Modal** — Click any course to see full details including all topics covered
- **Responsive Design** — Works on desktop, tablet, and mobile screens
- **Dark Mode** — Automatically adapts to your system's light/dark preference

## Tech Stack

| Tool   | Purpose                    |
| ------ | -------------------------- |
| Vite   | Build tool and dev server  |
| React  | UI library                 |
| CSS    | Styling (no extra library) |

## Project Structure

```
src/
├── components/
│   ├── CourseCard.jsx    # Individual course card
│   ├── CourseModal.jsx   # Detail popup when a course is clicked
│   ├── Filters.jsx       # Category and level dropdown filters
│   └── SearchBar.jsx     # Text search input
├── data/
│   └── courses.js        # Array of 12 sample courses
├── App.jsx               # Main app component (state + layout)
├── App.css               # App-specific styles
├── index.css             # Global styles and CSS variables
└── main.jsx              # React entry point
```

## Getting Started

### Prerequisites

- **Node.js** 18 or newer
- **npm** (comes with Node.js)

### Install and Run

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev
```

Open the URL shown in your terminal (usually `http://localhost:5173`).

### Build for Production

```bash
npm run build
```

The output goes to the `dist/` folder, ready to deploy to any static host.

## How It Works

1. **Course data** lives in `src/data/courses.js` — a plain JavaScript array. You can add, remove, or edit courses there.
2. **App.jsx** holds three pieces of state: the search term, the selected category, and the selected level. It filters the course array using `useMemo` so the list updates instantly as you type or change a filter.
3. **CourseCard** renders a summary of each course. Clicking it sets `selectedCourse` in App state.
4. **CourseModal** reads that selected course and shows a full-detail overlay. Clicking outside or pressing the close button clears the selection.
5. **Styles** use CSS custom properties (`:root` variables) so dark mode works automatically via `prefers-color-scheme`.

## Adding a New Course

Open `src/data/courses.js` and add an object to the array:

```js
{
  id: 13,
  title: "Your Course Title",
  instructor: "Instructor Name",
  category: "Category Name",
  level: "Beginner",       // Beginner | Intermediate | Advanced
  duration: "8 weeks",
  rating: 4.5,
  students: 100,
  price: 49.99,
  description: "A short description of the course.",
  topics: ["Topic 1", "Topic 2", "Topic 3"],
}
```

If the category is new, it will automatically appear in the category filter dropdown.

## License

This project is provided as-is for educational purposes.
