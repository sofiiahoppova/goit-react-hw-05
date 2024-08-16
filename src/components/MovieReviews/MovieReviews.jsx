import { useParams } from "react-router-dom";
import { fetchReviews } from "../../fetchAPi";
import { useEffect, useState } from "react";

import css from "./MovieReviews.module.css";

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const data = await fetchReviews(movieId);
        setReviews(data.results);
      } catch (error) {}
    };
    getReviews();
  }, []);

  return (
    <div>
      <h3 className={css.title}>Movie Reviews</h3>
      <ul className={css.list}>
        {(reviews !== null && reviews.length) === 0 && (
          <p>This movie don't have any reviews</p>
        )}
        {reviews !== null &&
          reviews.map((review) => {
            return (
              <li key={review.id}>
                <h4 className={css.descr}>User: {review.author}</h4>
                <p>{review.content}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Reviews;
