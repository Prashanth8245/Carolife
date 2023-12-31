// import logo from './logo.svg';
import './App.css';
import Register from './Components/Authorized/Register';
import Home from './Components/Home/Home';
import {BrowserRouter, Route, Routes}from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/login'  element={<Register/>} /> 
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
