import styles from "./header.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header_group}>
        <Link href="/">
          <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            HOME
          </motion.a>
        </Link>
        <Link href="/about">
          <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            ABOUT
          </motion.a>
        </Link>
      </div>
    </div>
  );
}
