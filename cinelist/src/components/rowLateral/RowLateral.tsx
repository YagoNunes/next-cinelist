"use client";

import { useRef } from "react";
import Cards from "@/app/Cards/index";
import styles from "./RowLateral.module.css";
import { Filme } from "@/app/Types/types";

interface Props {
  filmes: Filme[];
}

export default function RowLateral({ filmes }: Props) {
  const rowRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!rowRef.current) return;

    const amount = rowRef.current.clientWidth * 0.8;

    rowRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.wrapper}>
      <button className={`${styles.arrow} ${styles.left}`} onClick={() => scroll("left")}>
        ‹
      </button>

      <section className={styles.grid} ref={rowRef}>
        {filmes.map((filme) => (
          <Cards key={filme.id} filme={filme} />
        ))}
      </section>

      <button className={`${styles.arrow} ${styles.right}`} onClick={() => scroll("right")}>
        ›
      </button>
    </div>
  );
}