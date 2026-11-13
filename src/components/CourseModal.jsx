function CourseModal({ course, onClose }) {
  if (!course) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <div className="modal-header">
          <span className="category-tag">{course.category}</span>
          <span className={`level-badge level-${course.level.toLowerCase()}`}>{course.level}</span>
        </div>
        <h2 className="modal-title">{course.title}</h2>
        <p className="modal-instructor">Taught by <strong>{course.instructor}</strong></p>
        <div className="modal-stats">
          <div className="stat">
            <span className="stat-value"><span className="star">&#9733;</span> {course.rating}</span>
            <span className="stat-label">Rating</span>
          </div>
          <div className="stat">
            <span className="stat-value">{course.students.toLocaleString()}</span>
            <span className="stat-label">Students</span>
          </div>
          <div className="stat">
            <span className="stat-value">{course.duration}</span>
            <span className="stat-label">Duration</span>
          </div>
          <div className="stat">
            <span className="stat-value">${course.price}</span>
            <span className="stat-label">Price</span>
          </div>
        </div>
        <div className="modal-section">
          <h3>About This Course</h3>
          <p>{course.description}</p>
        </div>
        <div className="modal-section">
          <h3>Topics Covered</h3>
          <div className="topics-list">
            {course.topics.map((topic) => (
              <span key={topic} className="topic-chip">{topic}</span>
            ))}
          </div>
        </div>
        <button className="enroll-btn">Enroll Now - ${course.price}</button>
      </div>
    </div>
  );
}

export default CourseModal;
