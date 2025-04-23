import { handleOperand } from './handle-operand'
import { OPERATOR } from '../constants'

export const handleNum = (state, action) => {
	const { operand1, operand2, operator } = state
	const { payload } = action
	let newOperand = {}
	if (operator === OPERATOR.NONE) {
		newOperand.operand1 = handleOperand(operand1, payload)
	} else {
		newOperand.operand2 = handleOperand(operand2, payload)
	}
	return { ...state, ...newOperand, isResult: false }

}