
import React from "react";

const StarRating = (props) => {
  const rating =props.rating;
  console.log("rating in StarRating", rating); // Log the rating

  const starArray = [];
  const fullStar = Math.floor(rating);
  console.log("fullStar", fullStar); // Log the fullStar value
  

  for (let i = 1; i <= fullStar; i++) {
    starArray.push(1);
  }

  if (rating < 5) {
    const partialStar = (rating - fullStar).toFixed(1); // Use toFixed(1) to round to the nearest tenth
    console.log("partialStar", partialStar); // Log the partialStar value

    starArray.push(Number(partialStar))
    // const partialStar = rating - fullStar
    // starArray.push(partialStar);

    const emptyStar = 5 - starArray.length;
    for (let i = 1; i <= emptyStar; i++) {
      starArray.push(0);
    }
  }

  const uniqueId = `myGradient${Math.random().toString(36).substr(2, 9)}`;


  const stars = starArray.map((val, i) => {
    const gradientId = `myGradient${uniqueId}-${i}`;
    const offset = val * 100 + "%";
    console.log("key = "+ i + " value = "+ val);
    console.log("gradientid = "+ gradientId);

    return (
      <div key={i}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 40 40">
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset={offset} stopColor="#ff643d" />
              <stop offset="0%" stopColor="#666666" />
            </linearGradient>
          </defs>
          <path
            width=""
            height=""
            d="M19 0l-5.87 11.52L0 13.37l9.5 8.97L7.26 35 19 29.02 30.75 35l-2.24-12.66 9.5-8.97-13.13-1.85z"
            fill={`url(#${gradientId})`}
          />
        </svg>
      </div>
    );
  });

  return <div className="stars">{stars}</div>;
};

export default StarRating;
