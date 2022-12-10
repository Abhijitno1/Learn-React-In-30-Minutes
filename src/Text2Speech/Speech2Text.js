import React, {useState, useRef} from "react";

const wrapperDivStyle = {
    width: '90%',
    margin: '0 auto',
    marginTop: '1rem'
};
const userTextStyle = {
    width: '100%',
    height: '50vh'
};

export default function Speech2Text() {
    const [userText, setUserText] = useState('');
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    let recognition = new SpeechRecognition();
    recognition.continuous = false;

    function listenDialog() {
        setUserText('');
        recognition.start();
    }

    recognition.onresult = function(event) {
        var current = event.resultIndex;
        var transcript = event.results[current][0].transcript;
        setUserText(prevtxt => prevtxt + transcript);
    }

    function stopIt() {
        //https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition
        recognition.stop();
        //recognition.abort();
    }

    return (
        <div style={wrapperDivStyle}>
            <textarea style={userTextStyle} value={userText} disabled={true}></textarea>
            <button onClick={listenDialog} >Listen & Display</button>
            <button onClick={stopIt} style={{marginLeft: '1rem'}}>Stop Listening</button>
        </div>
    );
}