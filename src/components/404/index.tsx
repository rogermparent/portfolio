import * as React from "react";
import { Link } from "gatsby";
import * as styles from "./styles.css";

const NotFound: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>Page not found!</h1>
      <p>
        <Link to="/">Return home</Link> to get back on track.
      </p>
    </div>
  );
};

export default NotFound;
