import React from 'react'
// import ClassNames from 'classnames'
import Button from '@/components/atoms/Button'
import styles from './styles.module.css'

const Menu = () => {
  const [isFocused, setIsFocused] = React.useState(false)

  return (
    <main className={styles.menu}>
      <Button
        onClick={() => {
          console.log('clicked default')
        }}
        label="DEFAULT"
      />

      <Button
        onClick={() => {
          setIsFocused(!isFocused)
        }}
        label="RED with focused"
        focusedColor="red"
        isFocused={isFocused}
      />

      <Button
        onClick={() => {
          console.log('pointer events none')
        }}
        label="DISABLED"
        isDisabled
      />
    </main>
  )
}

export default Menu
