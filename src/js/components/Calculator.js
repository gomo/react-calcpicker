import {Component} from 'react'
import numeral from 'numeral'
import Button from './Button'

export default class Calculator extends Component
{
  constructor(props) {
    super(props);
    this.state = {
      amount: props.initialAmount,
      format: '0,0[.]0[000000000]',
      operator: ' ',
      x: 0,
      y: 0,
    }

    window.onresize = () => this.adjustPosition();
  }

  adjustPosition(){
    if(this.refs.calculator){
      const buttonRect = this.props.button.getBoundingClientRect();
      const parentRect = this.refs.calculator.parentElement.getBoundingClientRect();
      this.setState({
        x: buttonRect.left - parentRect.left,
        y: buttonRect.bottom - parentRect.top,
      });
    }
  }

  componentDidMount(){
    this.adjustPosition();
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
          <div className="react-currency-calculator__calculator-display-number">{numeral(this.state.amount).format(this.state.format)}</div>
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
          <Button classType="number" display={locale.delimiters.decimal} onClick={() => this.onClickDecimal()} />
          <Button classType="enter" display="=" onClick={() => this.onClickEnter()} />
        </div>
      </div>
    );
  }
}
