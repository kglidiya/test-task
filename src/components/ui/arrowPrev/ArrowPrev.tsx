import React from "react";
import styles from "./ArrowPrev.module.css";
interface IArrowPrev {
  onClick: VoidFunction;
  disabled?: boolean;
}
export default function ArrowPrev({ onClick, disabled }: IArrowPrev) {
  return (
    <span
      onClick={onClick}
      className={`${styles.position} ${!disabled ? styles.wrapper : ""}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="173"
        height="23"
        viewBox="0 0 173 23"
        fill="none"
      >
        <rect
          x="1"
          y="10"
          width="172"
          height="2.99998"
          fill={disabled ? "#C9D0E1" : "#7884A5"}
        />
        <path
          d="M12 0V0C12 6.07513 7.07513 11 0.999998 11L-9.69627e-07 11"
          stroke={disabled ? "#C9D0E1" : "#7884A5"}
          strokeWidth="3"
        />
        <path
          d="M12 23V23C12 16.9249 7.07513 12 1 12L6.11999e-07 12"
          stroke={disabled ? "#C9D0E1" : "#7884A5"}
          strokeWidth="3"
        />
      </svg>
    </span>
  );
}
