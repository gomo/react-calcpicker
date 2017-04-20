import {Component} from 'react'
import numeral from 'numeral'
import 'numeral/locales'
import Calculator from './Calculator'

export default class App extends Component
{
  constructor(props) {
    super(props);
    numeral.locale(props.locale)
    this.state = {
      openCalclator: false,
      amount: props.initialAmount
    }
  }

  componentWillReceiveProps(nextProps){
    if(this.props.locale != nextProps.locale){
      numeral.locale(nextProps.locale)
    }
  }

  onClickAmount(e){
    e.preventDefault();
    return false;
  }

  render(){
    return (
      <div className="react-currency-calculator">
        <button className={this.props.className} onClick={(e) => this.onClickAmount(e)}>{numeral(this.state.amount).format(this.props.currencyFormat)}</button>
        <Calculator
          initialAmount={this.state.amount}
        />
      </div>
    );
  }
}

App.propTypes = {

}
