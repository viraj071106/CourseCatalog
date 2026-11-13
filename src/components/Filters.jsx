function Filters({ categories, levels, selectedCategory, selectedLevel, onCategoryChange, onLevelChange }) {
  return (
    <div className="filters">
      <div className="filter-group">
        <label htmlFor="category-filter">Category</label>
        <select
          id="category-filter"
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
        >
          <option value="All">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
      <div className="filter-group">
        <label htmlFor="level-filter">Level</label>
        <select
          id="level-filter"
          value={selectedLevel}
          onChange={(e) => onLevelChange(e.target.value)}
        >
          <option value="All">All Levels</option>
          {levels.map((lvl) => (
            <option key={lvl} value={lvl}>{lvl}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Filters;
