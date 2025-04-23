import { createSlice } from '@reduxjs/toolkit'
import { NUM, OPERATOR } from '../../constants'
import { handleNum } from '../../handlers/handle-num'

const initialState = {
	operand1: NUM.ZERO,
	operand2: NUM.NONE,
	operator: OPERATOR.NONE,
	isResult: false,
}
export const calculateSlice = createSlice({
	name: 'calculate',
	initialState,
	reducers: {
		Num: (state, action) => {
			return handleNum(state, action)
		},
		Operator: (state, action) => {
			const newState = { ...state, operator: action.payload, isResult: false }
			return newState
		},
		Reset: () => {
			return initialState
		},
		Result: (state) => {
			const { operand1, operand2, operator } = state
			let newOperand
			if (operator === OPERATOR.PLUS) {
				newOperand = String(+operand1 + +operand2)
			} else {
				newOperand = String(+operand1 - +operand2)
			}
			return { ...initialState, operand1: newOperand, isResult: true }

		},


	}
})

export const { Operator, Reset, Result, Num } = calculateSlice.actions
export default calculateSlice.reducer
