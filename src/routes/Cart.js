import {useSelector } from "react-redux"

function Cart(){
    let a = useSelector((state) => {return state}) // 다른방법. return state.stock
    console.log(a.stock) // a
}