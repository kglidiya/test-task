import React from "react";
import styles from "./ArrowPrev.module.css";
interface IArrowPrev {
  onClick: VoidFunction;
  disabled?: boolean;
}
export default function ArrowPrevMob({ onClick, disabled }: IArrowPrev) {
  return (
    <span
      onClick={onClick}
      className={`${styles.position} ${!disabled ? styles.wrapper : ""}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <rect
          y="10.4348"
          width="24"
          height="3.13043"
          fill={disabled ? "#C9D0E1" : "#7884A5"}
        />
        <path
          d="M12 3.05176e-05V3.05176e-05C12 6.07516 7.07513 11 0.999996 11L-6.19952e-07 11"
          stroke={disabled ? "#C9D0E1" : "#7884A5"}
          strokeWidth="3"
        />
        <path
          d="M12 24V24C12 17.9249 7.07513 13 1 13L-4.41349e-07 13"
          stroke={disabled ? "#C9D0E1" : "#7884A5"}
          strokeWidth="3"
        />
      </svg>
    </span>
  );
}