import { useState } from 'react';
import './App.css'; 
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import Alert from  './components/Alert'; 



function App() {
  const [mode, setMode] =  useState('light');
  // const [alert,setAlert] = useState(null);
  // const showAlert = (message,type)=>{
  //   setAlert({
  //     msg:message,
  //     type:type

  //   })
   
  
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "#042743";
      // setAlert("dark mode has been enabled","success");
    }
    else{
      setMode("dark");
      document.body.style.backgroundColor = "white";
      // setAlert("light mode has been enabled","success");


    }
  }
return (
    //   jsx   is   compile   by   babel
  <>
    <Navbar title="TextUtils2"  mode={toggleMode}/>
    {/* <Alert alert={alert}/> */}
    <div className='container my-3'>
    <TextForm heading="Enter your text to analyze below"/>
    <About/>

    </div>    
  </>
    
);
}

export default App;
