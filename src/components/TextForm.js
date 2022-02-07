import React, { useState } from 'react'



export default function TextForm(props) {


    const [text, setText] = useState('');
    
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper case", 'success')

    }
    const handleLwClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower case", 'success')

    }

    const handleClearClick = () => {
        setText('');
        props.showAlert("Text has been cleared", 'success')
    }

    const handleCopyClick = () => {
        var copyText = document.getElementById("myBox");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);
        props.showAlert("Text copied", 'success')
    }

    const handleExtraSpaceClick = () => {
        var splitText = text.split(/[ ]+/)
        setText(splitText.join(" "))
        props.showAlert("Space removed", 'success')
    }

    const handleOnchange = (event) => {
        setText(event.target.value);

    }



    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#010c16' }}>
                <h1 >{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#010c16' }} onChange={handleOnchange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-dark mx-3" onClick={handleUpClick}>convert to uppercase</button>
                <button className="btn btn-dark mx-3" onClick={handleLwClick} >convert to lowercase</button>
                <button className="btn btn-dark mx-3" onClick={handleCopyClick} >Copy Text</button>
                <button className="btn btn-dark mx-3" onClick={handleExtraSpaceClick} >Remove Extra Space</button>
                <button className="btn btn-dark mx-3" onClick={handleClearClick} >Clear Text</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#010c16' }}>
                <h2>Text Summary</h2>
                <p> Your text has {text.length} characters and {(text.split(" ").length - 1)} words</p>
                <p> Your text can be read in {0.008 * (text.split(" ").length - 1)} minutes</p>
                <h2>Text Preview</h2>
                <p> {text === "" ? 'Write something in the text area to get a summary' : text}</p>

            </div>


        </>
    )
}
