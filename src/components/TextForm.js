import React, { useState } from 'react'   // hooks -> useState

export default function TextForm(props) {
    const [text, setText] = useState('')

    function handleToUppercase() {
        setText(text.toUpperCase())
        props.showAlert("Converted to uppercase done","success")
    }

    function handleToLowercase(){
        setText(text.toLowerCase())
        props.showAlert("Converted to lowercase done","success")
    }

    function clearText(){
        let newText = ""
        setText(newText)
        props.showAlert("Clear text done","success")
    }

    function reverseText(){
        let str = text
        let s = str.split("").reverse().join("")
        setText(s)
        props.showAlert("Reverse text done","success")
    }

    function removeExtraSpace(){
        let str = text
        let s = str.split(/[ ]+/).join(" ")
        setText(s)
        props.showAlert("Remove extra space done","success")
    }

    function removeDuplicateCharacters(){
        let str = text
        let s = [...new Set(str)].join("")
        setText(s)
        props.showAlert("Remove duplicats characters done","success")
    }

    function handleOnChange(event) {
        setText(event.target.value)
    }

    function countWords(text){
        let count = 0
        let arr = text.split(/\s+/)
        for(let i=0; i<arr.length; i++){
          if(arr[i]!==""){
            count++
          }
        }
        return count
    }

    return (
        <>
            <div className='container' style={{color:props.mode==='light'?'black':'white'}}>
                <h1> {props.heading} </h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} placeholder="Enter text here" style={{backgroundColor: props.mode==='light'?'rgb(34 34 34)':'white', color: props.mode==='light'?'white':'black'}} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} type='button' className='btn btn-primary mx-1 my-1' onClick={handleToUppercase}>Convert to Uppercase</button>
                <button disabled={text.length===0} type='button' className='btn btn-success mx-1 my-1' onClick={handleToLowercase}>Convert to Lowecase</button>
                <button disabled={text.length===0} type='button' className="btn btn-secondary mx-1 my-1" onClick={clearText}>Clear text</button>
                <button disabled={text.length===0} type='button' className="btn btn-danger mx-1 my-1" onClick={reverseText}>Reverse text</button>
                <button disabled={text.length===0} type='button' className="btn btn-dark mx-1 my-1" onClick={removeExtraSpace}>Remove extra space </button>
                <button  type='button' className="btn btn-warning mx-1 my-1" onClick={removeDuplicateCharacters}>Remove duplicates characters </button>
            </div>
            
            {/* conditionaling rendering */}
            {
            text.length>0 ? 
            <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
                <h3>Your Text summary</h3>
                <p>{countWords(text)} words & {text.length} characters</p>
                <p>{0.008 * text.split(/\s+/).filter((element)=>element.length!==0).length} minutes takes to read</p>
                <h5>Preview</h5>
                <p>{text}</p>
            </div> 
             : '' 
            }
        </>
    )
}
