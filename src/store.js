import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name : 'user', //state 이름이 user이다.
    initialState : 'kim'
})

let stock = createSlice({
    name : 'stock', //state 이름이 user이다.
    initialState : [10, 11, 12]
})

export default configureStore({
    reducer: { // 여기서 등록하는 것
        user : user.reducer,
        stock : stock.reducer
    }
})