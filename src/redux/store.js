import { configureStore } from '@reduxjs/toolkit'
import employeeSlice from './slices/employeeSlice'
export default configureStore({
    reducer: {
        auth: employeeSlice,
    }
})