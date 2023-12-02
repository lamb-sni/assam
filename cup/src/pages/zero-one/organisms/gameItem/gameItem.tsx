import { motion } from 'framer-motion'
import styles from '../../styles.module.css'
import classNames from 'classnames'
import { type ZERO_ONE_TYPES } from '@/constants/zeroOne'
import useViewTransition from '@/hooks/useViewTransition'

interface Props {
  game: (typeof ZERO_ONE_TYPES)[number]
}

const GameItem = (props: Props) => {
  const viewTransition = useViewTransition()
  const { transitionNavigate } = viewTransition
  const variants = {
    hidden: { opacity: 0, y: '15px' },
    show: { opacity: 1, y: 0 },
  }
  const { game } = props

  return (
    <motion.li
      variants={variants}
      className={classNames(styles.item, styles.three)}
      onClick={() => transitionNavigate('/' + game)}
    >
      <p className={styles.title}>{game}</p>
    </motion.li>
  )
}

export default GameItem
