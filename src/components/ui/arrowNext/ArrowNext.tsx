import React from "react";
import styles from "./ArrowNext.module.css";
interface IArrowNext {
  onClick: VoidFunction;
  disabled: boolean;
}
export default function ArrowNext({ onClick, disabled }: IArrowNext) {
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
          width="172"
          height="2.99998"
          transform="matrix(-1 8.74228e-08 8.74228e-08 1 172 10)"
          fill={disabled ? "#C9D0E1" : "#7884A5"}
        />
        <path
          d="M161 0V0C161 6.07513 165.925 11 172 11L173 11"
          stroke={disabled ? "#C9D0E1" : "#7884A5"}
          strokeWidth="3"
        />
        <path
          d="M161 23V23C161 16.9249 165.925 12 172 12L173 12"
          stroke={disabled ? "#C9D0E1" : "#7884A5"}
          strokeWidth="3"
        />
      </svg>
    </span>
  );
}