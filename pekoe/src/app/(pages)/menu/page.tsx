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
        <li className={styles.item}>
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

        <li className={styles.item}>
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
        </li>

        <li className={styles.item}>
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
        </li>
      </ul>
    </main>
  )
}
