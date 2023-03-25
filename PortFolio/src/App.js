import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navs from './component/Navs';
import Project from './component/Project/Project';
import Navbar from './component/Navbar';
import Home from './component/Home1/Home';

import Html from './component/home/HTML/Html';
import Css from './component/home/CSS/Css';
import JavaScript from './component/home/JAVAS/Javas';
import React from './component/home/REACT/React';
import Mongo from './component/home/MONGO/Mongo';
import Python1 from './component/home/Python';
import C from './component/home/DATASTRUCTURE/C';
import Cpp from './component/home/CPP/Cpp';
import AI from './component/home/AI/AI';
import Node from './component/home/Node';
import Express from './component/home/Express';
import SQL from './component/home/SQL';

function App() {
  return (
  <>
  <BrowserRouter>
    <Navbar/>
    <Navs/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
    <Route exact path="/home" element={<Home/>}/>
    <Route exact path="/project" element={<Project/>}/>
    <Route exact path="/home/html" element={<Html/>}/>
    <Route exact path="/home/python" element={<Python1/>}/>
    <Route exact path="/home/css" element={<Css/>}/>
    <Route exact path="/home/javascript" element={<JavaScript/>}/>
    <Route exact path="//home/react" element={<React/>}/>
    <Route exact path="/home/node" element={<Node/>}/>
    <Route exact path="/home/express" element={<Express/>}/>
    <Route exact path="/home/mongo" element={<Mongo/>}/>
    <Route exact path="/home/ai" element={<AI/>}/>
    <Route exact path="/home/c" element={<C/>}/>
    <Route exact path="/home/cpp" element={<Cpp/>}/>
    <Route exact path="/home/sql" element={<SQL/>}/>
    </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
