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

  getSizeClass(){
    if(!this.props.size){
      return;
    }

    const classNames = [];
    if(this.props.size.width){
      classNames.push("react-currency-calculator__calculator-button-" + this.props.size.width + 'w')
    }

    if(this.props.size.height){
      classNames.push("react-currency-calculator__calculator-button-" + this.props.size.height + 'h')
    }

    return classNames;
  }

  render(){
    return (
      <button
        className={classNames(
          "react-currency-calculator__calculator-button",
          this.props.style ? "react-currency-calculator__calculator-button-" + this.props.style : undefined,
          this.getSizeClass(),
          this.props.className
        )}
        onClick={e => this.onClick(e)}
      >
        {this.props.display}
      </button>
    );
  }
}
