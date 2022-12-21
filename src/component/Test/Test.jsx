import React, { useEffect, useState } from 'react'

const Test = () => {
    const [textChange,setTextChange]=useState("")
    const [counter,setCounter]=useState(0)
    const [disabled,setDisabled]=useState(false)
    const [test,setTest]=useState(false)
    const textToWrite='il sagit dutomatiser la gestion des commandes de la societe'
    useEffect(()=>{
        if (textChange!==""){
     setTimeout(()=>{setCounter((prev)=>prev+1)},1000)
     }
     for(let i = 0;i<textChange.length;i++){
      if(textChange.charAt(i) === textToWrite.charAt(i)){
        setDisabled(false)
      }else {
        setDisabled(true)
      }
    }

    },[textChange,counter])
    const textChangeHandler = (e)=> {
      console.log(disabled)
      if(!disabled){
        document.removeEventListener("keydown",function(e){
          console.log('tt')
        })
        setTextChange(e.target.value)
      }else if (disabled){
        document.addEventListener("keydown", function(e) {
          if (e.keyCode === 8) {
            setTextChange((prev)=> (prev.slice(0,-1)))
          }
      });
       
      }
      }

  return (
    <div className='test'>
    <h1>il sagit dutomatiser la gestion des commandes de la societe </h1>
    <p>{counter}</p>
    <textarea name="" id="" cols="40" rows="30" value={textChange}   onChange={(e)=>{textChangeHandler(e)}} ></textarea>
    </div>
  )
}

export default Test