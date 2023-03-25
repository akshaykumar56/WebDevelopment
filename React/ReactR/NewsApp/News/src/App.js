import './App.css';
import Navbar from './component/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import News from './component/News'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import {useState } from 'react';
function App() {
  const [progress, setProgress] = useState(0);
  const [country, setCountry] = useState('us');
  const [mode, setMode] = useState('light');
  const [text, setText] = useState('DarkMode');
  const pageSize=9;

  const ToogleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      setText('DarkMode');
      document.body.style.backgroundColor='#2F4F4F';
      document.body.style.color='Red';
    }
    else{
      setMode('light');
      setText('LightMode');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
    }
  }
   
  return (
  <>
  <Navbar setCountry={setCountry} mode={mode} ToogleMode={ToogleMode} text={text}/>
  <BrowserRouter>
  <LoadingBar height={3} color='#f11946' progress={progress} />
  <Routes>
  <Route exact path="/" element={<News setProgress={setProgress} mode={mode} category='general' country={country} pageSize={pageSize}/>}/>
  <Route exact path="/home" element={<News setProgress={setProgress} mode={mode} category='general' country={country} pageSize={pageSize}/>}/>
  <Route exact path="/business" element={<News setProgress={setProgress} mode={mode} category='business' country={country} pageSize={pageSize}/>}/>
  <Route exact path="/entertainment" element={<News setProgress={setProgress} mode={mode} category='entertainment' country={country} pageSize={pageSize}/>}/>
  <Route exact path="/general" element={<News setProgress={setProgress} mode={mode} category='general' country={country} pageSize={pageSize}/>}/>
  <Route exact path="/sports" element={<News setProgress={setProgress} mode={mode} category='sports' country={country} pageSize={pageSize}/>}/>
  <Route exact path="/science" element={<News setProgress={setProgress} mode={mode} category='science' country={country} pageSize={pageSize}/>}/>
  <Route exact path="/technology" element={<News setProgress={setProgress} mode={mode} category='technology' country={country} pageSize={pageSize}/>}/>
  <Route exact path="/health" element={<News setProgress={setProgress} mode={mode} category='health' country={country} pageSize={pageSize}/>}/>
    </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
