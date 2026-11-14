function CategoryBar({ categories, selected, onSelect }) {
  return (
    <div className="category-bar">
      <div className="category-bar-inner">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-btn ${selected === cat ? "active" : ""}`}
            onClick={() => onSelect(cat)}
          >
            {cat === "All" ? "All Categories" : cat}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoryBar;
