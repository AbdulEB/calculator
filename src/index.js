import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.id}
        </button>
    );
}

class Calculator extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            calcText: ''
        };
        //this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {

        switch(event){
            case '=':
                this.setState({
                    calcText: eval(this.state.calcText)
                });
                break;
            case 'CE':
                this.setState({
                    calcText: this.state.calcText.substring(0, this.state.calcText.length - 1)
                });
                break;
            case 'C':
                this.setState({
                    calcText: ''
                });
                break;
            default:
                this.setState({
                    calcText:  this.state.calcText + event
                });
                break;
        }
    }

    renderButton(i, val) {
        return (<Square
            id={i}
            val={val}
            onClick={() => this.handleClick(val)}
        />);
    }

    render() {
        return (
            <div className="main">
                <div className="board-row">
                    <input className="board-input"
                        disabled={true}
                        value={this.state.calcText}
                        placeholder={'0'}
                        />
                </div>
                <div className="board-row">
                    {this.renderButton("CE", "CE")}
                    {this.renderButton("C", "C")}
                    {this.renderButton("%", "%")}
                    {this.renderButton("÷", "/")}
                </div>
                <div className="board-row">
                    {this.renderButton(7, "7")}
                    {this.renderButton(8, "8")}
                    {this.renderButton(9, "9")}
                    {this.renderButton("x", "*")}
                </div>
                <div className="board-row">
                    {this.renderButton(4, "4")}
                    {this.renderButton(5, "5")}
                    {this.renderButton(6, "6")}
                    {this.renderButton("-", "-")}
                </div>
                <div className="board-row">
                    {this.renderButton(1, "1")}
                    {this.renderButton(2, "2")}
                    {this.renderButton(3, "3")}
                    {this.renderButton("+", "+")}
                </div>
                <div className="board-row">
                    {this.renderButton("±", "±")}
                    {this.renderButton("0", "0")}
                    {this.renderButton(".", ".")}
                    {this.renderButton("=", "=")}
                </div>
            </div>
        );
    }
}
ReactDOM.render(
    <Calculator />,
    document.getElementById('root')
);
