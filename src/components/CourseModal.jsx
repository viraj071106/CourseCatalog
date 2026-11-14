function StarRating({ rating }) {
  const full = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.3;
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < full) {
      stars.push(<span key={i} className="star-icon">&#9733;</span>);
    } else if (i === full && hasHalf) {
      stars.push(<span key={i} className="star-icon half">&#9733;</span>);
    } else {
      stars.push(<span key={i} className="star-icon" style={{ opacity: 0.25 }}>&#9733;</span>);
    }
  }
  return <span className="stars">{stars}</span>;
}

function formatStudents(n) {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(0)}K`;
  return n.toLocaleString("en-IN");
}

function CourseModal({ course, onClose }) {
  if (!course) return null;

  const discount = Math.round(
    ((course.originalPrice - course.price) / course.originalPrice) * 100
  );

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>

        <img
          className="modal-thumbnail"
          src={course.thumbnail}
          alt={course.title}
        />

        <div className="modal-body">
          {/* Badges */}
          <div className="modal-badges">
            {course.bestseller && (
              <span className="badge badge-bestseller">Bestseller</span>
            )}
            {course.hot && (
              <span className="badge badge-hot">Hot & New</span>
            )}
            <span className="badge badge-level">{course.level}</span>
          </div>

          {/* Title & description */}
          <h2 className="modal-title">{course.title}</h2>
          <p className="modal-subtitle">{course.description}</p>

          {/* Ratings row */}
          <div className="modal-rating-row">
            <span className="modal-rating-value">{course.rating}</span>
            <StarRating rating={course.rating} />
            <span className="modal-rating-count">
              ({course.ratings.toLocaleString("en-IN")} ratings)
            </span>
            <span className="modal-students">
              {formatStudents(course.students)} students
            </span>
          </div>

          {/* Info row */}
          <div className="modal-info-row">
            <span className="modal-info-item">
              &#128197; Last updated {course.lastUpdated}
            </span>
            <span className="modal-info-item">
              &#127760; English
            </span>
            <span className="modal-info-item">
              &#9201; {course.duration} · {course.lectures} lectures
            </span>
          </div>

          {/* Instructor */}
          <div className="modal-instructor-row">
            Created by <a href="#">{course.instructor}</a>
          </div>

          {/* Price section */}
          <div className="modal-price-section">
            <span className="modal-price">₹{course.price}</span>
            <span className="modal-original-price">₹{course.originalPrice}</span>
            <span className="modal-discount">{discount}% off</span>
            <div className="modal-cta-group">
              <button className="btn-add-cart">Add to cart</button>
              <button className="btn-buy-now">Buy now</button>
            </div>
          </div>

          {/* What you'll learn */}
          {course.whatYouLearn && (
            <div className="what-learn">
              <h3>What you'll learn</h3>
              <div className="what-learn-grid">
                {course.whatYouLearn.map((item, i) => (
                  <div key={i} className="what-learn-item">
                    <span className="check-icon">&#10003;</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Topics */}
          <div className="modal-section">
            <h3>Topics covered</h3>
            <div className="topics-list">
              {course.topics.map((topic) => (
                <span key={topic} className="topic-chip">
                  {topic}
                </span>
              ))}
            </div>
          </div>

          {/* Stats row */}
          <div className="modal-stats-row">
            <div className="modal-stat">
              <span className="modal-stat-value">{course.duration}</span>
              <span className="modal-stat-label">Total Hours</span>
            </div>
            <div className="modal-stat">
              <span className="modal-stat-value">{course.lectures}</span>
              <span className="modal-stat-label">Lectures</span>
            </div>
            <div className="modal-stat">
              <span className="modal-stat-value">
                {formatStudents(course.students)}
              </span>
              <span className="modal-stat-label">Students</span>
            </div>
            <div className="modal-stat">
              <span className="modal-stat-value">{course.level}</span>
              <span className="modal-stat-label">Level</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseModal;
