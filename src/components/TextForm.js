import React, {useState} from 'react'



export default function TextForm(props) {
    const [Text, settext] = useState('Enter the Text here');
   const HandleUpClick = ()=>
    {
    // console.log("Upper Case button was Clicked "+Text);
     let set = Text.toUpperCase();
    settext(set);
    console.log("Upper Case button was Clicked "+set);
    }

    const HandleLoClick = ()=>
    {
    // console.log("Upper Case button was Clicked "+Text);
     let set = Text.toLowerCase();
    settext(set);
    console.log("Upper Case button was Clicked "+set);
    }
    const Handleonclear = ()=>
    {
    // console.log("Upper Case button was Clicked "+Text);
     let set = Text.toLowerCase();
     set = ' ';
    settext(set);
  
    }
    const Handleonchange = (event)=>
    {
     console.log("Handle to change");
     settext(event.target.value);
    }
   
    
    
  return (

<>

    <div className="container">     
    <h3>{props.Heading}</h3>
      <div className="form-group m">
    <textarea className="form-control" value={Text} onChange = {Handleonchange} id="myBox" rows="10" ></textarea>
        </div>
  <button className="btn btn-primary mx-2" onClick={HandleUpClick}>Convert to UpperCase</button>
  <button className="btn btn-primary mx-2" onClick={HandleLoClick}>Convert to LowerCase</button>
   
  <button className="btn btn-primary mx-2" onClick={Handleonclear}>Exit</button>
  </div>
  <div className="container">
<h1>Your text summary </h1>
<p>Words length = {Text.split(' ').length} and Characer length = {Text.length} </p>
<p>{0.008 * Text.split(' ').length} Minutes required to read</p>
<h2>preview </h2>
<p>{Text}</p>
  </div>
  
</>



  );
}
