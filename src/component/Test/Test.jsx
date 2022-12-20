import React, { useEffect, useState } from 'react'

const Test = () => {
    const [textChange,setTextChange]=useState("")
    const [counter,setCounter]=useState(0)
    const [disabled,setDisabled]=useState(false)
    useEffect(()=>{
        if (textChange!==""){
     setTimeout(()=>{setCounter(counter+1)},1000)
     }
     if (textChange=="il sagit dutomatiser la gestion des commandes de la societe")  {
       console.log(true)
        setDisabled(true)
    }
    console.log(textChange)
    },[textChange])

  return (
    <div className='test'>
    <h1>il sagit dutomatiser la gestion des commandes de la societe </h1>
    <p>{counter}</p>
    <textarea name="" id="" cols="40" rows="30"   onChange={(text)=>setTextChange(text.target.value)} disabled={disabled}></textarea>
    </div>
  )
}

export default Test