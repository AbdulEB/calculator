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
            calcText: '',
            holder: '0'
        };
        //this.handleClick = this.handleClick.bind(this);
    }



    isOperator(val){
        return  isNaN(val) && !(val == '.');
    }

    handleClick(event) {

        switch(event){
            case '=':
                this.setState({
                    holder: eval(this.state.calcText),
                    calcText: ''
                });
                break;
            case 'CE':
                if(this.state.calcText == '' && this.state.holder != '0') {
                    this.setState({
                        holder: '0'
                    });
                }
                let max = this.state.calcText.length - 1;
                while(!this.isOperator(this.state.calcText[max])){
                    this.setState({
                            calcText: this.state.calcText.substring(0, max)
                        });
                    max--;
                }
                break;
            case 'C':
                this.setState({
                    calcText: '',
                    holder: '0'
                });
                break;
            case 'Back':
                this.setState({
                    calcText: this.state.calcText.substring(0, this.state.calcText.length-1)
                });
                break;
            case '±':
                alert('F OFF');
                break;
            default:
                let text = "";
                if(this.isOperator(event) && this.state.calcText == '')
                    text = this.state.holder + event;
                else
                    text = this.state.calcText + event;

                this.setState({
                    calcText: text
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
                <h1 className="title">
                    Honey Badger Calculator
                </h1>
                <div className="board-row">
                    <input className="board-input"
                        disabled={true}
                        value={this.state.calcText}
                        placeholder={this.state.holder}
                        />
                </div>
                <div className="board-row">
                    {this.renderButton("CE", "CE")}
                    {this.renderButton("C", "C")}
                    {this.renderButton("Back", "Back")}
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
