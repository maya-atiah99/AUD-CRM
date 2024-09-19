import React from "react";
import styles from "./Loader.module.css";
const Loader = ({ width }) => {
  return (
    <div
      className={styles["load-main-cont"]}
      style={{ width: width ? width : "" }}
    >
      <div className={styles["loader-container"]}>
        <div className={styles["loader"]}></div>
      </div>
    </div>
  );
};

export default Loader;
