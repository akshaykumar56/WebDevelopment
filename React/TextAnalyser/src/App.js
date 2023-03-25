import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
 
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const [text,setText] = useState("Enable DarkMode");
  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#282828';
      setText("Enable LightMode");
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setText("Enable DarkMode");
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
    <Navbar title="TextAnalyse" mode={mode} toggleMode={toggleMode} key={new Date()} text={text} home='Home'/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <TextForm showAlert={showAlert} heading="TextAnalyse" mode={mode}/>
    </div>
    </> 
  );
}

export default App;