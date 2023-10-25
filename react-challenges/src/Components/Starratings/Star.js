import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./Star.css";

function Star() {
  const [rating, setRating] = useState(null);
  return (
    <div className="main">
      {[...Array(5)].map((star, idx) => {
        const currentRate = idx + 1;
        return (
          <>
            <label>
              <input
                type="radio"
                name="rate"
                value={currentRate}
                onClick={() => setRating(currentRate)}
              />
              <FaStar
                size={50}
                color={currentRate <= rating ? "yellow" : "grey"}
              />
            </label>
          </>
        );
      })}
    </div>
  );
}

export default Star;
