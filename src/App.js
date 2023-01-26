import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import Footer from './components/Footer';
import { useState } from 'react';
import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')  //Initially dark mode disabled
  const [btnText, setBtnText] = useState('Enable Dark Mode')
  const [alert, setAlert] = useState(null)

  function showAlert(message, type){
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(()=>{
      setAlert(null)
    },2000)
  }

  function toggleMode(){
    if(mode === 'light'){
      setMode('dark')
      setBtnText('Disable Dark Mode')
      document.body.style.backgroundColor = 'black'
      showAlert('Dark mode has been enabled','success')
    }else{
      setMode('light')
      setBtnText('Enable Dark Mode')
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode has been enabled', 'success')
    }
  }

  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} btnText={btnText} toggleMode={toggleMode}  />
      <Alert alert={alert}/>
      <div className="container my-3" >
      <Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}  />
          </Route>
      </Switch>
      </div>
      <Footer mode={mode} />
    </Router>  
    </>
  );
}

export default App;
