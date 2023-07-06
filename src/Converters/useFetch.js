import {useState, useEffect} from 'react';

const useFetch = function(url) {
    const [data, setData] = useState();

    useEffect(function() {
        fetch(url)
        .then(resp => resp.json())
        .then(result => setData(result));
    }, [url]);
    
    return data;
}

export default useFetch;