'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import ClassNames from 'classnames'
import { useEffect } from 'react'
import { motion, useAnimate, usePresence } from 'framer-motion'
import HattrickImage from '../../_images/hattrick.jpg'
import CricketImage from '../../_images/cricket.jpg'
import PracticeImage from '../../_images/practice.jpg'
import styles from './page.module.css'

export default function Menu() {
  const router = useRouter()
  const [isPresent, safeToRemove] = usePresence()
  const [scope, animate] = useAnimate()

  const listMotion = {
    hidden: { opacity: 0, },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
    },
  }

  const itemMotion = {
    hidden: { transform: "translateX(10px)", opacity: 0, },
    show: { transform: "translateX(0)", opacity: 1, },
  }

  const itemMotionLeft = {
    hidden: { transform: "translateX(-10px)", opacity: 0, },
    show: { transform: "translateX(0)", opacity: 1, },
  }

  const transition = (pathName: string) => {
    router.push(pathName)
  }

  useEffect(() => {
    return () => {
      console.log('unmount')
    }
  }, [])

  useEffect(() => {
    console.log(isPresent)
  }, [isPresent])

  return (
    <main className={styles.menu} ref={scope}>
      <motion.ul
        variants={listMotion}
        className={styles.list}
        initial={'hidden'}
        animate={'show'}
        exit={'exit'}
      >
        <motion.li
          variants={itemMotion}
          className={ClassNames(styles.item, styles.zeroone)}
          onClick={() => {
            transition('/zero-one')
          }}
        >
          <p className={styles.image}>
            <Image
              src={HattrickImage}
              alt="Hattrick"
              className={styles.hattrick}
            />
          </p>
          <div className={styles.text}>
            <p className={styles.title}>01</p>
            <p className={styles.description}>
              The first player who manages to<br />
              reduce their score to exactly 0 wins!
            </p>
          </div>
        </motion.li>

        <motion.li
          variants={itemMotionLeft}
          className={styles.item}
        >
          <div className={ClassNames(styles.text, styles.left)}>
            <p className={ClassNames(styles.title, styles.left)}>CRICKET</p>
            <p className={styles.description}>
              Only the areas of 15, 16, 17, 18, 19, 20, and bull are the target.
            </p>
          </div>
          <p className={styles.image}>
            <Image
              src={CricketImage}
              alt="Cricket"
              className={styles.cricket}
            />
          </p>
        </motion.li>

        <motion.li
          variants={itemMotion}
          className={styles.item}
        >
          <p className={styles.image}>
            <Image
              src={PracticeImage}
              alt="Practice"
              className={styles.practice}
            />
          </p>
          <div className={styles.text}>
            <p className={styles.title}>PRACTICE</p>
            <p className={styles.description}>
            This is the starter!<br />
            Just keep hitting the high numbers!
            </p>
          </div>
        </motion.li>
      </motion.ul>
    </main>
  )
}
