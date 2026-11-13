import { useState, useMemo } from "react";
import courses from "./data/courses";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import CourseCard from "./components/CourseCard";
import CourseModal from "./components/CourseModal";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [selectedCourse, setSelectedCourse] = useState(null);

  const categories = useMemo(
    () => [...new Set(courses.map((c) => c.category))].sort(),
    []
  );

  const levels = ["Beginner", "Intermediate", "Advanced"];

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const term = searchTerm.toLowerCase();
      const matchesSearch =
        term === "" ||
        course.title.toLowerCase().includes(term) ||
        course.instructor.toLowerCase().includes(term) ||
        course.topics.some((t) => t.toLowerCase().includes(term));

      const matchesCategory =
        selectedCategory === "All" || course.category === selectedCategory;

      const matchesLevel =
        selectedLevel === "All" || course.level === selectedLevel;

      return matchesSearch && matchesCategory && matchesLevel;
    });
  }, [searchTerm, selectedCategory, selectedLevel]);

  return (
    <div className="app">
      <header className="header">
        <h1>Course Catalog</h1>
        <p>Browse courses by topic, level, or instructor</p>
      </header>
      <main className="main">
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <Filters
          categories={categories}
          levels={levels}
          selectedCategory={selectedCategory}
          selectedLevel={selectedLevel}
          onCategoryChange={setSelectedCategory}
          onLevelChange={setSelectedLevel}
        />
        <p className="results-count">
          {filteredCourses.length} {filteredCourses.length === 1 ? "course" : "courses"} found
        </p>
        {filteredCourses.length === 0 ? (
          <div className="no-results">
            <p>No courses match your filters. Try adjusting your search or filters.</p>
          </div>
        ) : (
          <div className="course-grid">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} onSelect={setSelectedCourse} />
            ))}
          </div>
        )}
      </main>
      <CourseModal course={selectedCourse} onClose={() => setSelectedCourse(null)} />
    </div>
  );
}

export default App;
