function SpeechRecognition(initialLang) {

    const recognition = new window.webkitSpeechRecognition();
    //recognition.interimResults = true;
    recognition.lang = initialLang || "en-US";
    recognition.continuous = true;

    var retObject = {
        isRecording: false,
        changeLanguage: function (langCode) {
            this.stopRecording();
            retObject.isRecording = false;
            recognition.lang = langCode;
            /*setTimeout(() => {
                this.startRecording();
            }, 1000);*/
        },
        onCollectResult: function () { }
    };

    recognition.onresult = (event) => {
        for (let i = event.resultIndex; i < event.results.length; i++) {
            const transcript = event.results[i][0].transcript;
            if (event.results[i].isFinal) {
                if (retObject.isRecording == true) {
                    //console.log(transcript);
                    retObject.onCollectResult(transcript);

                }
            }
        }
    };
    retObject.startRecording = function () {
        if (!retObject.isRecording)
            recognition.start();
        retObject.isRecording = true;
    }
    retObject.stopRecording = function () {
        recognition.abort();
        if (retObject.isRecording)
            recognition.stop();
        retObject.isRecording = false;
    }

    return retObject;
}

export default SpeechRecognition;