import React from 'react';
import ReactDOM from 'react-dom';

class MyApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    handleClick() {
        let counter = this.state.counter;
        counter++;
        this.setState({
            counter : counter
        })
    }
    render() {
        return(
            <div onClick={() => this.handleClick()}>
                <div>This is Simple {this.props.name} Application with state change example</div>
                <div>Click Here; Click Counter : {this.state.counter}</div>
            </div>
        );
    }
}

ReactDOM.render(
<MyApp name='React'/>,
document.getElementById('root'));