import React from 'react'
import ClassNames from 'classnames'
import { motion } from 'framer-motion'
import zerooneImage from '@/assets/images/hattrick.jpg'
import useViewTransition from '@/hooks/useViewTransition'
import styles from './styles.module.css'

const Menu = () => {
  const viewTransition = useViewTransition()
  const { transitionNavigate } = viewTransition

  const ulVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  }

  const liVariants = {
    hidden: { opacity: 0, y: '15px' },
    show: { opacity: 1, y: 0 },
  }

  return (
    <main className={styles.menu}>
      <ul className={styles.list}>
        <li className={ClassNames(styles.item, styles.zeroone)}>
          <p className={styles.images}>
            <img src={zerooneImage} alt="Zero One" className={ClassNames(styles.image, styles.zeroone)} />
          </p>
          <div className={styles.text}>
            <p className={styles.title}>01</p>
            <p className={styles.description}>
              The first player who manages to
              <br />
              reduce their score to exactly 0 wins!
            </p>
          </div>
        </li>
      </ul>

      <motion.ul className={styles.games} variants={ulVariants} initial="hidden" animate="show">
        <motion.li
          variants={liVariants}
          className={ClassNames(styles.item, styles.three)}
          onClick={() => transitionNavigate('/301')}
        >
          <p className={styles.title}>301</p>
        </motion.li>
        <motion.li variants={liVariants} className={styles.item}>
          <p className={styles.title}>501</p>
        </motion.li>
        <motion.li variants={liVariants} className={styles.item}>
          <p className={styles.title}>701</p>
        </motion.li>
        <motion.li variants={liVariants} className={styles.item}>
          <p className={styles.title}>901</p>
        </motion.li>
        <motion.li variants={liVariants} className={styles.item}>
          <p className={styles.title}>1101</p>
        </motion.li>
        <motion.li variants={liVariants} className={styles.item}>
          <p className={styles.title}>1501</p>
        </motion.li>
      </motion.ul>
    </main>
  )
}

export default Menu
