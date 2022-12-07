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
export default function Text2Speech() {
    const userTextRef = useRef();
    const [userText, setUserText] = useState();
    const [speed, setSpeed] = useState(1);

    function textChanged(e) {
        setUserText(e.target.value);
    }

    function speedChanged(e) {
        setSpeed(e.target.value);
    }

    function playDialog() {
        playText(userText);
    }

    //Create an instance of utterance object needed to synthesise speech
    const utterance = new SpeechSynthesisUtterance();

    //below is needed to re-enable user textbox for typing after speech is over
    utterance.addEventListener('end', () => {
        userTextRef.current.disabled = false;
    });

    //ToDo: capture and process speed variation input while speaking is going on

    function playText(text) {
        if (speechSynthesis.paused && speechSynthesis.speaking) 
            return speechSynthesis.resume();

        if (speechSynthesis.speaking) return;
        utterance.text = text;
        utterance.rate = speed || 1;
        userTextRef.current.disabled = true;

        speechSynthesis.speak(utterance);
    }

    function pauseDialog() {
        if (speechSynthesis.speaking)
            speechSynthesis.pause();
    }

    function shutUp() {
        speechSynthesis.resume();
        speechSynthesis.cancel();
    }

    return (
        <div style={wrapperDivStyle}>
            <textarea style={userTextStyle} value={userText} onChange={textChanged} ref={userTextRef}></textarea>
            <label htmlFor="speed">Speed</label>
            <input type="number"  min="0.5" max="3" step="0.5" value={speed} onChange={speedChanged}></input>
            <button style={{marginLeft: '1rem'}} onClick={playDialog} >Play</button>
            <button style={{marginLeft: '1rem'}} onClick={pauseDialog} >Pause</button>
            <button style={{marginLeft: '1rem'}} onClick={shutUp}>Stop</button>
        </div>
    )
}
