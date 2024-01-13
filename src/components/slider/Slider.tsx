/* eslint-disable react-hooks/exhaustive-deps */
"use client";
/* eslint-disable @next/next/no-img-element */
import { ISlide } from "@/utils/types";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Sider.module.css";
import Card from "../card/Card";
import shapes from "@/utils/shapes";
import ArrowNext from "../ui/arrowNext/ArrowNext";
import ArrowPrev from "../ui/arrowPrev/ArrowPrev";
import { getRandomItem } from "@/utils/helpers";
import ArrowNextMob from "../ui/arrowNext/ArrowNextMob";
import ArrowPrevMob from "../ui/arrowPrev/ArrowPrevMob";

interface ISliderProps {
  data: ISlide[];
}
export default function Slider({ data }: ISliderProps) {
  const [slide, setSlide] = useState(0);
  const [slideWidth, setSlideWidth] = useState(344);
  const [btnPrevDisabled, setBtnPrevDisabled] = useState(true);
  const [btnNextDisabled, setBtnNextDisabled] = useState(false);
  const [pos, setPos] = useState(0);
  const refTrack = useRef<HTMLDivElement | null>(null);
  const refWrapper = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const getRandomBorderRadius = (arr: string[]) => {
    const res = [] as string[];
    res.push(getRandomItem(arr));

    while (res.length < data.length) {
      const prev = res[res.length - 1];
      let randomItem = getRandomItem(arr);

      if (randomItem === "50%") {
        if (prev !== randomItem && data[res.length].description.length < 35) {
          res.push(randomItem);
        }
      }
      if (randomItem === "600px") {
        if (data[res.length].description.length > 35) {
          res.push(randomItem);
        }
      } else if (randomItem !== "600px" && randomItem !== "50%") {
        res.push(randomItem);
      }
    }
    return res;
  };

  const [borderRadius, setBorderRadius] = useState(shapes);

  const setCardWidth = () => {
    if (refWrapper.current) {
      setSlideWidth(refWrapper.current.clientWidth / 4);
    }
    setPos(0);
    setSlide(0);
  };

  useEffect(() => {
    window.addEventListener("resize", setCardWidth);
    setCardWidth();
    return () => {
      window.removeEventListener("resize", setCardWidth);
    };
  }, [refWrapper.current?.clientWidth]);

  const changeSlide = (direction = 1) => {
    let slideNumber = 0;
    if (slide + direction < 0) {
      slideNumber = data.length - 1;
    } else {
      slideNumber = (slide + direction) % data.length;
    }
    setSlide(slideNumber);
  };

  const slideForward = () => {
    setPos((prev: number) => {
      if (data[slide].description.length > 35) {
        return prev + slideWidth * 2;
      } else return prev + slideWidth;
    });
  };
  const slideBackward = () => {
    setPos((prev: number) => {
      if (data[slide - 1].description.length > 35) {
        return prev - slideWidth * 2;
      } else return prev - slideWidth;
    });
  };

  useEffect(() => {
    if (
      refTrack.current &&
      pos >= refTrack.current.scrollWidth - slideWidth * 4
    ) {
      setBtnNextDisabled(true);
    } else setBtnNextDisabled(false);
    if (pos === 0) {
      setBtnPrevDisabled(true);
    } else setBtnPrevDisabled(false);
  }, [pos, slideWidth]);

  useEffect(() => {
    const scrollContainer = refTrack.current;
    const scrollHandler = (e: WheelEvent) => {
      e.preventDefault();
      if (
        e.deltaY > 0 &&
        pos < refTrack.current!.scrollWidth - slideWidth * 4
      ) {
        slideForward();
        changeSlide(1);
      }
      if (e.deltaY < 0 && slide > 0) {
        slideBackward();
        changeSlide(-1);
      }
    };

    scrollContainer &&
      scrollContainer.addEventListener("wheel", scrollHandler, {
        passive: false,
      });

    return () => {
      scrollContainer &&
        scrollContainer.removeEventListener("wheel", scrollHandler);
    };
  }, [pos, slide, slideWidth]);

  useEffect(() => {
    setBorderRadius(getRandomBorderRadius(shapes));
    function handleResize() {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className={styles.wrapper} ref={refWrapper}>
      <h1 className={styles.title}>Полезные материалы</h1>
      <p className={styles.subtitle}>
        Собрали для вас полезные исследования схемы кормления и другие
        материалы, которые пригодятся для лучших результатов на вашем хозяйстве
      </p>

      <div
        className={styles.track}
        ref={refTrack}
        style={{
          transform: `translateX(-${pos}px)`,
        }}
      >
        {data.map((item, i: number) => (
          <Card
            key={item.id}
            item={item}
            slideWidth={slideWidth}
            border={borderRadius[i]}
          />
        ))}
      </div>
      <div className={styles.buttons}>
        {!isMobile ? (
          <ArrowPrev
            disabled={btnPrevDisabled}
            onClick={() => {
              if (!btnPrevDisabled) {
                changeSlide(-1);
                slideBackward();
              }
            }}
          />
        ) : (
          <ArrowPrevMob
            disabled={btnPrevDisabled}
            onClick={() => {
              if (!btnPrevDisabled) {
                changeSlide(-1);
                slideBackward();
              }
            }}
          />
        )}
        {!isMobile ? (
          <ArrowNext
            disabled={btnNextDisabled}
            onClick={() => {
              if (!btnNextDisabled) {
                changeSlide(1);
                slideForward();
              }
            }}
          />
        ) : (
          <ArrowNextMob
            disabled={btnNextDisabled}
            onClick={() => {
              if (!btnNextDisabled) {
                changeSlide(1);
                slideForward();
              }
            }}
          />
        )}
      </div>
    </div>
  );
}
