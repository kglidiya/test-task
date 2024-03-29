import React from "react";
import styles from "./ArrowNext.module.css";
interface IArrowNext {
  onClick: VoidFunction;
  disabled: boolean;
}
export default function ArrowNextMob({ onClick, disabled }: IArrowNext) {
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
          width="24"
          height="3.13043"
          transform="matrix(-1 8.74228e-08 8.74228e-08 1 24 10.4348)"
          fill={disabled ? "#C9D0E1" : "#7884A5"}
        />
        <path
          d="M12 3.05176e-05V3.05176e-05C12 6.3393 17.139 11.4783 23.4783 11.4783L24 11.4783"
          stroke={disabled ? "#C9D0E1" : "#7884A5"}
          strokeWidth="3"
        />
        <path
          d="M12 24V24C12 17.6608 17.139 12.5218 23.4783 12.5218L24 12.5218"
          stroke={disabled ? "#C9D0E1" : "#7884A5"}
          strokeWidth="3"
        />
      </svg>
    </span>
  );
}
