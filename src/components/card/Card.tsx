/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./Card.module.css";
import { ISlide } from "@/utils/types";

interface ICard {
  item: ISlide;
  slideWidth: number;
  border: string;
}

export default function Card({ item, slideWidth, border }: ICard) {
  return (
    <article className={styles.wrapper}>
      <img
        key={item.id}
        src={item.img}
        alt={item.title}
        className={styles.image}
        style={{
          width:
            item.description.length > 35
              ? `${slideWidth * 2}px`
              : `${slideWidth}px`,
          borderRadius: border,
          height: `${slideWidth}px`
        }}
      />
      <p className={styles.caption}>{item.description}</p>
      <p className={styles.date}>{item.date}</p>
    </article>
  );
}
