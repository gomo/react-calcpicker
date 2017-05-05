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
      operator: {},
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
      case '/':
        if(this.state.unit == '%'){
          right = right / 100
        }

        return left / right
      case '*':
        if(this.state.unit == '%'){
          right = right / 100
        }

        return left * right
      default:
        throw 'Invalid operator ' + operator + ' specified.';
    }
  }

  execute(callback = () => {}){
    let display = this.state.display;
    let amount = this.state.amount;

    if(this.state.operator.value){
      display = this.calc(parseFloat(amount, 10), this.state.operator.value, parseFloat(display, 10));
    }

    amount = display;

    this.setState({
      operator: {},
      unit: undefined,
      display: display,
      amount: amount,
      appendMode: false,
    }, callback)
  }

  inputOperator(operator, display){
    if(this.state.appendMode){
      this.execute(() => {
        this.setState({
          appendMode: false,
          operator: {
            value: operator,
            display: display,
          },
        })
      })
    } else {
      this.setState({
        operator: {
          value: operator,
          display: display,
        },
      })
    }
  }

  inputDecimal(){
    if(this.state.display.indexOf('.') === -1){
      this.inputNumber('.')
    }
  }

  inputPercent(){
    this.setState({unit: '%'})
  }

  clear(){
    if(this.state.appendMode){
      this.setState({
        display: '0',
        appendMode: false,
      })
    }
  }

  allClear(){
    this.setState({
      display: '0',
      amount: '0',
      operator: {},
      appendMode: false,
    })
  }

  delete(){
    if(this.state.appendMode){
      let value = this.state.display.toString()
      value = value.substr(0, value.length - 1);
      this.setState({
        display: !value ? 0 : value,
      })
    }
  }

  componentDidMount(){
    this.adjustPosition()
  }

  render(){
    const locale = numeral.localeData();
    return (
      <div ref="calculator" className="react-currency-calculator__calculator" style={{transform: `translate(${this.state.x}px, ${this.state.y}px)`}}>
        <div className="react-currency-calculator__calculator-header">
          <Button className="react-currency-calculator__calculator-button-close" display="×" onClick={this.props.onClickClose} />
        </div>
        <div className="react-currency-calculator__calculator-display">
          <div className="react-currency-calculator__calculator-display-operator">{this.state.operator.display}</div>
          <div className="react-currency-calculator__calculator-display-number">
            {numeral(this.state.display).format(this.state.format)}{this.state.unit}
          </div>
        </div>
        {this.props.buttons.map((row, rowKey) => {
          return (
            <div key={rowKey} className="react-currency-calculator__calculator-buttons">
              {row.map((btn, btnKey) => {
                return <Button key={rowKey + '-' + btnKey} className={btn.className} style={btn.style} size={btn.size} display={btn.display} onClick={display => btn.action(this, display)} />
              })}
            </div>
          )
        })}
      </div>
    );
  }
}
