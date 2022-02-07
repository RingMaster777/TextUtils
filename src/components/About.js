import React from 'react'


export default function About(props) {

  let myStyle ={
    color: props.mode === 'dark' ? 'white' : '#010c16', 
    backgroundColor: props.mode === 'dark' ? '#010c16' : 'white',
    border: '2px solid',
    borderColor: props.mode === 'dark' ? 'white': '# 010c16' 
  }
  

  return (
    <>
      <div className={`container my-3 text-${props.mode==="dark" ? 'white': 'black'} `} >
        <h1 className="my-3 ">{props.about}</h1>
      </div>

      <div className="container " >
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Analyze Your Text</strong>
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={myStyle}>
                This will help to analyze your text
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <strong>Free To use</strong>
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={myStyle}>
                It is free to use which is honestly hard to find these days
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Developer</strong>
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={myStyle}>
                TextUtil is a utility based website that has been created by Rashik Mahmud with the help of Coding with Harry and some random dudes from youtube who have bunch of different names which I can't remember. Sorry </div>
            </div>
          </div>
        </div>

      </div>

    </>
  )
}
