import React,{useState} from 'react'
import PropTypes from 'prop-types'



export default function TextForm(props) {
    
    const handleUpClick=()=>{
        let  newText= text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase","success");
    }  
    const handleLoClick=()=>{
        let  newText= text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase","success");
    }  
    const handleclearClick=()=>{
        let  newText= '';
        setText(newText)
        props.showAlert("Text cleared","success");
    }  
    const handlereverseClick=()=>{
        let  newText= text.split('').reverse().join('');
        setText(newText)
        props.showAlert("text reversed","success");
    }  
    const handleremoveExtraSpaceClick=()=>{
        let  newText= text.trim().replace(/\s+/g, ' ');
        setText(newText)
        props.showAlert("Extra spaces removed","success");
    }  
    const handlecamelCaseClick=()=>{
        let newText = text
        .toLowerCase()
        .split(/\s+/)
        .map((word, index) =>
            index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
        )
        .join('');
    setText(newText)
    props.showAlert("Converted to camel case","success");
}
const handleDownloadsClick=()=>{
    const blob = new Blob([text], { type: 'text/plain' }); 
    const anchor = document.createElement('a'); 
    anchor.href = URL.createObjectURL(blob); 
    anchor.download = 'textfile.txt'; 
    anchor.click();
    URL.revokeObjectURL(anchor.href);
    props.showAlert("File downloaded","success");
}
    const handleOnChange=(event)=>{
        console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');

  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}} >
        <h1 className='mb-4'>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#02011e':'white',color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8" ></textarea>
        </div >
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Covert to uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Covert to lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlereverseClick}>Reverse Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlecamelCaseClick}>Camel Case</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleremoveExtraSpaceClick}>Remove extra spaces</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleclearClick}>Clear</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleDownloadsClick}>Download as File</button>
        
    
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>
            {text.split(" ").filter((element) => element.length !== 0).length} words and {text.length} characters
        </p>    
        <p>{0.008*text.split(" ").filter((element) => element.length !== 0).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  )
}
