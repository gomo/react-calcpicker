import {Component} from 'react'
import numeral from 'numeral'
import Button from './Button'
import Rect from '../classes/Rect'

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

  getNewCalcRect(positionKey, windowRect, buttonRect, calcRect){
    switch(positionKey){
      case 'right-bottom':
        return calcRect.clone().transform(
          buttonRect.left - calcRect.originLeft,
          buttonRect.bottom - calcRect.originTop
        )
      case 'left-bottom':
        return calcRect.clone().transform(
          buttonRect.right - calcRect.originRight,
          buttonRect.bottom - calcRect.originTop
        )
      case 'left-top':
        return calcRect.clone().transform(
          buttonRect.right - calcRect.originRight,
          buttonRect.top - calcRect.originBottom
        )
      case 'right-top':
        return calcRect.clone().transform(
          buttonRect.left - calcRect.originLeft,
          buttonRect.top - calcRect.originBottom
        )
      case 'window-center':
        const expectedRect = windowRect.createCenterRect(calcRect.width, calcRect.height)
        return calcRect.clone().transform(
          expectedRect.left - calcRect.originLeft,
          expectedRect.top - calcRect.originTop
        )
      default:
        throw 'Illegal positionKey `' + positionKey + '` is specified';
    }
  }

  normalizeRect(rect, baseRect){
    if(baseRect){
      rect.left = baseRect.left + rect.x;
      rect.top = baseRect.top + rect.y;
    }
    rect.right = rect.left + rect.width;
    rect.bottom = rect.top + rect.height;
    return rect;
  }

  adjustPosition(){
    if(this.refs.calculator){
      const windowRect = new Rect(
        window.pageYOffset || document.documentElement.scrollTop,
        window.pageXOffset || document.documentElement.scrollLeft,
        document.documentElement.clientWidth,
        document.documentElement.clientHeight,
      )

      const buttonRect = Rect.createWithElement(this.props.button);
      const calcRect = Rect.createWithElement(this.refs.calculator, this.state.x, this.state.y);

      let newCalcRect = undefined;
      for (var i = 0; i < this.props.positions.length; i++) {
        const posKey = this.props.positions[i]
        const rect = this.getNewCalcRect(posKey, windowRect, buttonRect, calcRect)
        if(windowRect.contains(rect)){
          newCalcRect = rect;
          break;
        }
      }

      if(!newCalcRect){
        newCalcRect = this.getNewCalcRect('window-center', windowRect, buttonRect, calcRect);
      }

      this.setState({
        x: newCalcRect.transformX,
        y: newCalcRect.transformY,
      });
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
