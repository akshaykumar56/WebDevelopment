import React, { useEffect } from 'react'
import {
  Link,
  useLocation
} from "react-router-dom";
import { useNavigate } from 'react-router-dom';


export default function Navbar() {
  let history=useNavigate();
  
const handleLogout=()=>{
  localStorage.removeItem('token');
  history("/login")
}
  let location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">Notes</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
            {!localStorage.getItem('token')?<form className="container d-flex">
              <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
              <Link className="btn btn-primary mx-1" to="/signup" role="button">Signup</Link>
            </form>:<form className='container d-flex'><Link className={`nav-link ${location.pathname === "/general" ? "active" : " "}`} aria-current="page" to="/general">General</Link>
              <Link className={`nav-link ${location.pathname === "/business" ? "active" : " "}`} to="/business">Business</Link>
              <Link className={`nav-link ${location.pathname === "/science" ? "active" : " "}`} to="/science">Science</Link>
              <Link className={`nav-link ${location.pathname === "/entertainment" ? "active" : " "}`} to="/entertainment">Entertainment</Link>
              <Link className={`nav-link ${location.pathname === "/health" ? "active" : " "}`} to="/health">Health</Link>
              <Link className={`nav-link ${location.pathname === "/sports" ? "active" : " "}`} to="/sports">Sport</Link>
              <Link className={`nav-link ${location.pathname === "/technology" ? "active" : " "}`} to="/technology">Technology</Link>
              <button onClick={handleLogout}  className="btn btn-primary mx-1">SignOut</button></form>}
          </div>
        </div>
      </nav>
    </div>
  )
}


