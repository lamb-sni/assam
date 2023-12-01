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

        <li className={ClassNames(styles.item, styles.cricket)}>
          <div className={ClassNames(styles.text, styles.left)}>
            <p className={ClassNames(styles.title, styles.left)}>CRICKET</p>
            <p className={styles.description}>Only the areas of 15, 16, 17, 18, 19, 20, and bull are the target.</p>
          </div>
          <p className={styles.images}>
            <img src={cricketImage} alt="Cricket" className={ClassNames(styles.image, styles.cricket)} />
          </p>
        </li>

        <li className={ClassNames(styles.item, styles.practice)}>
          <p className={styles.images}>
            <img src={practiceImage} alt="Practice" className={ClassNames(styles.image, styles.practice)} />
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
