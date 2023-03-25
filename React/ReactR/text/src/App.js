import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Navbar  from './components/Navbar';
import Text from './components/Text';
import Alert from './components/Alert';


function App() {
  const [mode,setMode]=useState('light')
  const [text,setText] = useState("Enable DarkMode");
  const togglemode=()=>{
    if(mode==='light')
    {
      setMode('dark')
      setText('Enable Lightmode')
      document.body.style.backgroundColor = '#282828';
      showAlert('Dark Mode is enabled')
    }
    else{
      setMode('light')
      setText('Enable Darkmode')
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode is enabled')
    }
  }

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
}
  return (
    <>
    <Navbar mode={mode} text={text} togglemode={togglemode}/>
    <Alert alert={alert}/>
    <Text mode={mode} showAlert={showAlert} heading='Text Analyser'/>
    </>
  );
}

export default App;
