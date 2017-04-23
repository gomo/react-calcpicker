import {Component} from 'react'
import numeral from 'numeral'
import 'numeral/locales'
import Calculator from './Calculator'
import Portal from 'react-portal'

export default class App extends Component
{
  constructor(props) {
    super(props);
    numeral.locale(props.locale)
    this.state = {
      openCalculator: false,
      amount: props.initialAmount
    }
  }

  componentWillReceiveProps(nextProps){
    if(this.props.locale != nextProps.locale){
      numeral.locale(nextProps.locale)
    }
  }

  toggleCalculator(){
    this.setState({openCalculator: !this.state.openCalculator});
  }

  onClickAmount(e){
    e.preventDefault();
    this.toggleCalculator()
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
            initialAmount={this.state.amount}
            onClickClose={() => this.toggleCalculator()}
            button={this.refs.button}
          />
        </Portal>
      </div>
    );
  }
}
