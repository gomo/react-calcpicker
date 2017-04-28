import React from 'react'
import assert from 'power-assert'
import { mount, shallow } from 'enzyme'

import Calculator from '../src/js/components/Calculator'
import Button from '../src/js/components/Button'

const createCalculator = () => {
  return mount(
    <Calculator
      initialAmount="0"
      positions={[]}
    />
  );
}

const clickButton = (calc, symbol) => {
  const className = Button.symbolMap[symbol] ? Button.symbolMap[symbol] : '_' + symbol;
  calc.find('.react-currency-calculator__calculator-button-number.' + className).simulate('click')
}

describe('Calculator', () => {
  it('should display a number on the display when you press a numeric key.', function () {
    const calc = createCalculator()

    assert(calc.state('amount') === "0")
    assert(calc.state('display') === "0")

    clickButton(calc, '1');
    assert(calc.state('amount') === "0")
    assert(calc.state('display') === "1")

    clickButton(calc, '2')
    assert(calc.state('amount') === "0")
    assert(calc.state('display') === "12")

    clickButton(calc, '3')
    assert(calc.state('amount') === "0")
    assert(calc.state('display') === "123")

    clickButton(calc, '4')
    assert(calc.state('amount') === "0")
    assert(calc.state('display') === "1234")

    clickButton(calc, '5')
    assert(calc.state('amount') === "0")
    assert(calc.state('display') === "12345")

    clickButton(calc, '6')
    assert(calc.state('amount') === "0")
    assert(calc.state('display') === "123456")

    clickButton(calc, '7')
    assert(calc.state('amount') === "0")
    assert(calc.state('display') === "1234567")

    clickButton(calc, '8')
    assert(calc.state('amount') === "0")
    assert(calc.state('display') === "12345678")

    clickButton(calc, '9')
    assert(calc.state('amount') === "0")
    assert(calc.state('display') === "123456789")

    clickButton(calc, '0')
    assert(calc.state('amount') === "0")
    assert(calc.state('display') === "1234567890")

    clickButton(calc, '00')
    assert(calc.state('amount') === "0")
    assert(calc.state('display') === "123456789000")
  })
})
