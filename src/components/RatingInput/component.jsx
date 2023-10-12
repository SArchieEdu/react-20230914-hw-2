import classNames from "classnames";
import styles from "./styles.module.css";
import { useState } from "react";

export const RatingInput = ({ value, onChange, maxRating = 5, className }) => {
  const [hoveredElementIndex, setHoveredElementIndex] = useState();

  return (
    <div className={classNames(styles.root, className)}>
      {new Array(maxRating).fill(null).map((_, index) => (
        <button
          className={classNames(styles.star, {
            [styles.active]: index + 1 <= value,
            [styles.hovered]: index <= hoveredElementIndex,
          })}
          key={index}
          onClick={() => onChange(index + 1)}
          onMouseEnter={() => setHoveredElementIndex(index)}
          onMouseLeave={() => setHoveredElementIndex(null)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};
