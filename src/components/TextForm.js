import React, {useState} from "react";


export default function TextForm(props) {


   const handleUpClick = ()=>{
       console.log('uppercase was clicked'+ text);
      let newText = text.toUpperCase();
       setText('you have clicked on handleupclick')
  setText(newText)
  props.showAlert('Converted to uppercase', 'success');
    }
      
   const handleLoClick = ()=>{
    console.log('lowercase was clicked'+ text);
   let newText = text.toLowerCase();
    setText('you have clicked on handleLoclick')
    setText(newText)
    props.showAlert('Converted to lowerCase', 'success');
 }
 const handleClearClick = ()=>{
    console.log('clear'+ text);
   let newText = "";
    setText('you have clicked on clear')
    setText(newText)
    props.showAlert('All Clear', 'success');
 }
 const handleUndoClick = ()=>{
    console.log('undo'+ text);
   let newText = text
   newText = newText.slice(0, -1)
    setText('you have clicked on undo')
    setText(newText)
    props.showAlert('undo', 'success');
 }
 const handleCopy = ()=>{
  console.log('copy'+ text);
 let newText = document.getElementById('myBox')
 newText.select();
 navigator.clipboard.writeText(newText.value)
 document.getSelection().removeAllRanges();
 props.showAlert('Copied', 'success');

  // setText('you have clicked on copy')
  // setText(newText)
}

   const handleOnChange = (event)=>{
    console.log('clicked onchange');
    setText(event.target.value)
    
}

   
    const [text, setText] = useState('');
   // text = 'new text'//wrong way to change the state
   // setText("new text")//right way to change the state
 return (
     <>
      <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>

    <h1 className="mb-3">{props.heading}</h1>
  <div className="mb-3" >
    <textarea value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#28518e':'white',color: props.mode==='dark'?'white':'#042743'}} className="form-control" id="myBox" rows='8'></textarea>
  </div>
 
<button disabled={text.length===0} onClick={handleUpClick} className="btn btn-primary mx-2 my-1">convert to upperCase</button>
<button disabled={text.length===0} onClick={handleLoClick}  className="btn btn-primary mx-2 my-1">convert to lowerCase</button>
<button disabled={text.length===0} onClick={handleUndoClick}  className="btn btn-primary mx-2 my-1">Undo</button>
<button disabled={text.length===0} onClick={handleClearClick} className="btn btn-primary mx-2 my-2">Clear</button>
<button disabled={text.length===0} onClick={handleCopy}  className="btn btn-primary mx-2 my-2 my-1">Copy</button>

 



 </div>
 <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
     <h2>Your text summary</h2>
     {/* <p>{text.split(" ").length-1} words, {text.length}characters</p> */}
     <p>{text.length===0?0:text.trim().split(' ').length} words, {text.length}characters</p>
     <p>{0.008* text.split(" ").length} minutes to read these words</p>
 <h2>preview</h2>
 <p>{text.length>0?text: "Nothing to preview here!"}</p>
 </div>
  </>
 )
}

