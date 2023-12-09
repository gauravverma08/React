import React, {useState} from 'react'

export default function Textapp(props) {

    let[text, futuretext]=useState("Enter as you like..");

    let buttonclick=()=>{
        let newtext = text.toUpperCase();
        futuretext(newtext);
    }

    let changetext=(event)=>{
        futuretext(event.target.value);
    }
  return (
    <>
        <div className="container">
        <div class="mb-3">
  <h4>Text Editor Applicatiion</h4>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={changetext}></textarea>
  <button className="btn btn-primary" onClick={buttonclick}> click here to uppercase</button>
  <p>{text.length}: words</p>
  <p>{text.split(" ").length}</p>
</div>
</div>
    </>
  )
}
