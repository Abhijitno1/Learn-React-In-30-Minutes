import React from 'react';

export default class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.pauseClock = this.pauseClock.bind(this);
        this.state = { 
            curTime: new Date().toLocaleTimeString(),
            isHalted: false
        };
    }

    componentDidMount() {
        console.log('Starting the Clock');
        this.timerId = setInterval(() => this.tick(), 1000);
    }

    //https://www.w3schools.com/react/react_lifecycle.asp
    componentWillUnmount() {
        console.log('Cleaning up resources used by the Clock');
        clearInterval(this.timerId);   
    }

    tick() {
        this.setState({ curTime: new Date().toLocaleTimeString() } );
    }

    pauseClock() {
        this.setState(stt => ({...stt, isHalted: !stt.isHalted}));
        //this.setState({isHalted: !this.state.isHalted});
    }

    shouldComponentUpdate() {
        return !this.state.isHalted;
    }

    render() {
        return <div>
            Current Local Time is {this.state.curTime}
            <button style={{marginLeft: '15px'}} onClick={this.pauseClock}> {this.state.isHalted? 'Resume': 'Pause'}</button>
        </div>
    }
}
