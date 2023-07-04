import React, { useState } from 'react';

export default function ReactForm() {
    const [inputs, setInputs] = useState({
        userName: '',
        age: '',
        gender: 'U',
        myCar: ''
    });

    const handleSubmit = function(event) {
        event.preventDefault();
        console.log(inputs);
    }

    const handleChange = function(event) {
        let controlName = event.target.name;
        let controlValue = event.target.value;
        setInputs(values => ({...values, [controlName]: controlValue}));
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter your name: 
                <input type="text" name="userName" value={inputs.userName}
                    onChange={handleChange}></input>
            </label>
            <br/>
            <label>Enter your Age: 
                <input type="number" name="age" value={inputs.age}
                    onChange={handleChange}></input>
            </label>
            <br/>
            <strong>Select your Gender: </strong> 
            <label>
                <input type="radio" name="gender" checked={inputs.gender=="M"} value="M"
                    onChange={handleChange}></input>
                Male
            </label>
            <div style={{display: 'inline-block', width: "15px"}}></div>
            <label>
                <input type="radio" name="gender" checked={inputs.gender=="F"} value="F"
                    onChange={handleChange}></input>
                Female
            </label>
            <div style={{display: 'inline-block', width: "15px"}}></div>
            <label>
                <input type="radio" name="gender" checked={inputs.gender=="U"} value="U"
                    onChange={handleChange}></input>
                Unknown
            </label>
            <br />
            <label>Select your Car: 
                <select name="myCar" value={inputs.myCar} onChange={handleChange}>
                    <option></option>
                    <option value="Honda">Honda</option>
                    <option value="Hyundai">Hyundai</option>
                    <option value="Maruti">Maruti</option>
                </select>
            </label>
            <br/>
            <button type="submit">Submit</button>
        </form>
    );
}