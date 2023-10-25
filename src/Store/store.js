import { configureStore } from '@reduxjs/toolkit'
import carReducer from '../Store/Cars/carSlice'
export const store = configureStore({
    reducer: {
        car: carReducer,
      },
})