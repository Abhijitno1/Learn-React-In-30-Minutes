import React, {useRef, useState} from 'react';
import axios from 'axios';

const addlStyle = {
    display: 'inline-block',
    width: 'auto',
    margin: '0 1rem'
};

export default function Translator() {
    const txtWhiteboardRef = useRef();
    //https://cloud.google.com/translate/docs/languages
    const languages = {
        en: 'English',
        hi: 'Hindi',
        mr: 'Marathi',
        fr: 'French',
        ja: 'Japanese',
        de: 'German',
        es: 'Spanish',
        ru: 'Russian'
    };
    const [fromLanguage, setFromLanguage] = useState('en');
    const [toLanguage, setToLanguage] = useState('mr');
    const [fromText, setFromText] = useState();
    const [toText, setToText] = useState();

    function fromLanguageChanged(e) {
        setFromLanguage(e.target.value);
    }

    function toLanguageChanged(e) {
        setToLanguage(e.target.value);
    }

    function fromTextChanged(e) {
        setFromText(e.target.value);
    }

    function executeTranslation() {
        const encodedParams = new URLSearchParams();
        encodedParams.append("q", fromText);
        encodedParams.append("target", toLanguage);
        encodedParams.append("source", fromLanguage);
        

        const options = {
            method: 'POST',
            url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
            headers: {
              'content-type': 'application/x-www-form-urlencoded',
              'Accept-Encoding': 'application/gzip',
              'X-RapidAPI-Key': '3bffb589bamshe663ba8eeaec494p1067edjsnf23d4fdc1c55',
              'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
            },
            data: encodedParams
          };
        
        axios.request(options).then(function (response) {
            setToText(response.data.data.translations[0].translatedText);
        }).catch(function (error) {
            console.error(error);
        });
  
    }

    return (
        <>
            <div class="card">
                <div class="card-body">
                    Translate <label for="fromLanguage">From Language</label>
                    <select name="fromLanguage" class="form-select" style={addlStyle} value={fromLanguage} onChange={fromLanguageChanged}>
                        { Object.keys(languages).map((langCode, index)=>{
                            return <option key={langCode} value={langCode}>{languages[langCode]}</option>
                        })}
                    </select>
                    <label for="toLanguage">To Language</label>
                    <select name="toLanguage" class="form-select" style={addlStyle} value={toLanguage} onChange={toLanguageChanged}>
                        { Object.keys(languages).map((langCode, index)=>{
                            return <option key={langCode} value={langCode}>{languages[langCode]}</option>
                        })}
                    </select>
                    <button className="btn btn-primary" onClick={executeTranslation}>Go</button>
                </div>
            </div>
            <div className="playground">
                <div className="testresultswrapper">
                    <textarea id="txtWhiteboard" title="Translate from" ref={txtWhiteboardRef} value={fromText} onChange={fromTextChanged}></textarea>
                </div>
                <div className="testresultswrapper">
                    <textarea id="txtResults" title="Translate to" readOnly={true} value={toText}></textarea>
                </div>
            </div>
        </>
    );
}