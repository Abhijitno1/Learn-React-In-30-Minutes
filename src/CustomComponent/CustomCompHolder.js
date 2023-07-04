import {useState, useRef, useEffect} from 'react';
import CustomSelect from './CustomSelect';
import CustomCheckSelect from './CustomCheckSelect';

//https://stackoverflow.com/questions/66664209/how-can-i-use-forwardref-in-react
export default function CustomCompHolder() {
    const ddlCitiesList = useRef();
    const [options, setOptions] = useState();
    const [selectedItem, setSelectedItem] = useState('HP');

    useEffect(()=>{
        setOptions(...[
            {value: 'MH', text: 'Maharashtra', selected: false},
            {value: 'AP', text: 'Telangana', selected: false},
            {value: 'UP', text: 'Uttaranchal', selected: false},
            {value: 'HP', text: 'Himachal Pradesh', selected: false},
            {value: 'BI', text: 'Bihar', selected: false},
            {value: 'WB', text: 'West Bengal', selected: false},
        ]);
    }, []);
    

    function setSelectedValueStates1(e) {
        let selItem = prompt("Enter Selected Item value");
        setSelectedItem(selItem);
    }
    function getSelectedValueStates1(whichValue) {
        alert(whichValue);
    }
    function setSelectedValueStates2(whichValues) {
        let selItems = prompt("Enter Selected Item values");
        selItems = selItems.split(',');
        for (var i=0; i<options.length; i++) {
            selItems = options[i]
        }
    }
    function getSelectedValueStates2() {
        let result = ddlCitiesList.current.getSelectedValues();
        alert("Selected values are " + result);
    }

    return (
        <>
            <hr/>
            <div>
                <label htmlFor="statesList">States</label>&nbsp;&nbsp;
                <CustomSelect name="statesList" selValue={selectedItem} valueSelected={getSelectedValueStates1} options={options}  />
                <div style={{marginLeft: '2rem', display:'inline-block'}}>
                <button type="button" class="btn btn-primary" onClick={setSelectedValueStates1}>Set Selected Value</button>
                </div>
            </div>
            <hr/>
            <div>
                <label htmlFor="citiesList">States 2</label>&nbsp;&nbsp;
                <CustomCheckSelect name="citiesList" options={options} ref={(el)=>(ddlCitiesList=el)} />
                <div style={{marginLeft: '2rem', display:'inline-block'}}>
                <button type="button" class="btn btn-primary" onClick={setSelectedValueStates2}>Set Selected Values</button>
                <button type="button" class="btn btn-success" onClick={getSelectedValueStates2} style={{marginLeft: '1rem'}}>Get Selected Values</button>
                </div>
            </div>
            <hr/>
        </>
    );
}