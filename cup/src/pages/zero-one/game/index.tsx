import React from 'react'
import ClassNames from 'classnames'
import Button from '@/components/atoms/Button'
import styles from './styles.module.css'

const Game = () => {
  const [focusedMutiplier, setFocusedMultiplier] = React.useState('single')
  const [scored, setScored] = React.useState<{ [key: 'first' | 'second' | 'third']: null | number }>({
    first: null,
    second: null,
    third: null,
  })

  const getMultiplierValue = () => {
    switch (focusedMutiplier) {
      case 'single':
        return 1
      case 'double':
        return 2
      case 'triple':
        return 3
      default:
        return 1
    }
  }

  const setScoredState = (value: number) => {
    const multiplier = getMultiplierValue()
    const result = value === 50 ? 50 : value * multiplier

    if (!scored.first) {
      setScored({ ...scored, first: result })
      return
    }

    if (!scored.second) {
      setScored({ ...scored, second: result })
      return
    }

    if (!scored.third) {
      setScored({ ...scored, third: result })
      return
    }
  }

  const undoScoredState = () => {
    if (scored.third) {
      setScored({ ...scored, third: null })
      return
    }

    if (scored.second) {
      setScored({ ...scored, second: null })
      return
    }

    if (scored.first) {
      setScored({ ...scored, first: null })
      return
    }
  }

  const changePlayer = () => {
    console.log('changePlayer')
  }

  return (
    <main className={styles.game}>
      <div className={styles.informations}>
        <div className={styles.histories}>
          <ul className={styles.history}>
            <li className={styles.gameName}>301</li>
            <li className={styles.item}>
              <p className={styles.round}>1st</p>
              <p className={styles.score}>60</p>
            </li>
            <li className={styles.item}>
              <p className={styles.round}>2nd</p>
              <p className={styles.score}>35</p>
            </li>
            <li className={styles.item}>
              <p className={styles.round}>3rd</p>
              <p className={styles.score}>72</p>
            </li>
            <li className={styles.item}>
              <p className={styles.round}>20th</p>
              <p className={styles.score}>150</p>
            </li>
          </ul>
        </div>

        <div className={styles.marks}>
          <div className={styles.current}>256</div>

          <ul className={styles.scores}>
            {Object.values(scored).map((v, idx) => {
              return (
                <li className={styles.item} key={idx}>
                  {(() => {
                    if (v === 50) {
                      return 'BULL'
                    }

                    return v ? v : '-'
                  })()}
                </li>
              )
            })}
          </ul>
        </div>

        <div className={styles.playersWrapper}>
          <ul className={styles.players}>
            <li className={styles.item}>
              <p className={styles.name}>lamb</p>
              <p className={styles.score}>240</p>
            </li>
            <li className={styles.item}>
              <p className={styles.name}>pita</p>
              <p className={styles.score}>223</p>
            </li>
            <li className={ClassNames(styles.item, styles.current)}>
              <p className={styles.name}>hi8</p>
              <p className={styles.score}>256</p>
            </li>
            <li className={styles.item}>
              <p className={styles.name}>lakeside</p>
              <p className={styles.score}>219</p>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.inputs}>
        <div className={styles.change}>
          <Button onClick={changePlayer} label="CHANGE PLAYER" focusedColor="red" />
        </div>

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
                    setScoredState(idx + 1)
                  }}
                  label={(idx + 1).toString()}
                />
              </li>
            )
          })}
          <li className={styles.item}>
            <Button
              onClick={() => {
                setScoredState(50)
              }}
              label="BULL"
              isDisabled={focusedMutiplier === 'triple'}
            />
          </li>
          <li className={styles.item}>
            <Button
              onClick={() => {
                setScoredState(0)
              }}
              label="OUT"
            />
          </li>
          <li className={styles.item}>
            <Button onClick={undoScoredState} label="UNDO" />
          </li>
        </ul>
      </div>
    </main>
  )
}

export default Game
