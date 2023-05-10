const Review = ({ value: rev }) => {
  let { rating, comment, user } = rev;
  return (
    <div className="alert alert-danger">
      <div className="d-flex justify-content-between">
        <span>Rating: {rating}</span>
        <span>User: {user.name}</span>
      </div>
      <hr />
      <div>{comment}</div>
    </div>
  );
};

export default Review;
