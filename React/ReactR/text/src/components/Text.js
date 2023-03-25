import React,{useState} from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Text = (props) => {
    const {
        transcript,
        listening,
        resetTranscript
      } = useSpeechRecognition();
    

    const [text, setText] = useState('');
    const handleOnChange = (event)=>{
        setText(event.target.value) 
        
    }

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "warning");
    }

    const handleLowClick = ()=>{ 
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "warning");
    }
    
    const handleClearClick = ()=>{ 
        let newText = '';
        setText(newText);
        props.showAlert("Text is cleared!", "warning");
    }
    
    const speak = () => {
        let msg = new SpeechSynthesisUtterance(text);
        const toogle = document.getElementById("toggle");
        if ((toogle.textContent === "Speak")) {
          window.speechSynthesis.speak(msg);
          toogle.textContent = "Stop";
        } else {
          toogle.textContent = "Speak";
          window.speechSynthesis.cancel();
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
        props.showAlert("Converted to uppercase!", "warning");
     };

     
    const reversed = () => {
        let splitWord = text.split("");
    
        let reverseWord = splitWord.reverse("");
        let joinedWords = reverseWord.join("");
        let newText = joinedWords
    
        setText(newText);
        props.showAlert("Text is reversed", "warning");
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
        props.showAlert("Captilize First Letter !", "warning");
    };

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    };
     
    const start=()=>{
        SpeechRecognition.startListening();
        // setText(transcript);
    }

    const reset=()=>{
        resetTranscript();
        setText(transcript);
    }

    return (
        <div className='container my-3'>
            <h1 style={{color:`${props.mode==='dark'?'white':'black'}`}}>{props.heading}</h1>
            <div className="mb-3">
                <FloatingLabel controlId="floatingTextarea2">
                    <Form.Control as="textarea" placeholder="Enter Your Text" value={text} style={{ height: '100px' }} onChange={handleOnChange}/>
                </FloatingLabel>
            </div>
            <Button disabled={text.length===0} variant="primary" className='my-2 mx-2' onClick={handleUpClick}>Convert to Uppercase</Button>
            <Button disabled={text.length===0} variant="primary" className='my-2 mx-2' onClick={handleLowClick}>Convert to Lowercase</Button>
            <Button disabled={text.length===0} variant="primary" className='my-2 mx-2' onClick={handleClearClick}>Clear Text</Button>
            <Button disabled={text.length===0} variant="primary" className='my-2 mx-2' onClick={handleCopy}>Copy Text</Button>
            <Button disabled={text.length===0} variant="primary" className='my-2 mx-2' onClick={capitalFirstLetter}>Capitalize</Button>
            <Button disabled={text.length===0} variant="primary" className='my-2 mx-2' onClick={handleExtraSpaces}>Remove Extra Spaces</Button>
            <Button disabled={text.length===0} variant="primary" className='my-2 mx-2' onClick={downloadFile}>DownloadFile</Button>
            <Button disabled={text.length===0} variant="primary" className='my-2 mx-2' onClick={reversed}>Reverse</Button>
            <Button disabled={text.length===0} id="toggle" variant="primary" className='my-2 mx-2' onClick={speak}> Speak</Button> 
            
            <div className='container my-2'>
            <p>Microphone: {listening ? 'on' : 'off'}</p>
            <Button onClick={start} variant="primary" className='my-2 mx-2'>Start</Button>
            <Button onClick={SpeechRecognition.stopListening} variant="primary" className='my-2 mx-2'>Stop</Button>
            <Button onClick={reset} variant="primary" className='my-2 mx-2'>Reset</Button>
            </div>

            <div className="container">
                <p style={{color:`${props.mode==='dark'?'white':'black'}`}}>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
            </div>

        </div>
    )
}

export default Text
