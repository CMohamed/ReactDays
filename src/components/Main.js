import React, {Component} from 'react';
import DatePicker from "./DatePicker";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date1: null,
            date2: null,
            result: null,
        };
        this.onChangeEventSecond = this.onChangeEventSecond.bind(this);
        this.onChangeEventFirst = this.onChangeEventFirst.bind(this);
        this.onClickEventButton = this.onClickEventButton.bind(this);
    }

    onChangeEventFirst(strDate){
        this.setState({
            date1: new Date(strDate),
        });
    }


    onChangeEventSecond(strDate){
        this.setState({
            date2: new Date(strDate),
        });
    }

    onClickEventButton(){
        if(this.state.date1 == null || this.state.date2 == null){
            this.setState({
                result: 'NaN',
            });
            alert('Il faut specifier les deux dates!')
            return;
        }

        if(isNaN(this.state.date1.getTime()) || isNaN(this.state.date2.getTime())){
            this.setState({
                result: 'NaN',
            });
            alert('La format de l\'un des dates est invalide !')
            return;
        }

        let diff = this.getDiff();
        console.log(this.state);
        this.setState({
            result: diff + ' jours',
        })
    }

    getDiff() {
        let diff = this.state.date1.getTime() - this.state.date2.getTime();
        diff /= 1000;
        diff /= 60 * 60 * 24;
        return Math.abs(diff);
    }

    render() {
        return (
            <div>
                <DatePicker onChangeEvent={this.onChangeEventFirst} />
                <span className="spliter"> - </span>
                <DatePicker onChangeEvent={this.onChangeEventSecond} />
                <span className="spliter"> = {this.state.result}</span>
                <hr/>
                <button onClick={this.onClickEventButton} >
                    Calculate
                </button>
            </div>
        );
    }
}

export default Main;