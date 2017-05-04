import React from 'react'
import classNames from 'class-names'

export default class Button extends React.Component
{
  constructor(props) {
    super(props);
  }

  onClick(e){
    e.preventDefault();
    this.props.onClick(this.props.display);
    return false;
  }

  getButtonClass(){
    if(Button.symbolMap[this.props.display]){
      return Button.symbolMap[this.props.display]
    } else {
      return '_' + this.props.display
    }
  }

  render(){
    return (
      <button
        className={classNames(
          "react-currency-calculator__calculator-button react-currency-calculator__calculator-button-" + this.props.classType,
          this.getButtonClass(),
          this.props.className
        )}
        onClick={e => this.onClick(e)}
      >
        {this.props.display}
      </button>
    );
  }
}

Button.symbolMap = {
  '-': 'minus',
  '+': 'plus',
  '÷': 'division',
  '×': 'times',
  '=': 'equal',
  '%': 'percent',
  '.': 'decimal',
  '←': 'bs',
}
