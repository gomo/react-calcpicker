import React from 'react'
import numeral from 'numeral'
import Button from './Button'
import Rect from '../classes/Rect'
import Global from '../classes/Global'

export default class Calculator extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {
      display: props.initialValue,
      value: props.initialValue,
      appendMode: true,
      format: '0,0[.]0[000000000000]',
      operator: {},
      unit: {},
      x: 0,
      y: 0,
    }

    this.closeButtonSize = 30;

    window.onresize = () => this.adjustPosition();

    this.wrapperRef = React.createRef()
  }

  adjustPosition(){
    if(this.wrapperRef.current){
      const windowRect = Rect.createWithWindow()
      const buttonRect = Rect.createWithElement(this.props.button);
      const calcRect = Rect.createWithElement(this.wrapperRef.current, this.state.x, this.state.y);
      const rects = []
      let newCalcRect = undefined;
      for (var i = 0; i < this.props.positions.length; i++) {
        const posKey = this.props.positions[i]
        let rect;
        if(posKey == Rect.WINDOW_CENTER){
          rect = windowRect.getRelativeRect(calcRect, posKey)
        } else {
          rect = buttonRect.getRelativeRect(calcRect, posKey)
        }

        rects.push(rect)
        if(windowRect.contains(rect)){
          newCalcRect = rect;
          break;
        }
      }

      if(!newCalcRect){
        rects.sort((a, b) => windowRect.getOverlappingRect(b).area - windowRect.getOverlappingRect(a).area)
        newCalcRect = rects[0]
      }

      if(newCalcRect){
        this.setState({
          x: newCalcRect.transformX,
          y: newCalcRect.transformY,
        });
      }
    }
  }

  inputToDisplay(number){
    const strDisplay = this.state.display.toString()
    if(strDisplay !== '0' && this.state.appendMode){
      this.setState({
        display: strDisplay + number,
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
        if(this.state.unit.value == '%'){
          right = left * (right / 100)
        }

        return  left + right;
      case '-':
        if(this.state.unit.value == '%'){
          right = left * (right / 100)
        }

        return  left - right;
      case '/':
        if(this.state.unit.value == '%'){
          right = right / 100
        }

        return left / right
      case '*':
        if(this.state.unit.value == '%'){
          right = right / 100
        }

        return left * right
      default:
        throw 'Invalid operator ' + operator + ' specified.';
    }
  }

  execute(callback = () => {}){
    let display = this.state.display;
    let value = this.state.value;
    let calculated = false;
    if(this.state.operator.value){
      display = this.calc(parseFloat(value, 10), this.state.operator.value, parseFloat(display, 10));
      calculated = true;
    }

    value = display;

    this.setState({
      operator: {},
      unit: {},
      display: display,
      value: value,
      appendMode: false,
    }, () => {
      callback()
    })
  }

  inputOperator(operator, btnProps){
    if(this.state.appendMode){
      this.execute(() => {
        this.setState({
          appendMode: false,
          operator: {
            value: operator,
            display: btnProps.display,
          },
        })
      })
    } else {
      this.setState({
        operator: {
          value: operator,
          display: btnProps.display,
        },
      })
    }
  }

  inputDecimal(){
    if(this.state.display.indexOf('.') === -1){
      this.inputToDisplay('.')
    }
  }

  inputPercent(btnProps){
    if(this.state.operator.value){
      this.setState({unit: {
        value:'%',
        display: btnProps.display
      }})
    } else {
      this.setState({display: this.state.display / 100})
    }
  }

  clear(){
    if(this.state.appendMode){
      this.setState({
        display: '0',
        appendMode: false,
        unit: {},
      })
    }
  }

  allClear(){
    this.setState({
      display: '0',
      value: '0',
      operator: {},
      appendMode: false,
      unit: {},
    })
  }

  delete(){
    if(this.state.appendMode){
      const newState = {}
      let newDisplay = this.state.display.toString()
      if(newDisplay === '0'){
        newState['unit'] = {}
      }
      newDisplay = newDisplay.substr(0, newDisplay.length - 1);
      newState['display'] = !newDisplay ? 0 : newDisplay;
      this.setState(newState)
    }
  }

  componentDidMount(){
    this.adjustPosition()
    Global.currentCalclator = this
  }

  componentWillUnmount(){
    if(Global.currentCalclator === this) {
      Global.currentCalclator = undefined
    }
  }

  fix(){
    if(this.props.onCalculated) this.props.onCalculated(this.state.value)
  }

  close(){
    this.props.onClickClose()
  }

  onClickButton(btnProps, event){
    Global.currentCalclator = this;
    btnProps.action(this, btnProps, event)
  }

  render(){
    const style = {transform: `translate(${this.state.x}px, ${this.state.y}px)`}
    if(this.props.zIndex !== undefined){
      style['zIndex'] = this.props.zIndex;
    }
    return (
      <div ref={this.wrapperRef} className="react-calcpicker__calculator" style={style} onClick={e => Global.currentCalclator = this}>
        <div className="react-calcpicker__calculator-header">
          <div className="react-calcpicker__calculator-header-title" style={{width: ((this.props.buttonWidth * 4) + (this.props.buttonMargin * 6)) - this.closeButtonSize}}>
            {this.props.title}
          </div>
          <div className="react-calcpicker__calculator-header-button">
            <Button
              className="react-calcpicker__calculator-button-close"
              display={this.props.closeButton}
              onClick={() => this.close()}
              width={this.closeButtonSize}
              height={this.closeButtonSize}
              margin={this.props.buttonMargin}
            />
          </div>
        </div>
        <div className="react-calcpicker__calculator-display" style={{margin: this.props.buttonMargin}}>
          <div className="react-calcpicker__calculator-display-operator">{this.state.operator.display}</div>
          <div className="react-calcpicker__calculator-display-number">
            {numeral(this.state.display).format(this.state.format)}{this.state.unit.display}
          </div>
        </div>
        {this.props.buttons.map((row, rowKey) => {
          return (
            <div key={rowKey} className="react-calcpicker__calculator-buttons">
              {row.map((btn, btnKey) => {
                return (
                  <Button
                    ref={elem => btn.component = elem}
                    prevButton={btnKey > 0 ? row[btnKey - 1] : null}
                    key={rowKey + '-' + btnKey}
                    className={btn.className}
                    style={btn.style}
                    span={btn.span}
                    display={btn.display}
                    onClick={e => this.onClickButton(btn, e)}
                    width={this.props.buttonWidth}
                    height={this.props.buttonHeight}
                    margin={this.props.buttonMargin}
                  />
                )
              })}
            </div>
          )
        })}
      </div>
    );
  }
}
