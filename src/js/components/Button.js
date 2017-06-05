import React from 'react'
import classNames from 'class-names'

export default class Button extends React.Component
{
  constructor(props) {
    super(props);
  }

  onClick(e){
    e.preventDefault();
    this.props.onClick(e);
    return false;
  }

  getButtonStyle(){
    const style = {
      width: this.props.width,
      height: this.props.height,
    }

    if(this.props.margin){
      style.margin = this.props.margin;
    }

    if(this.props.span){
      style.position = "absolute"
      if(this.props.span.height >= 2){
        const totalMargin = this.props.margin * ((this.props.span.height - 1) * 2)
        style.height = (style.height * this.props.span.height) + totalMargin
        style.top = -((this.props.height * (this.props.span.height - 1)) + totalMargin)
      }

      if(this.props.span.width >= 2){
        const totalMargin = this.props.margin * ((this.props.span.width - 1) * 2)
        style.width = (style.width * this.props.span.width) + totalMargin
      }
    }

    if(this.props.prevButton && this.props.prevButton.span && this.props.prevButton.span.width && this.props.prevButton.span.width >= 2){
      const totalMargin = this.props.margin * ((this.props.prevButton.span.width * 2) + 1)
      style.marginLeft = (this.props.width * this.props.prevButton.span.width) + totalMargin
    }

    return style
  }

  render(){
    return (
      <button
        ref="element"
        className={classNames(
          "react-calcpicker__calculator-button",
          this.props.style ? "react-calcpicker__calculator-button-" + this.props.style : undefined,
          this.props.className
        )}
        style={this.getButtonStyle()}
        onClick={e => this.onClick(e)}
      >
        {this.props.display}
      </button>
    );
  }
}
