import React from 'react'
import assert from 'power-assert'
import { mount, shallow } from 'enzyme'

import Calculator from '../src/js/components/Calculator'
import Action from '../src/js/classes/Action'

const createCalculatorWithButtons = buttons => {
  return mount(
    <Calculator
      initialAmount="0"
      positions={[]}
      buttons={buttons}
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

  it('should have a class that matches the size property.', function () {
    let calc;
    let button;

    [2, 3, 4].forEach(num => {
      calc = createCalculatorWithButtons([[
        {style: 'default', size: {width: num}, display: 'button', action: Action.allClear}
      ]])
      button = calc.find('.react-calcpicker__calculator-buttons .react-calcpicker__calculator-button');
      assert(button.hasClass('react-calcpicker__calculator-button-' + num + 'w'))

      calc = createCalculatorWithButtons([[
        {style: 'default', size: {height: num}, display: 'button', action: Action.allClear}
      ]])
      button = calc.find('.react-calcpicker__calculator-buttons .react-calcpicker__calculator-button');
      assert(button.hasClass('react-calcpicker__calculator-button-' + num + 'h'))

      calc = createCalculatorWithButtons([[
        {style: 'default', size: {height: num, width: num}, display: 'button', action: Action.allClear}
      ]])
      button = calc.find('.react-calcpicker__calculator-buttons .react-calcpicker__calculator-button');
      assert(button.hasClass('react-calcpicker__calculator-button-' + num + 'h'))
      assert(button.hasClass('react-calcpicker__calculator-button-' + num + 'w'))
    })

  })
})
