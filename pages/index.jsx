import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const formRef = useRef(null);

  const validateFunc = (e) => {
    if (formRef) {
      let password = formRef.current.querySelector("#access");
      let errorMsg = formRef.current.querySelector("#err");
      if (password.value !== "jesus") {
        e.preventDefault();
        errorMsg.classList.remove(`${styles.noshow}`);
      }
    }
  };

  return (
    <div className={styles.container}>
      <form
        onSubmit={validateFunc}
        className={styles.accessForm}
        ref={formRef}
        action="/Dashboard"
        method="get"
      >
        <div className={styles.imageWrapper}>
          <Image
            src="/form-icon.svg"
            alt="form icon"
            width={"100%"}
            height={"100%"}
          />
        </div>
        <input
          className={styles.input}
          type="password"
          id="access"
          name="access"
          placeholder="Enter Access Code"
        />
        <button className={styles.btn} type="submit">
          Enter
        </button>
        <span id="err" className={`${styles.noshow} ${styles.err}`}>
          <small>wrong code</small>
        </span>
      </form>
    </div>
  );
}
