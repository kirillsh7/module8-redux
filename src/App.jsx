import { buttons } from './Buttons'
import styles from './app.module.css'
import { BUTTON_GROUP } from './constants'
import { useSelector } from 'react-redux'
import { store } from './app/store'
function App() {

  const operand1 = useSelector(state => state.operand1)
  const operand2 = useSelector(state => state.operand2)
  const operator = useSelector(state => state.operator)
  const isResult = useSelector(state => state.isResult)


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