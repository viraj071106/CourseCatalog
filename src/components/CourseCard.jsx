function CourseCard({ course, onSelect }) {
  const levelClass = `level-badge level-${course.level.toLowerCase()}`;

  return (
    <div className="course-card" onClick={() => onSelect(course)}>
      <div className="card-header">
        <span className="category-tag">{course.category}</span>
        <span className={levelClass}>{course.level}</span>
      </div>
      <h3 className="card-title">{course.title}</h3>
      <p className="card-instructor">by {course.instructor}</p>
      <p className="card-description">{course.description}</p>
      <div className="card-meta">
        <span className="meta-item">
          <span className="star">&#9733;</span> {course.rating}
        </span>
        <span className="meta-item">{course.students.toLocaleString()} students</span>
        <span className="meta-item">{course.duration}</span>
      </div>
      <div className="card-footer">
        <span className="price">${course.price}</span>
        <button className="details-btn" onClick={(e) => { e.stopPropagation(); onSelect(course); }}>
          View Details
        </button>
      </div>
    </div>
  );
}

export default CourseCard;
