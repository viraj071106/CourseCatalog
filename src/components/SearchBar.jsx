function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="nav-search">
      <input
        type="text"
        placeholder="Search for anything"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <button className="nav-search-icon" tabIndex={-1}>
        &#128269;
      </button>
    </div>
  );
}

export default SearchBar;
