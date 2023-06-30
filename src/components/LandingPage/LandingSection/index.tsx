import React from "react";
import * as styles from "./styles.css";

const DownChevron = () => (
  <svg
    viewBox="0 0 15.615 6.7619"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className={styles.downChevron}
  >
    <g transform="translate(-82.209 -105.64)">
      <path
        transform="matrix(1 0 0 .5 -.86595 52.585)"
        d="m83.075 106.12 3.9036 6.7624 3.9042 6.7613 3.9036-6.7613 3.9036-6.7624h-1.5617l-6.2456 10.819-3.1233-5.4095-3.1228-5.4095z"
        stroke-width=".26458"
      />
    </g>
  </svg>
);

export const LandingSection = () => {
  return (
    <section className={styles.landingSection}>
      <div className={styles.content}>
        <span>Hi! My name is</span>
        <h1 className={styles.name}>Roger M. Parent</h1>
        <span>
          A web developer with a passion for minimalism and creative solutions.
        </span>
      </div>
      <a href="#worked-on" className={styles.downChevronLink}>
        <DownChevron />
      </a>
    </section>
  );
};
