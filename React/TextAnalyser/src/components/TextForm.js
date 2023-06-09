import React, {useState} from 'react'
// import SpeechSynthesisUtterance from 'speechsynthesisutterance'
export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLowClick = ()=>{ 
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleClearClick = ()=>{ 
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }
    
    const handleOnChange = (event)=>{
        setText(event.target.value) 
    }
    
    const speak = () => {
        let msg = new SpeechSynthesisUtterance(text);
        const toogle = document.getElementById("toggle");
        if ((toogle.textContent === "Speak")) {
          window.speechSynthesis.speak(msg);
          toogle.textContent = "Stop";
          console.log("play");
        } else {
          toogle.textContent = "Speak";
          window.speechSynthesis.cancel();
          console.log("stop");
        }
      };

    const downloadFile = () => {
        const link = document.createElement("a");
        const content = document.querySelector("textarea").value;
        const file = new Blob([content], { type: 'text/plain' });
        link.href = URL.createObjectURL(file);
        link.download = "sample.txt";
        link.click();
        URL.revokeObjectURL(link.href);
     };

     
    const reversed = () => {
        let splitWord = text.split("");
    
        let reverseWord = splitWord.reverse("");
        let joinedWords = reverseWord.join("");
        let newText = joinedWords
    
        setText(newText);
      };

    const handleCopy = () => {
        navigator.clipboard.writeText(text); 
        props.showAlert("Copied to Clipboard!", "success");
    };

    const capitalFirstLetter = () => {
        let tempText = text.split(/[  ]+/);
        let newText="";
        tempText.forEach((e)=>{
            e=e.charAt(0).toUpperCase()+e.slice(1);
            newText=newText+e+" ";
        })
        setText(newText);

    };

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    };

    const [text, setText] = useState(''); 
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#404040'}}> 
            <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-3"> 
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#B3B3B3':'white', color: props.mode==='dark'?'black':'#404040'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick} style={{backgroundColor: props.mode==='dark'?'black':'black', color: props.mode==='dark'?'#B3B3B3':'white'}}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick} style={{backgroundColor: props.mode==='dark'?'black':'black', color: props.mode==='dark'?'#B3B3B3':'white'}}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick} style={{backgroundColor: props.mode==='dark'?'black':'black', color: props.mode==='dark'?'#B3B3B3':'white'}}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy} style={{backgroundColor: props.mode==='dark'?'black':'black', color: props.mode==='dark'?'#B3B3B3':'white'}}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={capitalFirstLetter} style={{backgroundColor: props.mode==='dark'?'black':'black', color: props.mode==='dark'?'#B3B3B3':'white'}}>Capitalize</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces} style={{backgroundColor: props.mode==='dark'?'black':'black', color: props.mode==='dark'?'#B3B3B3':'white'}}>Remove Extra Spaces</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={downloadFile} style={{backgroundColor: props.mode==='dark'?'black':'black', color: props.mode==='dark'?'#B3B3B3':'white'}}>DownloadFile</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={reversed} style={{backgroundColor: props.mode==='dark'?'black':'black', color: props.mode==='dark'?'#B3B3B3':'white'}}>Reverse</button>
            <button disabled={text.length===0} type="submit" onClick={speak} className="btn btn-primary mx-1 my-1" id="toggle" style={{backgroundColor: props.mode==='dark'?'black':'black', color: props.mode==='dark'?'#B3B3B3':'white'}} > Speak</button>

        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
        </>
    )
}