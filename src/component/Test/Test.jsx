import React, { useEffect, useState } from 'react'

const Test = () => {
    const [text,setText]=useState("")
    const [counter,setCounter]=useState(0)
    const [disabled,setDisabled]=useState(false)
    useEffect(()=>{
        if (text!==""){
     setTimeout(()=>{setCounter(counter+1)},1000)
     }
     if (text==="il sagit dutomatiser la gestion des commandes de la societe")  {
        setDisabled(true)
    }

    },[text])

  return (
    <div className='test'>
    <h1>il sagit dutomatiser la gestion des commandes de la societe </h1>
    <p>{counter}</p>
    <textarea name="" id="" cols="40" rows="30"   onChange={(text)=>setText(text)} disabled={disabled}></textarea>
    </div>
  )
}

export default Test