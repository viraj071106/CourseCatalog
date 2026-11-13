function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="search-bar">
      <span className="search-icon">&#128269;</span>
      <input
        type="text"
        placeholder="Search courses by title, instructor, or topic..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
