import { motion } from 'framer-motion'
import styles from '@/pages/zero-one/styles.module.css'
import { ZERO_ONE_TYPES } from '@/constants/zeroOne'
import GameItem from '@/pages/zero-one/organisms/gameItem/gameItem'

const GameList = () => {
  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  }

  return (
    <motion.ul className={styles.games} variants={variants} initial="hidden" animate="show">
      {ZERO_ONE_TYPES.map((game) => (
        <GameItem game={game} />
      ))}
    </motion.ul>
  )
}

export default GameList
