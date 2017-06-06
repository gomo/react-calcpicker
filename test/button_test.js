import React from 'react'
import assert from 'power-assert'
import { mount, shallow } from 'enzyme'

import Calculator from '../src/js/components/Calculator'
import Action from '../src/js/classes/Action'

const buttonWidth = 42
const buttonHeight = 32
const buttonMargin = 3

const createCalculatorWithButtons = buttons => {
  return mount(
    <Calculator
      initialValue="0"
      positions={[]}
      buttons={buttons}
      buttonWidth={buttonWidth}
      buttonHeight={buttonHeight}
      buttonMargin={buttonMargin}
    />
  );
}


describe('Button', () => {
  it('should have a class that matches the style property.', function () {
    ['dark', 'default', 'warning', 'primary', 'light'].forEach(className => {
      const calc = createCalculatorWithButtons([[
        {style: className, display: "AC", action: Action.allClear}
      ]])

      const button = calc.find('.react-calcpicker__calculator-buttons .react-calcpicker__calculator-button');
      assert(button.hasClass('react-calcpicker__calculator-button-' + className))
    })
  })

  it('should be able to specify text for display.', function () {
    const calc = createCalculatorWithButtons([[
      {style: 'default', display: "some text", action: Action.allClear}
    ]])

    const button = calc.find('.react-calcpicker__calculator-buttons .react-calcpicker__calculator-button');
    assert(button.text() === 'some text')
  })

  it('should be able to specify HTML for display.', function () {
    const calc = createCalculatorWithButtons([[
      {style: 'default', display: <span>html</span>, action: Action.allClear}
    ]])

    const button = calc.find('.react-calcpicker__calculator-buttons .react-calcpicker__calculator-button');
    assert(button.find('span').html() === '<span>html</span>')
  })

  it('should be resized when there is a span property.', function () {
    let calc;
    let button;

    let nums = [2,3,4]

    // check button width
    nums.forEach(num => {
      calc = createCalculatorWithButtons([[
        {style: 'default', span: {width: num}, display: 'button', action: Action.allClear, className: "target"}
      ]])
      button = calc.find('.react-calcpicker__calculator-buttons .react-calcpicker__calculator-button.target');
      const totalMargin = buttonMargin * ((num - 1) * 2)
      const bWidth = (buttonWidth * num) + totalMargin
      assert(button.get(0).style.width === bWidth + "px")
      assert(button.get(0).style.position === 'absolute')
    })

    // check button height
    nums.forEach(num => {
      calc = createCalculatorWithButtons([[
        {style: 'default', span: {height: num}, display: 'button', action: Action.allClear, className: "target"}
      ]])
      button = calc.find('.react-calcpicker__calculator-buttons .react-calcpicker__calculator-button.target');
      const totalMargin = buttonMargin * ((num - 1) * 2)
      const bHeight = (buttonHeight * num) + totalMargin
      const bTop = -((buttonHeight * (num - 1)) + totalMargin)
      assert(button.get(0).style.height === bHeight + "px")
      assert(button.get(0).style.top === bTop + "px")
      assert(button.get(0).style.position === 'absolute')
    })

    // check button margint-left
    nums = [2,3]
    nums.forEach(num => {
      calc = createCalculatorWithButtons([[
        {style: 'default', span: {width: num}, display: 'button', action: Action.allClear},
        {style: 'default', display: 'button', action: Action.allClear, className: "target"}
      ]])
      button = calc.find('.react-calcpicker__calculator-buttons .react-calcpicker__calculator-button.target');
      const totalMargin = buttonMargin * ((num * 2) + 1)
      const bMarginLeft = (buttonWidth * num) + totalMargin
      assert(button.get(0).style.marginLeft === bMarginLeft + 'px')
    })

  })
})
