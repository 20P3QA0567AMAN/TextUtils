import React, { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import Alert from './components/Alert';

function App() {
  const [mode , setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=> {
   setAlert({
    msg : message,
    type : type
   })
   setTimeout(() => {
    setAlert(null);
   },1500);
  }
  const toggleMode = ()=> {
    
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor ='#111960f7';
      showAlert("Dark mode has been enabled", "success");
    } 
    else {
      setMode('ligth');
      document.body.style.backgroundColor ='white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
    <Navbar mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} />
    <div className='container'>
      <Textarea mode={mode} showAlert={showAlert}/>
    </div>
    
    
    </>
  );
}

export default App;
