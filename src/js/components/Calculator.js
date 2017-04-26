import {Component} from 'react'
import numeral from 'numeral'
import Button from './Button'
import Rect from '../classes/Rect'

export default class Calculator extends Component
{
  constructor(props) {
    super(props);
    this.state = {
      display: props.initialAmount,
      amount: props.initialAmount,
      appendMode: false,
      format: '0,0[.]0[000000000]',
      operator: undefined,
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

  culc(left, op, right){
    return
  }

  execEnter(callback = () => {}){
    let display = this.state.display;
    let amount = this.state.amount;
    if(this.state.operator){
      display = eval(amount + this.state.operator + display)
    }

    amount = display;

    this.setState({
      appendMode: false,
      operator: undefined,
      display: display,
      amount: amount
    }, callback)
  }

  onClickEnter(){
    this.execEnter();
  }

  onClickOperator(operator){
    this.execEnter(() => {
      this.setState({
        appendMode: false,
        operator: operator,
      })
    })
  }

  onClickDoubleZero(){
    this.inputNumber('00')
  }

  clear(){
    this.setState({
      display: '0'
    })
  }

  allClear(){
    this.setState({
      display: '0',
      amount: '0',
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
            {numeral(this.state.display).format(this.state.format)}
          </div>
        </div>
        <div className="react-currency-calculator__calculator-buttons">
          <Button classType="clear" display="AC" onClick={() => this.allClear()} />
          <Button classType="clear" display="C" onClick={() => this.clear()} />
          <Button classType="func" display="%" onClick={() => this.onClickPercent()} />
          <Button classType="func" display="÷" onClick={display => this.onClickOperator('/')} />
        </div>
        <div className="react-currency-calculator__calculator-buttons">
          <Button classType="number" display="7" onClick={display => this.onClickNumber(display)} />
          <Button classType="number" display="8" onClick={display => this.onClickNumber(display)} />
          <Button classType="number" display="9" onClick={display => this.onClickNumber(display)} />
          <Button classType="func" display="×" onClick={display => this.onClickOperator('*')} />
        </div>
        <div className="react-currency-calculator__calculator-buttons">
          <Button classType="number" display="4" onClick={display => this.onClickNumber(display)} />
          <Button classType="number" display="5" onClick={display => this.onClickNumber(display)} />
          <Button classType="number" display="6" onClick={display => this.onClickNumber(display)} />
          <Button classType="func" display="-" onClick={display => this.onClickOperator('-')} />
        </div>
        <div className="react-currency-calculator__calculator-buttons">
          <Button classType="number" display="1" onClick={display => this.onClickNumber(display)} />
          <Button classType="number" display="2" onClick={display => this.onClickNumber(display)} />
          <Button classType="number" display="3" onClick={display => this.onClickNumber(display)} />
          <Button classType="func" display="+" onClick={display => this.onClickOperator('+')} />
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
