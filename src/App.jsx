import { useState, useMemo } from "react";
import courses from "./data/courses";
import SearchBar from "./components/SearchBar";
import CategoryBar from "./components/CategoryBar";
import CourseCard from "./components/CourseCard";
import CourseModal from "./components/CourseModal";
import Footer from "./components/Footer";
import "./App.css";

const ALL_CATEGORIES = ["All", ...new Set(courses.map((c) => c.category))];
const LEVELS = ["All", "Beginner", "Intermediate", "Advanced"];
const SORT_OPTIONS = [
  { value: "popular", label: "Most Popular" },
  { value: "rated", label: "Highest Rated" },
  { value: "newest", label: "Newest" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [sortBy, setSortBy] = useState("popular");
  const [selectedCourse, setSelectedCourse] = useState(null);

  const filteredCourses = useMemo(() => {
    let result = courses.filter((course) => {
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

    switch (sortBy) {
      case "rated":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        result.sort((a, b) => b.id - a.id);
        break;
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      default:
        result.sort((a, b) => b.students - a.students);
    }

    return result;
  }, [searchTerm, selectedCategory, selectedLevel, sortBy]);

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-logo">
          Learn<span>Hub</span>
        </div>
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <div className="nav-links">
          <span className="nav-link">Teach on LearnHub</span>
          <span className="nav-link">My Learning</span>
          <button className="nav-cart">&#128722;</button>
          <button className="nav-btn nav-btn-outline">Log in</button>
          <button className="nav-btn nav-btn-primary">Sign up</button>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-text">
            <h1>Learn without limits</h1>
            <p>
              Build skills with courses from expert instructors. Start from ₹349 and unlock your potential today.
            </p>
          </div>
          <div className="hero-illustration">&#127891;</div>
        </div>
      </section>

      {/* Category Bar */}
      <CategoryBar
        categories={ALL_CATEGORIES}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />

      {/* Main Content */}
      <main className="main">
        <div className="section-header">
          <h2>
            {selectedCategory === "All" ? "All Courses" : selectedCategory}
          </h2>
        </div>
        <p className="section-subtitle">
          {selectedCategory === "All"
            ? "Explore our entire library of expert-led courses"
            : `Top courses in ${selectedCategory}`}
        </p>

        {/* Filters */}
        <div className="filters-row">
          {LEVELS.map((level) => (
            <button
              key={level}
              className={`filter-pill ${selectedLevel === level ? "active" : ""}`}
              onClick={() => setSelectedLevel(level)}
            >
              {level === "All" ? "All Levels" : level}
            </button>
          ))}
          <select
            className="filter-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <span className="results-count">
            {filteredCourses.length}{" "}
            {filteredCourses.length === 1 ? "result" : "results"}
          </span>
        </div>

        {/* Grid */}
        {filteredCourses.length === 0 ? (
          <div className="no-results">
            <div className="no-results-icon">&#128533;</div>
            <h3>No courses found</h3>
            <p>Try adjusting your search or filters to find what you're looking for.</p>
          </div>
        ) : (
          <div className="course-grid">
            {filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onSelect={setSelectedCourse}
              />
            ))}
          </div>
        )}
      </main>

      <Footer />

      {/* Modal */}
      <CourseModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
      />
    </div>
  );
}

export default App;
