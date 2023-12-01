'use client'

import ClassNames from 'classnames'
import HattrickImage from '../../_images/hattrick.jpg'
import CricketImage from '../../_images/cricket.jpg'
import PracticeImage from '../../_images/practice.jpg'
import Image from 'next/image'
import styles from './page.module.css'

export default function Menu() {
  return (
    <main className={styles.menu}>
      <ul className={styles.list}>
        <li className={ClassNames(styles.item, styles.zeroone)}>
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
        </li>
      </ul>
    </main>
  )
}
