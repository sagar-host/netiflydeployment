import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";

import {
  BrowserRouter as Router,
  Switch,
  Route,

 
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //whether dark mode enabled or not
  const [alert, setAlert] = useState(null); 

  const showAlert = (message, type)=>{
   setAlert({
     msg:message,
     type: type
   })
   setTimeout(() => {
     setAlert(null)
   }, 2000);

 }
 const toggleMode2 = () =>{
   if (mode === 'light'){
     setMode("pink")
     document.body.style.backgroundColor = 'pink'
 document.title = 'teaxtUi - Pink mode'
 setInterval(() => {
  document.title = 'Pink mode is Amazing'
  document.body.style.backgroundColor = 'green'

 }, 1500);
 setInterval(() => {
  document.title = 'Install Pink mode'
  document.body.style.backgroundColor = 'blue'
 }, 2000);
    
   }
   else{
setMode('light');
document.body.style.backgroundColor = "white";

   }
 }

 const removeBodyClasses = ()=>{
   document.body.classList.remove('bg-light')
   document.body.classList.remove('bg-dark')
   document.body.classList.remove('bg-warning')
   document.body.classList.remove('bg-danger')
   document.body.classList.remove('bg-success')


 }

  const toggleMode = (cls) => {
    removeBodyClasses();
    // console.log(cls);
    document.body.classList.add('bg-'+cls)
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert('Dark Mode Enabled', 'sucess')
      // document.title = 'teaxtUi - Dark mode'
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert('Bright Mode Enabled', 'sucess')
    }
  };

  return (
    <>
      {/* <Navbar title="textui" aboutText="About Us"/> */} 
       {/* <Navbar/> */}
      <Router>
      <Navbar title="textUi" mode={mode} toggleMode={toggleMode} toggleMode2={toggleMode2} />
      <Alert alert={alert} />
      <div className="container">
     
      <Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          <Route exact path="/">
          <TextForm showAlert ={showAlert} heading="Try mytextui- Word Counter, Character Counter, Copy Text" my-3 mode={mode} />

          </Route>
        </Switch>
      </div>
      </Router>
    </>
  );
}

export default App;
