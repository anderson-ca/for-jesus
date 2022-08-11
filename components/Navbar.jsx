import styles from "../styles/Navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.imageWrapper}>
        <Image
          src="/droplet.svg"
          alt="nav icon"
          height={"100%"}
          width={"100%"}
        />
      </div>
      <h2>Droplet Generator</h2>
    </div>
  );
};

export default Navbar;
