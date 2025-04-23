import { BUTTON_GROUP, NUM, OPERATOR, COMMAND, } from './constants'
import { Num, Operator, Reset, Result } from './features/calculator/calculate-slice'
export const buttons = [
	{
		id: NUM.ONE,
		name: NUM.ONE,
		group: BUTTON_GROUP.LEFT,
		action: Num
	},
	{
		id: NUM.TWO,
		name: NUM.TWO,
		group: BUTTON_GROUP.LEFT,
		action: Num
	},
	{
		id: NUM.THREE,
		name: NUM.THREE,
		group: BUTTON_GROUP.LEFT,
		action: Num
	},
	{
		id: NUM.FOUR,
		name: NUM.FOUR,
		group: BUTTON_GROUP.LEFT,
		action: Num
	},
	{
		id: NUM.FIVE,
		name: NUM.FIVE,
		group: BUTTON_GROUP.LEFT,
		action: Num
	},
	{
		id: NUM.SIX,
		name: NUM.SIX,
		group: BUTTON_GROUP.LEFT,
		action: Num
	},
	{
		id: NUM.SEVEN,
		name: NUM.SEVEN,
		group: BUTTON_GROUP.LEFT,
		action: Num
	},
	{
		id: NUM.EIGHT,
		name: NUM.EIGHT,
		group: BUTTON_GROUP.LEFT,
		action: Num
	},
	{
		id: NUM.NINE,
		name: NUM.NINE,
		group: BUTTON_GROUP.LEFT,
		action: Num
	},
	{
		id: NUM.ZERO,
		name: NUM.ZERO,
		group: BUTTON_GROUP.LEFT,
		action: Num
	},
	{
		id: COMMAND.RESET,
		name: COMMAND.RESET,
		group: BUTTON_GROUP.RIGHT,
		action: Reset
	},
	{
		id: COMMAND.RESULT,
		name: COMMAND.RESULT,
		group: BUTTON_GROUP.RIGHT,
		action: Result
	},
	{
		id: OPERATOR.MINUS,
		name: OPERATOR.MINUS,
		group: BUTTON_GROUP.RIGHT,
		action: Operator
	},
	{
		id: OPERATOR.PLUS,
		name: OPERATOR.PLUS,
		group: BUTTON_GROUP.RIGHT,
		action: Operator
	},


]