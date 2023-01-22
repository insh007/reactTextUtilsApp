import React, { useState } from 'react'   // hooks -> useState

export default function TextForm(props) {
    const [text, setText] = useState('')

    function handleToUppercase() {
        // console.log("UpperCase was clicked")
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

    function handleOnChange(event) {
        // console.log("On Change")
        setText(event.target.value)
    }

    return (
        <>
            <div className='container' style={{color:props.mode==='light'?'black':'white'}}>
                <h1> {props.heading} </h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} placeholder="Enter text here" style={{backgroundColor: props.mode==='light'?'rgb(34 34 34)':'white', color: props.mode==='light'?'white':'black'}} id="myBox" rows="8"></textarea>
                </div>
                <button type='button' className='btn btn-primary' onClick={handleToUppercase}>Convert to Uppercase</button>
                <button type='button' className='btn btn-success mx-2' onClick={handleToLowercase}>Convert to Lowecase</button>
                <button type='button' className="btn btn-secondary" onClick={clearText}>Clear text</button>
                <button type='button' className="btn btn-danger mx-2" onClick={reverseText}>Reverse text</button>
                <button type='button' className="btn btn-dark" onClick={removeExtraSpace}>Remove extra space </button>
            </div>
            {
                text.length>0 ? 
            <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
                <h3>Your Text summary</h3>
                <p>{text.split(" ").length} words & {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} minutes takes to read</p>
                <h5>Preview</h5>
                <p>{text}</p>
            </div> : ''
            }
        </>
    )
}
