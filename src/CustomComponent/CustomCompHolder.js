import {useState} from 'react';
import CustomSelect from './CustomSelect';
import CustomCheckSelect from './CustomCheckSelect';


export default function CustomCompHolder() {
    //const [checkedItems, setCheckedItems] = useState();
    var checkedItems = 'HP';

    let options = [
        {value: 'MH', text: 'Maharashtra', selected: false},
        {value: 'AP', text: 'Telangana', selected: false},
        {value: 'UP', text: 'Uttaranchal', selected: false},
        {value: 'HP', text: 'Himachal Pradesh', selected: false},
        {value: 'BI', text: 'Bihar', selected: false},
        {value: 'WB', text: 'West Bengal', selected: false},
    ];

    function displayCheckedItems() {
        //return checkedItems.map(itm => itm.text).join(', ');
    }

    return (
        <>
            <div>
                <label htmlFor="statesList">States</label>&nbsp;&nbsp;
                <CustomSelect name="statesList" selValue={checkedItems} options={options}  />
            </div>
            <div>
                <label htmlFor="citiesList">States 2</label>&nbsp;&nbsp;
                <CustomCheckSelect name="citiesList" selValue={checkedItems} options={options}  />
            </div>
            <div>
                Checked items passed through props: <span>{checkedItems}</span>
            </div>
        </>
    );
}