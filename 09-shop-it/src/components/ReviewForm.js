import React from "react";

function ReviewForm({ onNewReview }) {
  const [open, setOpen] = React.useState(false);
  const ratingRef = React.useRef(null);
  const commentRef = React.useRef(null);
  const userRef = React.useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const rating = ratingRef.current.value;
    const comment = commentRef.current.value;
    const user = userRef.current.value;
    const review = {
      rating: rating,
      comment: comment,
      user: {
        name: user,
      },
    };
    onNewReview(review);
    ratingRef.current.value = "";
    commentRef.current.value = "";
    userRef.current.value = "";
    setOpen(false);
  };

  if (!open) {
    return (
      <button onClick={(e) => setOpen(true)}>
        <i className="fa fa-plus"></i>
      </button>
    );
  } else {
    return (
      <div className="card">
        <div className="card-header">Review Form</div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Ratings</label>
              <select className="form-control" ref={ratingRef}>
                {[1, 2, 3, 4, 5].map((n) => (
                  <option key={n}>{n}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Comment</label>
              <textarea className="form-control" ref={commentRef}></textarea>
            </div>
            <div className="form-group">
              <label>User</label>
              <input type="text" className="form-control" ref={userRef} />
            </div>
            <div className="form-group">
              <br />
              <div className="d-flex">
                <button
                  type="button"
                  onClick={(e) => setOpen(false)}
                  className="btn btn-danger"
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ReviewForm;
