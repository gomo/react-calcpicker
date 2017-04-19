import {Component} from 'react'
import currency from '../currency'
import Calculator from './Calculator'

export default class App extends Component
{
  constructor(props) {
    super(props);
    currency.locale(props.locale)
    this.state = {
      openCalclator: false,
      amount: parseInt(props.initialAmount|0, 10)
    }
  }

  componentWillReceiveProps(nextProps){
    if(this.props.locale != nextProps.locale){
      currency.locale(nextProps.locale)
    }
  }

  onClickAmount(e){
    e.preventDefault();
    return false;
  }

  render(){
    return (
      <div className="react-currency-calculator">
        <button className={this.props.className} onClick={(e) => this.onClickAmount(e)}>{currency(this.state.amount).format()}</button>
        <Calculator
          initialAmount={this.state.amount}
        />
      </div>
    );
  }
}

App.propTypes = {

}
