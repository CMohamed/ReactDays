import React, {Component} from 'react';

class DatePicker extends Component {
    constructor() {
        super();
        this.state = {date : new Date()};
    }
    render() {
        // eslint-disable-next-line react/react-in-jsx-scope
        return <input type="date"/>;
    }
}

export default DatePicker;