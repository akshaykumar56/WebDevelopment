import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Acordion from './components/Acordion'
import Navbar from './components/Navbar'
function App() {
  return (
    <div>
  <Navbar/>
  <div className="container my-3">
  <Acordion/>
  </div>
    
</div>
  );
}

export default App;
