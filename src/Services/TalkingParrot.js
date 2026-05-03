export default function TalkingParrot() {
    //Ref: https://jsfiddle.net/gal007/Lete523g/
    //Ref: https://www.smashingmagazine.com/2017/02/experimenting-with-speechsynthesis/
    //Ref: https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance

    var msg = new SpeechSynthesisUtterance();
    //msg.volume = parseInt(params.volume); // 0 to 1
    msg.rate = 1; // 0.1 to 10
    msg.pitch = 1; //0 to 2

    var voices = [];
    var voiceCodes = {
        "en": "en-US",
        "es": "es-ES",
        "de": "de-DE",
        "fr": "fr-FR",
        "it": "it-IT",
        "hi": "hi-IN",
        "mr": "mr-IN",
        "gu": "gu-IN"
    };
    var speechSynthesis = window.speechSynthesis;
    function supported() {
        return !!speechSynthesis;
    }
    if (supported()) {
        setTimeout(function () {
            voices = speechSynthesis.getVoices();
            /*voices.forEach(function (voice, i) {
                var name = voice.name + '|' + (voice.default ? '(default)' : '');
                console.log(name, voice.lang);
            });*/
        }, 500);
    }
    else
        throw new Error('SpeechSynthesis is not supported in this browser');

    var output = {
        speak: function (language, text2Speak, speed) {
            msg.lang = voiceCodes[language];
            let selectedVoice = voices.find((v) => v.lang === voiceCodes[language]);
            if (!selectedVoice && language === 'mr') //Special handling for marathi
            {
                selectedVoice = voices.find((v) => v.lang === 'hi-IN');
                msg.lang = 'hi-IN';
            }
            else if (!selectedVoice) {
                selectedVoice = voices.find((v) => v.lang === 'en-US');
                if (!selectedVoice) selectedVoice = voices[3]; //is en-US in chrome. This is a workaround to ensure that we get en-US voice even if the browser does not support language based voice selection
                msg.lang = 'en-US';
            }
            msg.rate = speed || 1;
            msg.voice = selectedVoice;
            msg.text = text2Speak;
            speechSynthesis.speak(msg);
        },
        onSpeechEnd: function () { }
    };
    msg.onend = function () {
        output.onSpeechEnd();
    }
    msg.onerror = function (e) {
        console.error(e);
        output.onSpeechEnd();
    }

    output.stopTalking = function () {
        speechSynthesis.cancel();
    }

    output.pauseTalking = function () {
        speechSynthesis.pause();
    }

    output.resumeTalking = function () {
        speechSynthesis.resume();
    }

    return output;
}
