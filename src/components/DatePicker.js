import React, {Component} from 'react';

class DatePicker extends Component {
    constructor() {
        super();
        //this.state = {date : new Date()};
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onChangeHandler(event){
        this.props.onChangeEvent(event.target.value);
    }

    render() {
        return <input type="date" onChange={this.onChangeHandler}/>;
    }
}

export default DatePicker;