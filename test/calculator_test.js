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

const clickButton = (calc, ...symbols) => {
  symbols.forEach(symbol => {
    const className = Button.symbolMap[symbol] ? Button.symbolMap[symbol] : '_' + symbol;
    calc.find('.react-currency-calculator__calculator-button.' + className).simulate('click')
  })
}

const getNumberState = (calc, stateName) => {
  return calc.state(stateName).toString()
}

describe('Calculator', () => {
  it('should display a number on the display when you press a numeric key.', function () {
    const calc = createCalculator()

    assert(getNumberState(calc, 'amount') === "0")
    assert(getNumberState(calc, 'display') === "0")

    clickButton(calc, '1');
    assert(getNumberState(calc, 'amount') === "0")
    assert(getNumberState(calc, 'display') === "1")

    clickButton(calc, '2')
    assert(getNumberState(calc, 'amount') === "0")
    assert(getNumberState(calc, 'display') === "12")

    clickButton(calc, '3')
    assert(getNumberState(calc, 'amount') === "0")
    assert(getNumberState(calc, 'display') === "123")

    clickButton(calc, '4')
    assert(getNumberState(calc, 'amount') === "0")
    assert(getNumberState(calc, 'display') === "1234")

    clickButton(calc, '5')
    assert(getNumberState(calc, 'amount') === "0")
    assert(getNumberState(calc, 'display') === "12345")

    clickButton(calc, '6')
    assert(getNumberState(calc, 'amount') === "0")
    assert(getNumberState(calc, 'display') === "123456")

    clickButton(calc, '7')
    assert(getNumberState(calc, 'amount') === "0")
    assert(getNumberState(calc, 'display') === "1234567")

    clickButton(calc, '8')
    assert(getNumberState(calc, 'amount') === "0")
    assert(getNumberState(calc, 'display') === "12345678")

    clickButton(calc, '9')
    assert(getNumberState(calc, 'amount') === "0")
    assert(getNumberState(calc, 'display') === "123456789")

    clickButton(calc, '0')
    assert(getNumberState(calc, 'amount') === "0")
    assert(getNumberState(calc, 'display') === "1234567890")

    clickButton(calc, '00')
    assert(getNumberState(calc, 'amount') === "0")
    assert(getNumberState(calc, 'display') === "123456789000")
  })

  it('should calculate the addition with the plus key.', function () {
    const calc = createCalculator()

    assert(getNumberState(calc, 'amount') === "0")
    assert(getNumberState(calc, 'display') === "0")

    clickButton(calc, '1', '+', '1', '=');
    assert(getNumberState(calc, 'amount') === '2')

    clickButton(calc, '+', '5')
    assert(getNumberState(calc, 'display') === "5")
    assert(getNumberState(calc, 'amount') === '2')
    clickButton(calc, '+')
    assert(getNumberState(calc, 'display') === '7')
    assert(getNumberState(calc, 'amount') === '7')

    clickButton(calc, '1', '00')
    assert(getNumberState(calc, 'display') === "100")
    assert(getNumberState(calc, 'amount') === '7')
    clickButton(calc, '=')
    assert(getNumberState(calc, 'display') === '107')
    assert(getNumberState(calc, 'amount') === '107')

  })
})
