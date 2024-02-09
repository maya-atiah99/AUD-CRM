import React from 'react'
import styles from './LoaderButton.module.css'
const LoaderButton = () => {
  return (
    <div className={styles["loader-container"]}>
    <div className={styles["loader"]}></div>
  </div>
  )
}

export default LoaderButton
