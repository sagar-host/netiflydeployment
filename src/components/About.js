import React, {useState} from 'react';


export default function About() {
  const [myStyle, setmyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  
})
const [Btntext, setBtntext] = useState("Enable Dark Mode");
const toggleStyle= ()=>{
    if(myStyle.color === 'black'){
        setmyStyle({
            color: "white",
            backgroundColor: "black",
            border: '1px solid white'
        })
        setBtntext("Enable Light Mode")
    }else{
        setmyStyle({
            color: "black",
            backgroundColor: "white"
        })
        setBtntext("Enable Dark Mode")


    }
}

    return (
       
         <div className='container'style={myStyle}>
              <h1>About Us</h1>
            <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button style={myStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
            Upper Case
            </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
            <div className="accordion-body">
                <strong>The upper case transformer .</strong> will take any text that you have and will generate all the letters into upper case ones. It will essentially make all lower case letters into CAPITALS (as well as keep upper case letters as upper case letters).

To do this, you simply have to select the text that you need changing and pasting into the box above and then select the UPPER CASE tab.

THIS IS AN EXAMPLE OF UPPER CASE.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
            <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
            Lower Case
            </button>
            </h2>
            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
            <div className="accordion-body">
                <strong>If you are wondering how to uncapitalize text</strong>this is exactly what the lower case text converter will allow you to do - it transforms all the letters in your text into lowercase letters. Simply copy the text that you need generating into lower case and paste the text into the box above and select the ‘lower case’ tab.

this is an example of lower case.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
            <button className="accordion-button collapsed"style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
               Different Operation
            </button>
            </h2>
            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
            <div className="accordion-body">
                <strong>Copy,Undo and clear</strong>
            </div>
            </div>
        </div>
        </div>
        <div className='container my-3'>
        <button onClick={toggleStyle} type="button" className="btn btn-primary">{Btntext}</button>

        </div>
        </div>
    )
}
