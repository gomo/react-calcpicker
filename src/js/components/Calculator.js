import React from 'react'
import numeral from 'numeral'
import Button from './Button'
import Rect from '../classes/Rect'

export default class Calculator extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {
      display: props.initialAmount,
      amount: props.initialAmount,
      appendMode: false,
      format: '0,0[.]0[000000000]',
      operator: undefined,
      unit: undefined,
      x: 0,
      y: 0,
    }

    window.onresize = () => this.adjustPosition();
  }

  adjustPosition(){
    if(this.refs.calculator){
      const windowRect = Rect.createWithWindow()
      const buttonRect = Rect.createWithElement(this.props.button);
      const calcRect = Rect.createWithElement(this.refs.calculator, this.state.x, this.state.y);

      let newCalcRect = undefined;
      for (var i = 0; i < this.props.positions.length; i++) {
        const posKey = this.props.positions[i]
        const rect = buttonRect.getRelativeRect(calcRect, posKey)
        if(windowRect.contains(rect)){
          newCalcRect = rect;
          break;
        }
      }

      if(!newCalcRect){
        newCalcRect = windowRect.getRelativeRect(calcRect, Rect.CENTER)
      }

      this.setState({
        x: newCalcRect.transformX,
        y: newCalcRect.transformY,
      });
    }
  }

  inputNumber(number){
    if(this.state.appendMode){
      this.setState({
        display: this.state.display + number,
      })
    } else {
      this.setState({
        appendMode: true,
        display: number,
      })
    }
  }

  onClickNumber(number){
    this.inputNumber(number)
  }

  calc(left, operator, right){
    switch (operator) {
      case '+':
        if(this.state.unit == '%'){
          right = left * (right / 100)
        }

        return  left + right;
      case '-':
        if(this.state.unit == '%'){
          right = left * (right / 100)
        }

        return  left - right;
      case '÷':
        if(this.state.unit == '%'){
          right = right / 100
        }

        return left / right
      case '×':
        if(this.state.unit == '%'){
          right = right / 100
        }

        return left * right
      default:
        throw 'Invalid operator ' + operator + ' specified.';
    }
  }

  execEnter(callback = () => {}){
    let display = this.state.display;
    let amount = this.state.amount;

    if(this.state.operator){
      display = this.calc(parseFloat(amount, 10), this.state.operator, parseFloat(display, 10));
    }

    amount = display;

    this.setState({
      operator: undefined,
      unit: undefined,
      display: display,
      amount: amount,
    }, callback)
  }

  onClickEnter(){
    this.execEnter();
  }

  onClickOperator(operator){
    if(this.state.appendMode){
      this.execEnter(() => {
        this.setState({
          appendMode: false,
          operator: operator,
        })
      })
    } else {
      this.setState({
        operator: operator,
      })
    }
  }

  onClickDecimal(){
    this.inputNumber('.')
  }

  onClickPercent(){
    this.setState({unit: '%'})
  }

  onClickDoubleZero(){
    this.inputNumber('00')
  }

  clear(){
    this.setState({
      display: '0',
      appendMode: false,
    })
  }

  allClear(){
    this.setState({
      display: '0',
      amount: '0',
      operator: undefined,
      appendMode: false,
    })
  }

  componentDidMount(){
    this.adjustPosition()
  }

  render(){
    const locale = numeral.localeData();
    return (
      <div ref="calculator" className="react-currency-calculator__calculator" style={{transform: `translate(${this.state.x}px, ${this.state.y}px)`}}>
        <div className="react-currency-calculator__calculator-header">
          <Button classType="close" display="×" onClick={this.props.onClickClose} />
        </div>
        <div className="react-currency-calculator__calculator-display">
          <div className="react-currency-calculator__calculator-display-operator">{this.state.operator}</div>
          <div className="react-currency-calculator__calculator-display-number">
            {numeral(this.state.display).format(this.state.format)}{this.state.unit}
          </div>
        </div>
        <div className="react-currency-calculator__calculator-buttons">
          <Button classType="clear" display="AC" onClick={() => this.allClear()} />
          <Button classType="clear" display="C" onClick={() => this.clear()} />
          <Button classType="unit" display="%" onClick={() => this.onClickPercent()} />
          <Button classType="func" display="÷" onClick={display => this.onClickOperator(display)} />
        </div>
        <div className="react-currency-calculator__calculator-buttons">
          <Button classType="number" display="7" onClick={display => this.onClickNumber(display)} />
          <Button classType="number" display="8" onClick={display => this.onClickNumber(display)} />
          <Button classType="number" display="9" onClick={display => this.onClickNumber(display)} />
          <Button classType="func" display="×" onClick={display => this.onClickOperator(display)} />
        </div>
        <div className="react-currency-calculator__calculator-buttons">
          <Button classType="number" display="4" onClick={display => this.onClickNumber(display)} />
          <Button classType="number" display="5" onClick={display => this.onClickNumber(display)} />
          <Button classType="number" display="6" onClick={display => this.onClickNumber(display)} />
          <Button classType="func" display="-" onClick={display => this.onClickOperator(display)} />
        </div>
        <div className="react-currency-calculator__calculator-buttons">
          <Button classType="number" display="1" onClick={display => this.onClickNumber(display)} />
          <Button classType="number" display="2" onClick={display => this.onClickNumber(display)} />
          <Button classType="number" display="3" onClick={display => this.onClickNumber(display)} />
          <Button classType="func" display="+" onClick={display => this.onClickOperator(display)} />
        </div>
        <div className="react-currency-calculator__calculator-buttons">
          <Button classType="number" display="0" onClick={display => this.onClickNumber(display)} />
          <Button classType="number" display="00" onClick={() => this.onClickDoubleZero()} />
          <Button classType="number" display={locale.delimiters.decimal} onClick={() => this.onClickDecimal()} />
          <Button classType="enter" display="=" onClick={() => this.onClickEnter()} />
        </div>
      </div>
    );
  }
}
