import {useState} from 'react';
import CustomSelect from './CustomSelect';
import CustomCheckSelect from './CustomCheckSelect';

export default function CustomCompHolder() {

    let options = [
        {value: 'MH', text: 'Maharashtra', selected: false},
        {value: 'AP', text: 'Telangana', selected: false},
        {value: 'UP', text: 'Uttar Pradesh', selected: false},
        {value: 'HP', text: 'Himachal Pradesh', selected: false}
    ];
    return (
        <>
            <div>
                <label htmlFor="statesList">States</label>&nbsp;&nbsp;
                <CustomSelect name="statesList" selValue="" options={options}  />
            </div>
            <div>
                <label htmlFor="citiesList">Cities</label>&nbsp;&nbsp;
                <CustomCheckSelect name="citiesList" selValue="" options={options}  />
            </div>
        </>
    );
}