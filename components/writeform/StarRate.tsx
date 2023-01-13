import { useState, useMemo } from "react";
import { FaStar } from "react-icons/fa";

interface StarRatePropsState {
  count: number;
  rating: number;
  color: { filled: string; unfilled: string };
  onRating: (idx: number) => void;
}

const StarRate = ({ count, rating, color, onRating }: StarRatePropsState) => {
  const [hoverRating, setHoverRating] = useState(0);

  const getColor = (index: number) => {
    if (hoverRating >= index) {
      return color.filled;
    } else if (!hoverRating && rating >= index) {
      return color.filled;
    }

    return color.unfilled;
  };

  const starRating = useMemo(() => {
    return Array(count)
      .fill(0)
      .map((_, i) => i + 1)
      .map((idx) => (
        <FaStar
          key={idx}
          className="text-xl cursor-pointer"
          onClick={() => onRating(idx)}
          style={{ color: getColor(idx) }}
          onMouseEnter={() => setHoverRating(idx)}
          onMouseLeave={() => setHoverRating(0)}
        />
      ));
  }, [count, rating, hoverRating]);

  return <div className="flex">{starRating}</div>;
};

export default StarRate;
