import React, {Component} from 'react';
import DatePicker from "./DatePicker";

class Main extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <DatePicker/>
                <span className="spliter"> - </span>
                <DatePicker/>
                <span className="spliter"> = </span>
                <hr/>
                <button>Calculate</button>
            </div>
        );
    }
}

export default Main;