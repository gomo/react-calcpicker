import React from 'react'
import numeral from 'numeral'
import 'numeral/locales'
import Calculator from './Calculator'
import Portal from 'react-portal'
import PropTypes from 'prop-types';
import Rect from '../classes/Rect'
import Action from '../classes/Action'

export default class CalcPicker extends React.Component
{
  constructor(props) {
    super(props);
    numeral.locale(props.locale)
    this.state = {
      openCalculator: false,
      amount: props.initialAmount
    }

    window.onkeydown = (e) => {
      if(this.state.openCalculator){
        this.props.buttons.forEach(row => row.forEach(btn => {
          if(btn.keyDown && btn.keyDown(e)){
            e.preventDefault()
            btn.action(this.refs.calculator, btn, e)
          }
        }))
      }
    }
  }

  componentWillReceiveProps(nextProps){
    if(this.props.locale != nextProps.locale){
      numeral.locale(nextProps.locale)
    }
  }

  onClickAmount(e){
    e.preventDefault();
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
    if(this.state.amount != value){
      this.setState({amount: value})
      this.props.onChange(value)
    }
  }

  render(){
    return (
      <div className="react-calcpicker">
        <button ref="button" className={this.props.className} onClick={(e) => this.onClickAmount(e)}>
          {numeral(this.state.amount).format(this.props.format)}
        </button>
        <Portal closeOnEsc closeOnOutsideClick isOpened={this.state.openCalculator} onClose={() => this.onClosePortal()}>
          <Calculator
            ref='calculator'
            initialAmount={this.state.amount}
            onClickClose={() => this.setState({openCalculator: false})}
            button={this.refs.button}
            positions={this.props.positions}
            buttons={this.props.buttons}
            onCalculated={value => this.changeValue(value)}
            closeButton={this.props.closeButton}
            closeOnEnterAction={this.props.closeOnEnterAction}
          />
        </Portal>
      </div>
    );
  }
}

CalcPicker.propTypes = {
  initialAmount: PropTypes.number,
  format: PropTypes.string,
  positions: PropTypes.arrayOf(PropTypes.oneOf([
    Rect.RIGHT_BOTTOM,
    Rect.LEFT_BOTTOM,
    Rect.RIGHT_TOP,
    Rect.LEFT_TOP,
  ])),
  buttons: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        style: PropTypes.oneOf(['default', 'primary', 'light', 'dark', 'warning']),
        display: PropTypes.oneOfType([
          PropTypes.object,
          PropTypes.string,
        ]).require,
        action: PropTypes.func.isRequired,
        keyDown: PropTypes.func,
        closeOnAction: PropTypes.bool,
      })
    )
  ),
  className: PropTypes.string,
  closeButton: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
  locale: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  closeOnEnterAction: PropTypes.bool,
}

CalcPicker.defaultProps = {
  initialAmount: 0,
  format: "0,0[.]00",
  positions: [Rect.RIGHT_BOTTOM],
  closeButton: '×',
  buttons: [
    [
      {style: "dark", display: <span>AC</span>, action: Action.allClear, keyDown: e => e.key == 'Clear'},
      {style: "dark", display: <span>←</span>, action: Action.backspace, keyDown: e => e.key == 'Backspace'},
      {style: "light", display: <span>%</span>, action: Action.percent, keyDown: e => e.key == '%'},
      {style: "primary", display: <span>÷</span>, action: Action.division, keyDown: e => e.key == '/'},
    ],
    [
      {style: "default", display: <span>7</span>, action: Action.seven, keyDown: e => e.key == '7'},
      {style: "default", display: <span>8</span>, action: Action.eight, keyDown: e => e.key == '8'},
      {style: "default", display: <span>9</span>, action: Action.nine, keyDown: e => e.key == '9'},
      {style: "primary", display: <span>×</span>, action: Action.multiplication, keyDown: e => e.key == '*'},
    ],[
      {style: "default", display: <span>4</span>, action: Action.four, keyDown: e => e.key == '4'},
      {style: "default", display: <span>5</span>, action: Action.five, keyDown: e => e.key == '5'},
      {style: "default", display: <span>6</span>, action: Action.six, keyDown: e => e.key == '6'},
      {style: "primary", display: <span>-</span>, action: Action.minus, keyDown: e => e.key == '-'},
    ],[
      {style: "default", display: <span>1</span>, action: Action.one, keyDown: e => e.key == '1'},
      {style: "default", display: <span>2</span>, action: Action.two, keyDown: e => e.key == '2'},
      {style: "default", display: <span>3</span>, action: Action.three, keyDown: e => e.key == '3'},
      {style: "primary", display: <span>+</span>, action: Action.plus, keyDown: e => e.key == '+'},
    ],[
      {style: "default", display: <span>0</span>, action: Action.zero, keyDown: e => e.key == '0'},
      {style: "default", display: <span>00</span>, action: Action.doubleZero, keyDown: e => e.keyCode == 48 && e.shiftKey},
      {style: "default", display: <span>.</span>, action: Action.decimal, keyDown: e => e.key == '.'},
      {style: "warning", display: <span>=</span>, action: Action.enter, keyDown: e => e.key == '=' || e.key == 'Enter'},
    ]
  ],
  closeOnEnterAction: true
}
