import ClassNames from 'classnames'
import zerooneImage from '@/assets/images/hattrick.jpg'
import styles from './styles.module.css'
import GameList from './organisms/gameList/gameList'

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
      </ul>
      <GameList />
    </main>
  )
}

export default Menu
