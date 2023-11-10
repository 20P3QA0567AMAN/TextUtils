import React, { useState } from "react";

export default function Textarea(props) {

  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const copyText = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("coppied to clipboard!" , "success");
  }

  const upperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase", "success");
  };

  const lowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase", "success");
  };
  const reset = () => {
    let newText = "";
    setText(newText);
    props.showAlert("text cleared", "success");
  };

  return (
    <div>
      <div className="my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h1>Enter text here </h1>
        <textarea
          className="form-control"
          id="myBox"
          value={text}
          style={{backgroundColor: props.mode === 'dark' ? '#111960f7' : 'white',color: props.mode === 'dark' ? 'white' : 'black'}}
          onChange={handleOnChange}
          rows="8"
        ></textarea>
      </div>
      <button disabled ={text.length === 0}  className="btn btn-primary mx-2 my-2" onClick={upperCase}>
        Convert to Uppercase
      </button>
      <button disabled ={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={lowerCase}>
        Convert to lowercase
      </button>
      <button disabled ={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={reset}>
        Reset
      </button>
      <button disabled ={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={copyText}>
        Copy Text
      </button>
      <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}} >
        <h1>Text Summary</h1>
        {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters.
      </div>
    </div>
  );
}
