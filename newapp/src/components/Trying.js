import React, { useState } from 'react'

export default function Trying(props) {

    const clicktouppercase=()=>{
        let newtext=text.toUpperCase();
        settext(newtext);
    }

    const handleonchange=(a)=>{
        settext(a.target.value)
    }    


    const clicktolowecase=()=>{
        let newtext1=text.toLowerCase();
        settext(newtext1)
    }


    const[text, settext]= useState("Enter your name..")

  return (
    <div>

<div className='container'>
<form>
<div class="form-group">
    <label for="exampleFormControlTextarea1" class='form-label'>Example textarea</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleonchange}></textarea>

    <button type='button' className='btn btn-primary' onClick={clicktouppercase}> change to uppercase</button>

    <button type='button' className='btn btn-primary' onClick={clicktolowecase}> change to lowercase</button>

    <p>{text.split(" ").length} words and {text.length} characters</p>

    <h1>Preview</h1>
    <p>{text}</p>
  </div>
</form>
</div>

    </div>
  )
}
