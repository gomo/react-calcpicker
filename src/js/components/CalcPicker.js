import React from 'react'
import numeral from 'numeral'
import 'numeral/locales'
import Calculator from './Calculator'
import Portal from 'react-portal'

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

  onCloseCalculator(){
    //Set the openCalculator to false when clicking the overlay or closing with the ESC key.
    if(this.state.openCalculator == true){
      this.setState({openCalculator: false});
    }
  }

  render(){
    return (
      <div className="react-calcpicker">
        <button ref="button" className={this.props.className} onClick={(e) => this.onClickAmount(e)}>
          {numeral(this.state.amount).format(this.props.currencyFormat)}
        </button>
        <Portal closeOnEsc closeOnOutsideClick isOpened={this.state.openCalculator} onClose={() => this.onCloseCalculator()}>
          <Calculator
            ref='calculator'
            initialAmount={this.state.amount}
            onClickClose={() => this.setState({openCalculator: false})}
            button={this.refs.button}
            positions={this.props.positions}
            buttons={this.props.buttons}
          />
        </Portal>
      </div>
    );
  }
}
