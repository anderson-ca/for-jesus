import styles from "../styles/Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <div className={`${styles.controls}`}>
        {/* //////// ADD IMAGE ///////// */}
        <label htmlFor="customRange1" className={styles.imageInsert}>
          Insert Image
        </label>
        <button className={`${styles.btn} ${styles.imgUploadBtn}`}>
          Upload Image
        </button>
        {/* //////// FILTERS ///////// */}
        <label htmlFor="customRange1" className={styles.imageFilter}>
          Image Filter
        </label>
        <input
          type="range"
          className={styles.range}
          id="customRange1"
          min="0"
          max="100"
        />
        <small className={styles.small}>Rotate</small>
        <input
          type="range"
          className={styles.range}
          id="customRange1"
          min="0"
          max="100"
        />
        <small className={styles.small}>Exposure</small>
        <input
          type="range"
          className={styles.range}
          id="customRange1"
          min="0"
          max="100"
        />
        <small className={styles.small}>Contrast</small>
        <input
          type="range"
          className={styles.range}
          id="customRange1"
          min="0"
          max="100"
        />
        <small className={styles.small}>Saturation</small>
        {/* //////// EFFECTS ///////// */}
        <label htmlFor="customRange1" className={styles.imageEffects}>
          Image Effects
        </label>
        <input
          type="range"
          className={styles.range}
          id="customRange1"
          min="0"
          max="100"
        />
        <small className={styles.small}>Zig Zag</small>
        <input
          type="range"
          className={styles.range}
          id="customRange1"
          min="0"
          max="100"
        />
        <small className={styles.small}>Wave</small>
        <input
          type="range"
          className={styles.range}
          id="customRange1"
          min="0"
          max="100"
        />
        <small className={styles.small}>Crystalize</small>
        <input
          type="range"
          className={styles.range}
          id="customRange1"
          min="0"
          max="100"
        />
        <small className={styles.small}>Pointlize</small>
        <input
          type="range"
          className={styles.range}
          id="customRange1"
          min="0"
          max="100"
        />
        <small className={styles.small}>Tiles</small>
        <input
          type="range"
          className={styles.range}
          id="customRange1"
          min="0"
          max="100"
        />
        <small className={styles.small}>Oil Paint</small>
        {/* //////// GET IMAGE ///////// */}
        <label htmlFor="customRange1" className={styles.imageExport}>
          Insert Image
        </label>
        <button className={`${styles.btn} ${styles.imageExportBtn}`}>
          Download Image
        </button>
      </div>
      <div className={`${styles.canvas}`}></div>
    </div>
  );
};

export default Dashboard;
