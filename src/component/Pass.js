import React, { useState } from 'react'
import classes from './styles/Pass.module.css'

function Pass() {
    const [pass , setPass]= useState('')
    const [copypass,setCopypass] =useState('')
    const [flag,setFlag] = useState(false)
    const [showpass,setShowpass] = useState(false)
    const arr = ['A','B','C','D','E','F','G','H','I','J']
    const symbol = ['#','@','$','&','#','@','$','#','@']
    const passwordHandler =()=>{
        var a= Math.random().toString()
        var b = a.split('.')
        var substr = b[1].substring(0,1)
        console.log(substr)
        var pass = Number(b[1]).toString(16)
        // console.log(arr[substr]+pass)
        const cnfPass =arr[substr]+pass.substring(0,8)+symbol[Number(b[1].substring(0,1))]+pass.substring(pass.length-5,pass.length)
        setPass(cnfPass)
        setShowpass(true)
    }
    const copypassHandler =()=>{
        setCopypass(pass)
        setFlag(true)
    }
    const okayHandler =()=>{
        setFlag(false)
        setShowpass(false)
    }
  return (
    <div className={classes.pass}>
        <button onClick={passwordHandler} >Genrate Password</button>
        {showpass && <><p>Password: {pass}</p>
        <button onClick={copypassHandler}>Copy Password</button></>}
        <div>{flag && <div className={classes.modal}>
            <h2>Password copied</h2>
            <p>Password: {copypass}</p>
            <button onClick={okayHandler}>Okay</button>
            </div>}</div>
    </div>
  )
}

export default Pass