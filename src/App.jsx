import { buttons } from './Buttons'
import styles from './app.module.css'
import { BUTTON_GROUP } from './constants'
import { store } from './app/store'
import { useState } from 'react'
function App() {
  const [data, setData] = useState(store.getState())
  store.subscribe(() => setData(store.getState))

  const { operand1, operand2, operator, isResult } = data

  const screenClassName = styles.sceen + (isResult ? ' ' + styles.screenResult : '')
  const output = operand1 + (operator && ' ' + operator) + (operand2 && ' ' + operand2)

  return (
    <div className={styles.app}>
      <div className={screenClassName}>{output}</div>
      <div className={styles.buttons}>
        <div className={styles.buttonsGroupLeft}>
          {buttons.map(({ id, name, group, action }) =>
            group === BUTTON_GROUP.LEFT ? (
              <button
                className={styles.button}
                key={id}
                onClick={() => store.dispatch(action(name))}
              >
                {name}
              </button>
            ) : null
          )}
        </div>
        <div className={styles.buttonsGroupRight}>
          {buttons.map(({ id, name, group, action }) =>
            group === BUTTON_GROUP.RIGHT ? (
              <button
                className={styles.button}
                key={id}
                onClick={() => store.dispatch(action(name))}
              >
                {name}
              </button>
            ) : null
          )}
        </div>
      </div>

    </div>
  )
}



export default App