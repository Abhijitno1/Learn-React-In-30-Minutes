import React, {useState, useEffect, useRef} from "react";
import SpeechRecognition from '../Services/SpeechRecognition';

const wrapperDivStyle = {
    width: '90%',
    margin: '0 auto',
    marginTop: '1rem'
};
const userTextStyle = {
    width: '100%',
    height: '50vh'
};
var recogObject;

export default function Speech2Text() {   
    const userTextRef = useRef();
    const [userText, setUserText] = useState('');

    //Things to happen on load of component
    useEffect(initialize, []);

    function initialize() {
        //console.log('selectedFromLang', selectedFromLang.value);
        recogObject = SpeechRecognition('en-US');
        recogObject.onCollectResult = function(transcript) {
            setUserText(prevtxt => prevtxt + '\n' + transcript);
            userTextRef.current.disabled = false;
        }
    }

    function listenDialog() {
        setUserText('');
        recogObject.startRecording();
        userTextRef.current.disabled = true;
    }

    function stopIt() {
        recogObject.stopRecording();
        userTextRef.current.disabled = false;
    }

    return (
        <div style={wrapperDivStyle}>
            <textarea style={userTextStyle}  ref={userTextRef} value={userText} onChange={(e) => setUserText(e.target.value)}></textarea>
            <button onClick={listenDialog} >Listen & Display</button>
            <button onClick={stopIt} style={{marginLeft: '1rem'}}>Stop Listening</button>
        </div>
    );
}