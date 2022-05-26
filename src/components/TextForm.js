import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [wrdLength, setwrdLength] = useState(0);
  const handleUpClick = () => {
    console.log("Upper Case was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    console.log("Upper Case was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearText=()=>{
      let newText="";
      setText(newText);
  }
  const handleOnchange = (event) => {
    console.log("On change");
    setText(event.target.value);
    let value = event.target.value.trim();
    let arr1=value.split(' ');
    let len=arr1.length;
    let len1=len;
    // arr1=arr1.filter(ele=>ele!="");
    // setwrdLength(arr1.length);
    for(let i=0;i<len;i++){
        if(arr1[i]==='' ){
            len1--;
        }
    }
    if(arr1!=null && arr1!=''){
    setwrdLength(len1);
    }
    else{
        setwrdLength(0);
    }
  };
  
  return (
    <>
      <div className="container">
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={(e)=>handleOnchange(e)}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearText}>
            Clear Text
        </button>
      </div>

      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          {wrdLength} words and {text.length} characters
        </p>
        <p>{0.008 * wrdLength} Minutes Read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
