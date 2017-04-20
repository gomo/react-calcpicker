import {Component} from 'react'
import numeral from 'numeral'
import Button from './Button'
import classNames from 'class-names'

export default class Calculator extends Component
{
  constructor(props) {
    super(props);
  }

  onClick(e){
    e.preventDefault();
    this.props.onClick(this.props.display);
    return false;
  }

  render(){
    return (
      <button className={classNames("react-currency-calculator__calculator-button react-currency-calculator__calculator-button-" + this.props.classType)} onClick={e => this.onClick(e)}>{this.props.display}</button>
    );
  }
}
