import { NUM } from '../constants'

export const handleOperand = (operandValue, payloadNum) => {
	if (operandValue === NUM.ZERO || operandValue === NUM.NONE) {
		return payloadNum
	}
	return operandValue.toString() + payloadNum.toString()
}

