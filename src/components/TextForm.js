import React, { useState } from "react";

export default function TextForm(props) {
  console.log(props);
  const [text, setText] = useState("");
  const [wrdLength, setwrdLength] = useState(0);
  const handleUpClick = () => {
    console.log("Upper Case was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case", "success");
  };
  const handleLoClick = () => {
    console.log("Upper Case was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case", "success");
  };
  const handleClearText=()=>{
      let newText="";
      setText(newText);
      props.showAlert("Text Cleared", "success");
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
    if(arr1!==null && arr1!==''){
    setwrdLength(len1);
    }
    else{
        setwrdLength(0);
    }
  };
  
  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            placeholder=".....message"
            style={{backgroundColor: props.mode==='dark'? 'grey': 'white', color: props.mode==='dark'?'white':'black'}}
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

      <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>
          {wrdLength} words and {text.length} characters
        </p>
        <p>{0.008 * wrdLength} Minutes Read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something in the textBox above to preview it here"}</p>
      </div>
    </>
  );
}
