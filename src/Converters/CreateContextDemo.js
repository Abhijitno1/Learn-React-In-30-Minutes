import {useState, createContext, useContext} from 'react';

const AreaContext = createContext();

export default function CreateContextDemo() {
    const [area, setArea] = useState('AM');

    return (
        <NestedComponent1 area={area}></NestedComponent1>
    );
}

function NestedComponent1(props) {
    return <NestedComponent2 area={props.area}></NestedComponent2>
}

function NestedComponent2(props) {
    return <NestedComponent3 area={props.area}></NestedComponent3>
}

function NestedComponent3(props) {
    return <p>This component is running in {props.area} region</p>
}