import React from 'react'
import ClassNames from 'classnames'
import styles from './styles.module.css'

type color = 'red' | 'blue' | 'green'

interface Props {
  label: string
  onClick: () => void
  focusedColor?: color
  isFocused?: boolean
  isDisabled?: boolean
}

const Button = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      <button
        type="button"
        onClick={props.onClick}
        className={ClassNames(styles.button, styles[props.focusedColor], {
          [styles.focused]: props.isFocused,
          [styles.disabled]: props.isDisabled,
        })}
      >
        {props.label}
      </button>
    </div>
  )
}

export default Button
