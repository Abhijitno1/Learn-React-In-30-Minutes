import {useState} from 'react';
import CustomSelect from './CustomSelect';

export default function CustomCompHolder() {

    let options = [
        {value: 'MH', text: 'Maharashtra', selected: false},
        {value: 'AP', text: 'Telangana', selected: false},
        {value: 'UP', text: 'Uttar Pradesh', selected: false},
        {value: 'HP', text: 'Himachal Pradesh', selected: false}
    ];
    return (
        <>
            <label htmlFor="statesList">States</label>&nbsp;&nbsp;
            <CustomSelect name="statesList" selValue="MH" options={options}  />
        </>
    );
}