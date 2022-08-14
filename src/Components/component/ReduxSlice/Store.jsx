import {configureStore} from '@reduxjs/toolkit'
import ResumeSlice from './Slice'

const Store = configureStore({
    reducer:ResumeSlice.reducer
})

export default Store