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
  return n.toString();
}

function CourseCard({ course, onSelect }) {
  const discount = Math.round(
    ((course.originalPrice - course.price) / course.originalPrice) * 100
  );

  return (
    <div className="course-card" onClick={() => onSelect(course)}>
      <img
        className="card-thumbnail"
        src={course.thumbnail}
        alt={course.title}
        loading="lazy"
      />
      <div className="card-body">
        <h3 className="card-title">{course.title}</h3>
        <p className="card-instructor">{course.instructor}</p>
        <div className="card-rating">
          <span className="rating-number">{course.rating}</span>
          <StarRating rating={course.rating} />
          <span className="rating-count">
            ({course.ratings.toLocaleString("en-IN")})
          </span>
        </div>
        <div className="card-meta-row">
          {course.duration} total hours · {course.lectures} lectures · {course.level}
        </div>
        <div className="card-price-row">
          <span className="price-current">₹{course.price}</span>
          <span className="price-original">₹{course.originalPrice}</span>
        </div>
        <div className="card-badges">
          {course.bestseller && (
            <span className="badge badge-bestseller">Bestseller</span>
          )}
          {course.hot && (
            <span className="badge badge-hot">Hot & New</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
