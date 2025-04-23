import { NUM, OPERATOR } from '../constants'

export const handleReset = ({ setOperand1, setOperand2, setOperator, setIsResult }) => {
	setOperand1(NUM.ZERO)
	setOperand2(NUM.NONE)
	setOperator(OPERATOR.NONE)
	setIsResult(false)
}