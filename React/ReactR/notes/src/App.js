import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Navbar from './components/Navbar';
import News from './components/News'
import Login from './components/Login'
import Signup from './components/Signup'
import Alert from './components/Alert'
import LoadingBar from 'react-top-loading-bar'
function App() {
  const pageSize=9;
  const country='in';
  const [progress, setProgress] = useState(0);
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
}
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      />
    <Alert alert={alert}/>
    <div className='container'>
    <Routes>
    <Route exact path="/" element={<Login showAlert={showAlert}/>}/>
    <Route exact path="/login" element={<Login showAlert={showAlert}/>}/>
    <Route exact path="/signup" element={<Signup showAlert={showAlert}/>}/>
    <Route exact path="/business" element={<News key="business" setProgress={setProgress} pageSize={pageSize} country={country} category='business'/>}/>
    <Route exact path="/entertainment" element={<News key="entertainment" setProgress={setProgress} pageSize={pageSize} country={country} category='entertainment'/>}/>
    <Route exact path="/general" element={<News key="general" setProgress={setProgress} pageSize={pageSize} country={country} category='general'/>}/>
    <Route exact path="/health" element={<News key="health" setProgress={setProgress} pageSize={pageSize} country={country} category='health'/>}/>
    <Route exact path="/science" element={<News key="science" setProgress={setProgress} pageSize={pageSize} country={country} category='science'/>}/>
    <Route exact path="/sports" element={<News key="sports" setProgress={setProgress} pageSize={pageSize} country={country} category='sports'/>}/>
    <Route exact path="/technology" element={<News key="technology" setProgress={setProgress} pageSize={pageSize} country={country} category='technology'/>}/>
    </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
