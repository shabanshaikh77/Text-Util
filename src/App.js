
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  const [mode,setmode] = useState('light');// Wheather the mode os dark mode or not
 

  const toggleMode = ()=>
  {
    if(mode === 'dark')
    {
      setmode('light');
      document.body.style.background = 'pink';
      
    }
    else{
      setmode('dark');
      document.body.style.background = 'purple';
      

    }
  }
  return (
    
      <>
    < Navbar title="TextUtils" mode={mode} togglemode={toggleMode}/>
    <div className="container my-3">
 {   <TextForm Heading="Enter the text to analize"/> }
    
  { /* <About/>*/}
    </div>
    </>
    
  );
}

export default App;
