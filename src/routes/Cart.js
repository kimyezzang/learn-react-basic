import {useSelector } from "react-redux"

function Cart(){
    let a = useSelector((state) => {return state})
    console.log(a.stock)
}