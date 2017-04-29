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
    calc.find('.react-currency-calculator__calculator-buttons .react-currency-calculator__calculator-button.' + className).simulate('click')
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

  it('should calculate the addition with `+` key.', function () {
    const calc = createCalculator()

    assert(getNumberState(calc, 'amount') === "0")
    assert(getNumberState(calc, 'display') === "0")
    assert(calc.state('operator') === undefined)

    clickButton(calc, '1', '+', '1', '=');
    assert(getNumberState(calc, 'amount') === '2')

    clickButton(calc, '+', '5')
    assert(getNumberState(calc, 'display') === "5")
    assert(getNumberState(calc, 'amount') === '2')
    clickButton(calc, '+')
    assert(getNumberState(calc, 'display') === '7')
    assert(getNumberState(calc, 'amount') === '7')
    assert(calc.state('operator') === '+')

    clickButton(calc, '1', '00')
    assert(getNumberState(calc, 'display') === "100")
    assert(getNumberState(calc, 'amount') === '7')
    clickButton(calc, '=')
    assert(getNumberState(calc, 'display') === '107')
    assert(getNumberState(calc, 'amount') === '107')

  })

  it('should calculate the multiplication with `×` key.', function () {
    const calc = createCalculator()

    assert(getNumberState(calc, 'amount') === "0")
    assert(getNumberState(calc, 'display') === "0")
    assert(calc.state('operator') === undefined)

    clickButton(calc, '2', '×', '2', '=');
    assert(getNumberState(calc, 'amount') === '4')

    clickButton(calc, '×', '5')
    assert(getNumberState(calc, 'display') === "5")
    assert(getNumberState(calc, 'amount') === '4')
    clickButton(calc, '×')
    assert(getNumberState(calc, 'display') === '20')
    assert(getNumberState(calc, 'amount') === '20')
    assert(calc.state('operator') === '×')

    clickButton(calc, '1', '00')
    assert(getNumberState(calc, 'display') === "100")
    assert(getNumberState(calc, 'amount') === '20')
    clickButton(calc, '=')
    assert(getNumberState(calc, 'display') === '2000')
    assert(getNumberState(calc, 'amount') === '2000')

  })

  it('should calculate the subtraction with `-` key.', function () {
    const calc = createCalculator()

    assert(getNumberState(calc, 'amount') === "0")
    assert(getNumberState(calc, 'display') === "0")
    assert(calc.state('operator') === undefined)

    clickButton(calc, '1', '00', '-', '2', '=');
    assert(getNumberState(calc, 'amount') === '98')

    clickButton(calc, '-', '1', '2')
    assert(getNumberState(calc, 'display') === "12")
    assert(getNumberState(calc, 'amount') === '98')
    clickButton(calc, '-')
    assert(getNumberState(calc, 'display') === '86')
    assert(getNumberState(calc, 'amount') === '86')
    assert(calc.state('operator') === '-')

    clickButton(calc, '1', '00')
    assert(getNumberState(calc, 'display') === "100")
    assert(getNumberState(calc, 'amount') === '86')
    clickButton(calc, '=')
    assert(getNumberState(calc, 'display') === '-14')
    assert(getNumberState(calc, 'amount') === '-14')

  })

  it('should calculate the division with `÷` key.', function () {
    const calc = createCalculator()

    assert(getNumberState(calc, 'amount') === "0")
    assert(getNumberState(calc, 'display') === "0")
    assert(calc.state('operator') === undefined)

    clickButton(calc, '1', '2', '0', '÷', '2', '=');
    assert(getNumberState(calc, 'amount') === '60')

    clickButton(calc, '÷', '1', '2')
    assert(getNumberState(calc, 'display') === "12")
    assert(getNumberState(calc, 'amount') === '60')
    clickButton(calc, '÷')
    assert(getNumberState(calc, 'display') === '5')
    assert(getNumberState(calc, 'amount') === '5')
    assert(calc.state('operator') === '÷')

    clickButton(calc, '1', '00')
    assert(getNumberState(calc, 'display') === "100")
    assert(getNumberState(calc, 'amount') === '5')
    clickButton(calc, '=')
    assert(getNumberState(calc, 'display') === '0.05')
    assert(getNumberState(calc, 'amount') === '0.05')

  })

  it('should clear only the display with `C` key, and all clear with `AC` key.', function () {
    const calc = createCalculator()

    assert(getNumberState(calc, 'amount') === "0")
    assert(getNumberState(calc, 'display') === "0")
    assert(calc.state('operator') === undefined)

    clickButton(calc, '1', 'C');
    assert(getNumberState(calc, 'amount') === "0")
    assert(getNumberState(calc, 'display') === "0")

    clickButton(calc, '1', '+', '1', '=');
    assert(getNumberState(calc, 'display') === "2")
    assert(getNumberState(calc, 'amount') === '2')

    clickButton(calc, '×', '1', '00');
    assert(getNumberState(calc, 'display') === "100")
    assert(getNumberState(calc, 'amount') === '2')

    clickButton(calc, 'C');
    assert(getNumberState(calc, 'display') === "0")
    assert(getNumberState(calc, 'amount') === '2')

    clickButton(calc, '+', '2', '00', '=');
    assert(getNumberState(calc, 'display') === "202")
    assert(getNumberState(calc, 'amount') === '202')

    clickButton(calc, '×', '2', 'AC');
    assert(getNumberState(calc, 'display') === '0')
    assert(getNumberState(calc, 'amount') === '0')
    assert(calc.state('operator') === undefined)
  })

  it('should calculate percent correctly.', function () {
    const calc = createCalculator()

    assert(getNumberState(calc, 'amount') === "0")
    assert(getNumberState(calc, 'display') === "0")
    assert(calc.state('operator') === undefined)

    clickButton(calc, '1', '00', '+', '8', '%', '=');
    assert(getNumberState(calc, 'amount') === "108")
    assert(getNumberState(calc, 'display') === "108")

    clickButton(calc, 'AC');
    clickButton(calc, '1', '00', '-', '1', '0', '%', '=');
    assert(getNumberState(calc, 'amount') === "90")
    assert(getNumberState(calc, 'display') === "90")

    clickButton(calc, 'AC');
    clickButton(calc, '1', '00', '×', '3', '0', '%', '=');
    assert(getNumberState(calc, 'amount') === "30")
    assert(getNumberState(calc, 'display') === "30")

    clickButton(calc, 'AC');
    clickButton(calc, '1', '00', '÷', '8', '0', '%', '=');
    assert(getNumberState(calc, 'amount') === "125")
    assert(getNumberState(calc, 'display') === "125")
  })

  it('should calculate the decimal correctly.', function () {
    const calc = createCalculator()

    assert(getNumberState(calc, 'amount') === "0")
    assert(getNumberState(calc, 'display') === "0")
    assert(calc.state('operator') === undefined)

    clickButton(calc, '1', '00', '+', '0', '.', '3', '=');
    assert(getNumberState(calc, 'amount') === "100.3")
    assert(getNumberState(calc, 'display') === "100.3")

    clickButton(calc, 'AC')
    clickButton(calc, '1', '00', '×', '0', '.', '2', '=')
    assert(getNumberState(calc, 'amount') === "20")
    assert(getNumberState(calc, 'display') === "20")

    clickButton(calc, 'AC')
    clickButton(calc, '1', '00', '÷', '0', '.', '4', '=')
    assert(getNumberState(calc, 'amount') === "250")
    assert(getNumberState(calc, 'display') === "250")

    clickButton(calc, 'AC')
    clickButton(calc, '1', '00', '-', '0', '.', '8', '=')
    assert(getNumberState(calc, 'amount') === "99.2")
    assert(getNumberState(calc, 'display') === "99.2")
  })

  it('should be able to change the operator halfway.', function () {
    const calc = createCalculator()

    assert(getNumberState(calc, 'amount') === "0")
    assert(getNumberState(calc, 'display') === "0")
    assert(calc.state('operator') === undefined)

    clickButton(calc, '1', '00', '+', '-', '9', '=');
    assert(getNumberState(calc, 'amount') === "91")
    assert(getNumberState(calc, 'display') === "91")

    clickButton(calc, 'AC')
    clickButton(calc, '1', '00', '+', '-', '÷', '2', '=');
    assert(getNumberState(calc, 'amount') === "50")
    assert(getNumberState(calc, 'display') === "50")
  })

  it('should reset the input of the number after calculation.', function () {
    const calc = createCalculator()

    assert(getNumberState(calc, 'amount') === "0")
    assert(getNumberState(calc, 'display') === "0")
    assert(calc.state('operator') === undefined)

    clickButton(calc, '1', '00', '+', '9', '=');
    assert(getNumberState(calc, 'amount') === "109")
    assert(getNumberState(calc, 'display') === "109")

    clickButton(calc, '1');
    assert(getNumberState(calc, 'amount') === "109")
    assert(getNumberState(calc, 'display') === "1")
    clickButton(calc, '+', '1', '=');
    assert(getNumberState(calc, 'amount') === "2")
    assert(getNumberState(calc, 'display') === "2")

    clickButton(calc, '1', '+', '1', '+', '3');
    assert(getNumberState(calc, 'amount') === "2")
    assert(getNumberState(calc, 'display') === "3")
    clickButton(calc, '=');
    assert(getNumberState(calc, 'amount') === "5")
    assert(getNumberState(calc, 'display') === "5")
  })

  it('should do the correct calculation even if push many times the operator.', function () {
    const calc = createCalculator()

    assert(getNumberState(calc, 'amount') === "0")
    assert(getNumberState(calc, 'display') === "0")
    assert(calc.state('operator') === undefined)

    clickButton(calc, '1', '00', '+', '+', '+', '-', '9', '=', '=');
    assert(getNumberState(calc, 'amount') === "91")
    assert(getNumberState(calc, 'display') === "91")

    clickButton(calc, 'AC')
    clickButton(calc, '1', '00', '×', '×', '×', '-', '9', '=', '=');
    assert(getNumberState(calc, 'amount') === "91")
    assert(getNumberState(calc, 'display') === "91")

    clickButton(calc, 'AC')
    clickButton(calc, '1', '00', '-', '-', '-', '-', '9', '=', '=');
    assert(getNumberState(calc, 'amount') === "91")
    assert(getNumberState(calc, 'display') === "91")

    clickButton(calc, 'AC')
    clickButton(calc, '1', '00', '÷', '÷', '÷', '-', '9', '=', '=');
    assert(getNumberState(calc, 'amount') === "91")
    assert(getNumberState(calc, 'display') === "91")

    clickButton(calc, 'AC')
    clickButton(calc, '1', '00', '÷', '÷', '÷', '-', '9', '%', '%','=', '=');
    assert(getNumberState(calc, 'amount') === "91")
    assert(getNumberState(calc, 'display') === "91")
  })
})
