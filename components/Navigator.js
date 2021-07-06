import styles from "./Navigator.module.css";
import Link from "next/link";
export default function Navigator(props) {
  return (
    <nav className={styles.navbar}>
      <Link href={props.href}>
        <p className={styles.navigator}>Events</p>
      </Link>
      <Link href={props.href}>
        <p className={styles.navigator}>Contact</p>
      </Link>
      <Link href={props.href}>
        <p className={styles.navigator}>Developers</p>
      </Link>
      <Link href="/roadmap">
        <p className={styles.navigator}>Road Map</p>
      </Link>
    </nav>
  );
}

const Sizedbox = (props) => <div className={styles.sizedbox}></div>;
