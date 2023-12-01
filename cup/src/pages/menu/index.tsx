import React from 'react'
import ClassNames from 'classnames'
import zerooneImage from '@/assets/images/hattrick.jpg'
import cricketImage from '@/assets/images/cricket.jpg'
import practiceImage from '@/assets/images/practice.jpg'
import styles from './styles.module.css'

const Menu = () => {
  return (
    <main className={styles.menu}>
      <ul className={styles.list}>
        <li className={ClassNames(styles.item, styles.zeroone)}>
          <p className={styles.image}>
            <img src={zerooneImage} alt="Zero One" />
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

        <li className={styles.item}>
          <div className={ClassNames(styles.text, styles.left)}>
            <p className={ClassNames(styles.title, styles.left)}>CRICKET</p>
            <p className={styles.description}>Only the areas of 15, 16, 17, 18, 19, 20, and bull are the target.</p>
          </div>
          <p className={styles.image}>
            <img src={cricketImage} alt="Zero One" />
          </p>
        </li>

        <li className={styles.item}>
          <p className={styles.image}>
            <img src={practiceImage} alt="Zero One" />
          </p>
          <div className={styles.text}>
            <p className={styles.title}>PRACTICE</p>
            <p className={styles.description}>
              This is the starter!
              <br />
              Just keep hitting the high numbers!
            </p>
          </div>
        </li>
      </ul>
    </main>
  )
}

export default Menu
