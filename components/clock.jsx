import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            time: new Date()
        };
        
        this.tick = this.tick.bind(this);
    }
    
    tick() {
        this.setState({
            time: new Date()
        });
    }
    
    componentDidMount() {
        this.tickTimer = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(tickTimer);
    }

    render() {
        return (
            <div className="clock-div">
                <h1>Sandi's Clock</h1>
                <p>{this.state.time.toTimeString()}</p>
            </div>
        )
    }
}

export default Clock;