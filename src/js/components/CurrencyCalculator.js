import React from 'react'
import numeral from 'numeral'
import 'numeral/locales'
import Calculator from './Calculator'
import Portal from 'react-portal'

export default class CurrencyCalculator extends React.Component
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
        switch (e.key) {
          case '0':
          case '1':
          case '2':
          case '3':
          case '4':
          case '5':
          case '6':
          case '7':
          case '8':
          case '9':
            this.refs.calculator.inputNumber(e.key)
            break;
          case '+':
          case '-':
            this.refs.calculator.onClickOperator(e.key)
            break;
          case '/':
            this.refs.calculator.onClickOperator('÷')
            break;
          case '*':
            this.refs.calculator.onClickOperator('×')
            break;
          case '%':
            this.refs.calculator.onClickPercent()
            break;
          case '=':
          case 'Enter':
            this.refs.calculator.onClickEnter()
            break;
          case 'Clear':
            this.refs.calculator.allClear()
            break;
          case 'Backspace':
            this.refs.calculator.delete()
            break;
          default:

        }
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
      <div className="react-currency-calculator">
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
