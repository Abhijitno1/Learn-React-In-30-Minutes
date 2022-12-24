import {useState} from 'react';
import CustomSelect from './CustomSelect';
import CustomCheckSelect from './CustomCheckSelect';


export default function CustomCompHolder() {
    const [selectedItem, setSelectedItem] = useState('HP');
    const [checkedItems, setCheckedItems] = useState([]);

    let options = [
        {value: 'MH', text: 'Maharashtra', selected: false},
        {value: 'AP', text: 'Telangana', selected: false},
        {value: 'UP', text: 'Uttaranchal', selected: false},
        {value: 'HP', text: 'Himachal Pradesh', selected: false},
        {value: 'BI', text: 'Bihar', selected: false},
        {value: 'WB', text: 'West Bengal', selected: false},
    ];

    function setSelectedValueStates1(e) {
        let selItem = prompt("Enter Selected Item value");
        setSelectedItem(selItem);
    }
    function getSelectedValueStates1(whichValue) {
        alert(whichValue);
    }
    function setSelectedValueStates2(whichValues) {
        let selItem = prompt("Enter Selected Item values");
        setCheckedItems(selItem);
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
                <CustomCheckSelect name="citiesList" selValues={checkedItems} options={options}  />
                <div style={{marginLeft: '2rem', display:'inline-block'}}>
                <button type="button" class="btn btn-primary" onClick={setSelectedValueStates2}>Set Selected Values</button>
                </div>
            </div>
            <hr/>
            <div>
                Checked items passed through props: <span>{checkedItems}</span>
            </div>
            <hr/>
        </>
    );
}