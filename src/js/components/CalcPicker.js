import React from 'react'
import numeral from 'numeral'
import 'numeral/locales'
import Calculator from './Calculator'
import Portal from 'react-portal'
import PropTypes from 'prop-types';
import Rect from '../classes/Rect'
import Action from '../classes/Action'
import Global from '../classes/Global'
import classNames from 'class-names'

window.addEventListener('keydown', (e) => {
  if(Global.currentCalclator){
    Global.currentCalclator.props.buttons.forEach(row => row.forEach(btn => {
      if(btn.keyDown && btn.keyDown(e)){
        e.preventDefault()
        btn.action(Global.currentCalclator, btn, e)
      }
    }))
  }
})

export default class CalcPicker extends React.Component
{
  constructor(props) {
    super(props);
    numeral.locale(props.locale)
    this.state = {
      openCalculator: false,
      value: props.initialValue
    }
  }

  componentWillReceiveProps(nextProps){
    if(this.props.locale != nextProps.locale){
      numeral.locale(nextProps.locale)
    }
  }

  componentDidUpdate(prevProps, prevState){
    if(this.state.openCalculator !== prevState.openCalculator){
      if(this.state.openCalculator === true){
        Global.currentCalclator = this.refs.calculator
      }
    }
  }

  componentWillUpdate(nextProps, nextState){
    if(this.state.openCalculator !== nextState.openCalculator){
      if(nextState.openCalculator !== true && Global.currentCalclator === this.refs.calculator){
        Global.currentCalclator = undefined
      }
    }
  }

  onClickPicker(e){
    e.preventDefault();
    if(this.props.shouldOpen() === false){
      return false
    }

    if(this.props.exclusionGroup){
      let alreadyOpend = false
      this.props.exclusionGroup.forEach(picker => {
        if(picker === this) alreadyOpend = true
        if(picker.state.openCalculator){
          picker.setState({openCalculator: false})
        }
      })

      if(!alreadyOpend){
        this.props.exclusionGroup.push(this)
      }
    }
    this.setState({openCalculator: true});
    return false;
  }

  onClosePortal(){
    //Set the openCalculator to false when clicking the overlay or closing with the ESC key.
    if(this.state.openCalculator == true){
      this.setState({openCalculator: false});
    }
  }

  changeValue(value){
    if(this.state.value != value){
      this.setState({value: value})
      this.props.onChange(value)
    }
  }

  render(){
    return (
      <div className={classNames('react-calcpicker', this.props.wrapperClass)}>
        <button ref="button" className={classNames(this.props.className, this.props.buttonClass)} onClick={(e) => this.onClickPicker(e)}>
          {numeral(this.state.value).format(this.props.format)}
        </button>
        <Portal closeOnEsc closeOnOutsideClick={this.props.closeOnOutsideClick} isOpened={this.state.openCalculator} onClose={() => this.onClosePortal()}>
          <Calculator
            title={this.props.title}
            ref='calculator'
            initialValue={this.state.value}
            onClickClose={() => this.setState({openCalculator: false})}
            button={this.refs.button}
            positions={this.props.positions}
            buttons={this.props.buttons}
            onCalculated={value => this.changeValue(value)}
            closeButton={this.props.closeButton}
            closeOnEnterAction={this.props.closeOnEnterAction}
            zIndex={this.props.zIndex}
            buttonWidth={this.props.buttonWidth}
            buttonHeight={this.props.buttonHeight}
            buttonMargin={this.props.buttonMargin}
          />
        </Portal>
      </div>
    );
  }
}

CalcPicker.propTypes = {
  initialValue: PropTypes.number,
  format: PropTypes.string,
  positions: PropTypes.arrayOf(PropTypes.oneOf([
    Rect.RIGHT_BOTTOM,
    Rect.LEFT_BOTTOM,
    Rect.RIGHT_TOP,
    Rect.LEFT_TOP,
    Rect.WINDOW_CENTER,
  ])),
  buttons: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        style: PropTypes.oneOf(['default', 'primary', 'light', 'dark', 'warning']),
        display: PropTypes.oneOfType([
          PropTypes.object,
          PropTypes.string,
        ]).require,
        span: PropTypes.shape({
          width: PropTypes.number,
          height: PropTypes.number
        }),
        action: PropTypes.func.isRequired,
        keyDown: PropTypes.func
      })
    )
  ),
  buttonWidth: PropTypes.number,
  buttonHeight: PropTypes.number,
  buttonMargin: PropTypes.number,
  className: PropTypes.string,
  wrapperClass: PropTypes.string,
  buttonClass: PropTypes.string,
  closeButton: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
  locale: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  closeOnEnterAction: PropTypes.bool,
  zIndex: PropTypes.number,
  title: PropTypes.string,
  closeOnOutsideClick: PropTypes.bool,
  exclusionGroup: PropTypes.array,
  shouldOpen: PropTypes.func
}

CalcPicker.defaultProps = {
  initialValue: 0,
  format: "0,0[.]00",
  positions: [
    Rect.RIGHT_BOTTOM,
    Rect.LEFT_BOTTOM,
    Rect.RIGHT_TOP,
    Rect.LEFT_TOP,
    Rect.WINDOW_CENTER,
  ],
  closeButton: '×',
  buttons: [
    [
      {style: "dark", display: "AC", action: Action.allClear, keyDown: e => e.key == 'Clear'},
      {style: "dark", display: "←", action: Action.backspace, keyDown: e => e.key == 'Backspace'},
      {style: "light", display: "%", action: Action.percent, keyDown: e => e.key == '%'},
      {style: "primary", display: "÷", action: Action.division, keyDown: e => e.key == '/'},
    ],
    [
      {style: "default", display: "7", action: Action.seven, keyDown: e => e.key == '7'},
      {style: "default", display: "8", action: Action.eight, keyDown: e => e.key == '8'},
      {style: "default", display: "9", action: Action.nine, keyDown: e => e.key == '9'},
      {style: "primary", display: "×", action: Action.multiplication, keyDown: e => e.key == '*'},
    ],[
      {style: "default", display: "4", action: Action.four, keyDown: e => e.key == '4'},
      {style: "default", display: "5", action: Action.five, keyDown: e => e.key == '5'},
      {style: "default", display: "6", action: Action.six, keyDown: e => e.key == '6'},
      {style: "primary", display: "-", action: Action.minus, keyDown: e => e.key == '-'},
    ],[
      {style: "default", display: "1", action: Action.one, keyDown: e => e.key == '1'},
      {style: "default", display: "2", action: Action.two, keyDown: e => e.key == '2'},
      {style: "default", display: "3", action: Action.three, keyDown: e => e.key == '3'},
      {style: "primary", display: "+", action: Action.plus, keyDown: e => e.key == '+'},
    ],[
      {style: "default", display: "0", action: Action.zero, keyDown: e => e.key == '0'},
      {style: "default", display: "00", action: Action.doubleZero, keyDown: e => e.keyCode == 48 && e.shiftKey},
      {style: "default", display: ".", action: Action.decimal, keyDown: e => e.key == '.'},
      {style: "warning", display: "=", action: Action.enter, keyDown: e => e.key == '=' || e.key == 'Enter'},
    ]
  ],
  closeOnEnterAction: true,
  buttonWidth: 48,
  buttonHeight: 32,
  buttonMargin: 3,
  closeOnOutsideClick: true,
  exclusionGroup: undefined,
  shouldOpen: () => true
}
