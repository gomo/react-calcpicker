import {Component} from 'react'
import currency from '../currency'
import Button from './Button'

export default class Calculator extends Component
{
  constructor(props) {
    super(props);
    this.state = {
      amount: props.initialAmount
    }
  }

  render(){
    return (
      <div className="react-currency-calculator__calculator">
        <div className="react-currency-calculator__calculator-display">
          {currency(this.state.amount).format()}
        </div>
        <div className="react-currency-calculator__calculator-buttons">
          <Button classType="clear" display="AC" onClick={() => this.allClear()} />
          <Button classType="clear" display="C" onClick={() => this.clear()} />
          <Button classType="func" display="%" onClick={() => this.onClickPercent()} />
          <Button classType="func" display="÷" onClick={() => this.onClickDiv()} />
        </div>
        <div className="react-currency-calculator__calculator-buttons">
          <Button classType="number" display="7" onClick={display => this.onClickNumber(display)} />
          <Button classType="number" display="8" onClick={display => this.onClickNumber(display)} />
          <Button classType="number" display="9" onClick={display => this.onClickNumber(display)} />
          <Button classType="func" display="×" onClick={() => this.onClickMulti()} />
        </div>
        <div className="react-currency-calculator__calculator-buttons">
          <Button classType="number" display="4" onClick={display => this.onClickNumber(display)} />
          <Button classType="number" display="5" onClick={display => this.onClickNumber(display)} />
          <Button classType="number" display="6" onClick={display => this.onClickNumber(display)} />
          <Button classType="func" display="-" onClick={() => this.onClickSub()} />
        </div>
        <div className="react-currency-calculator__calculator-buttons">
          <Button classType="number" display="1" onClick={display => this.onClickNumber(display)} />
          <Button classType="number" display="2" onClick={display => this.onClickNumber(display)} />
          <Button classType="number" display="3" onClick={display => this.onClickNumber(display)} />
          <Button classType="func" display="+" onClick={() => this.onClickAdd()} />
        </div>
        <div className="react-currency-calculator__calculator-buttons">
          <Button classType="number" display="0" onClick={() => this.onClickZero()} />
          <Button classType="number" display="00" onClick={() => this.onClickDoubleZero()} />
          <Button classType="number" display="." onClick={() => this.onClickDecimal()} />
          <Button classType="func" display="=" onClick={() => this.onClickEnter()} />
        </div>
      </div>
    );
  }
}
