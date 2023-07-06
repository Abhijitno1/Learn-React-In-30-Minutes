import {memo} from 'react';

function Colors(props) {
    console.log('Colors component got rendered');

    return (
        <ul>
            { props.colorNames.map((name, index) => 
                <li key={index}>{name}</li>
            )}
        </ul>
    );
}

export default memo(Colors);