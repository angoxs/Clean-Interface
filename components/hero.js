import styles from "../components/hero.module.scss";
import { motion } from "framer-motion";

const easing = [0.6, -0.5, 0.01, 0.99];

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Hero(props) {
  return (
    <motion.div
      className={styles.container}
      exit={{ opacity: 0 }}
      initial="initial"
      animate="animate"
      className={styles.hero_container}
    >
      <motion.div variants={stagger} className={styles.hero_group}>
        <motion.h1 variants={fadeInUp}>{props.title}</motion.h1>
        <motion.p variants={fadeInUp}>{props.subtitle}</motion.p>
        <motion.button
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          HIRE ME
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
