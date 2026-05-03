import React, {useState, useEffect, useRef} from "react";
import TalkingParrot from '../Services/TalkingParrot';

const wrapperDivStyle = {
    width: '90%',
    margin: '0 auto',
    marginTop: '1rem'
};
const userTextStyle = {
    width: '100%',
    height: '50vh'
};
var talkObject;

export default function Text2Speech() {
    const userTextRef = useRef();
    const [userText, setUserText] = useState();
    const [speed, setSpeed] = useState(1);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    //Things to happen on load of component
    useEffect(initialize, []);

    function initialize() {
        talkObject = TalkingParrot();
        talkObject.onSpeechEnd = function() {
            userTextRef.current.disabled = false;
            setIsPlaying(false);
            setIsPaused(false);
        }
    }

    function textChanged(e) {
        setUserText(e.target.value);
    }

    function speedChanged(e) {
        setSpeed(e.target.value);
    }

    function playDialog() {
        userTextRef.current.disabled = true;
        setIsPlaying(true);
        talkObject.speak('en-US', userText, speed);
    }

    function pauseDialog() {
        if (!isPaused) {
            talkObject.pauseTalking();
            setIsPaused(true);
        }
        else {
            talkObject.resumeTalking();
            setIsPaused(false);
        }
    }

    function shutUp() {
        talkObject.stopTalking();
        userTextRef.current.disabled = false;
        setIsPlaying(false);
        setIsPaused(false);
    }

    return (
        <div style={wrapperDivStyle}>
            <textarea style={userTextStyle} value={userText} onChange={textChanged} ref={userTextRef}></textarea>
            <label htmlFor="speed">Speed</label>
            <input type="number"  min="0.5" max="3" step="0.5" value={speed} onChange={speedChanged}></input>
            <button style={{marginLeft: '1rem'}} onClick={playDialog} >Read</button>
            <button style={{marginLeft: '1rem'}} onClick={pauseDialog} >{isPaused ? 'Resume' : 'Pause'}</button>
            <button style={{marginLeft: '1rem'}} onClick={shutUp}>Stop</button>
        </div>
    )
}
