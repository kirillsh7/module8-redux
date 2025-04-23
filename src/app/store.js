import { configureStore } from '@reduxjs/toolkit'
import calculateSlice from '../features/calculator/calculate-slice'


export const store = configureStore({
	reducer: calculateSlice,
},)

store.subscribe(() => store.getState())