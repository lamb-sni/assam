import React from 'react'
// import ClassNames from 'classnames'
import Button from '@/components/atoms/Button'
import styles from './styles.module.css'

const Game = () => {
  const [focusedMutiplier, setFocusedMultiplier] = React.useState('single')

  return (
    <main className={styles.game}>
      <div className={styles.inputs}>
        <ul className={styles.multiplier}>
          <li className={styles.item}>
            <Button
              onClick={() => {
                setFocusedMultiplier('single')
              }}
              label="SINGLE"
              focusedColor="red"
              isFocused={focusedMutiplier === 'single'}
            />
          </li>
          <li className={styles.item}>
            <Button
              onClick={() => {
                setFocusedMultiplier('double')
              }}
              label="DOUBLE"
              focusedColor="red"
              isFocused={focusedMutiplier === 'double'}
            />
          </li>
          <li className={styles.item}>
            <Button
              onClick={() => {
                setFocusedMultiplier('triple')
              }}
              label="TRIPLE"
              focusedColor="red"
              isFocused={focusedMutiplier === 'triple'}
            />
          </li>
        </ul>
        <ul className={styles.score}>
          {[...Array(20)].map((_, idx) => {
            return (
              <li className={styles.item} key={idx}>
                <Button
                  onClick={() => {
                    console.log(idx + 1)
                  }}
                  label={(idx + 1).toString()}
                />
              </li>
            )
          })}
          <li className={styles.item}>
            <Button
              onClick={() => {
                console.log('BULL')
              }}
              label="BULL"
              isDisabled={focusedMutiplier === 'triple'}
            />
          </li>
          <li className={styles.item}>
            <Button
              onClick={() => {
                console.log('OUT')
              }}
              label="OUT"
            />
          </li>
        </ul>
      </div>
    </main>
  )
}

export default Game
