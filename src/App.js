import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';
import { useState } from 'react';

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
      <Navbar title="TextUtils" mode={mode} btnText={btnText} toggleMode={toggleMode}  />
      <Alert alert={alert}/>
      <div className="container my-3" >
        <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}  />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
