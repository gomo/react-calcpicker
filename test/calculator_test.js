import React from 'react'
import assert from 'power-assert'
import { mount, shallow } from 'enzyme'

import Calculator from '../src/js/components/Calculator'
import Action from '../src/js/classes/Action'

const createCalculator = () => {
  return mount(
    <Calculator
      initialValue="0"
      positions={[]}
      buttonWidth={36}
      buttonHeight={32}
      buttonMargin={3}
      buttons={[
        [
          {style: "default", className:"_C", display: <span>C</span>, action: Action.clear},
        ],
        [
          {style: "default", className:"_AC", display: <span>AC</span>, action: Action.allClear},
          {style: "default", className:"bs", display: <span>←</span>, action: Action.backspace},
          {style: "default", className:"percent", display: <span>%</span>, action: Action.percent},
          {style: "default", className:"division", display: <span>÷</span>, action: Action.division},
        ],
        [
          {style: "default", className:"_7", display: <span>7</span>, action: Action.seven},
          {style: "default", className:"_8", display: <span>8</span>, action: Action.eight},
          {style: "default", className:"_9", display: <span>9</span>, action: Action.nine},
          {style: "default", className:"times", display: <span>×</span>, action: Action.multiplication},
        ],[
          {style: "default", className:"_6", display: <span>6</span>, action: Action.six},
          {style: "default", className:"_5", display: <span>5</span>, action: Action.five},
          {style: "default", className:"_4", display: <span>4</span>, action: Action.four},
          {style: "default", className:"minus", display: <span>-</span>, action: Action.minus},
        ],[
          {style: "default", className:"_3", display: <span>3</span>, action: Action.three},
          {style: "default", className:"_2", display: <span>2</span>, action: Action.two},
          {style: "default", className:"_1", display: <span>1</span>, action: Action.one},
          {style: "default", className:"plus", display: <span>+</span>, action: Action.plus},
        ],[
          {style: "default", className:"_0", display: <span>0</span>, action: Action.zero},
          {style: "default", className:"_00", display: <span>00</span>, action: Action.doubleZero},
          {style: "default", className:"decimal", display: <span>.</span>, action: Action.decimal},
          {style: "default", className:"equal", display: <span>=</span>, action: Action.enter},
        ]
      ]}
    />
  );
}

const symbolMap = {
  '-': 'minus',
  '+': 'plus',
  '/': 'division',
  '*': 'times',
  '=': 'equal',
  '%': 'percent',
  '.': 'decimal',
  '←': 'bs',
}

const clickButton = (calc, ...symbols) => {
  symbols.forEach(symbol => {
    const className = '.react-calcpicker__calculator-buttons .react-calcpicker__calculator-button.' + (symbolMap[symbol] ? symbolMap[symbol] : '_' + symbol);
    const button = calc.find(className);
    if(button.nodes.length === 0){
      throw 'Missing ' + className + ' element.';
    } else if(button.nodes.length > 1){
      throw 'Find multiple ' + className + ' elements.';
    }
    button.simulate('click')
  })
}

const getNumberState = (calc, stateName) => {
  return calc.state(stateName).toString()
}

describe('Calculator', () => {
  it('should display a number on the display when you press a numeric key.', function () {
    const calc = createCalculator()

    assert(getNumberState(calc, 'value') === "0")
    assert(getNumberState(calc, 'display') === "0")

    clickButton(calc, '1');
    assert(getNumberState(calc, 'value') === "0")
    assert(getNumberState(calc, 'display') === "1")

    clickButton(calc, '2')
    assert(getNumberState(calc, 'value') === "0")
    assert(getNumberState(calc, 'display') === "12")

    clickButton(calc, '3')
    assert(getNumberState(calc, 'value') === "0")
    assert(getNumberState(calc, 'display') === "123")

    clickButton(calc, '4')
    assert(getNumberState(calc, 'value') === "0")
    assert(getNumberState(calc, 'display') === "1234")

    clickButton(calc, '5')
    assert(getNumberState(calc, 'value') === "0")
    assert(getNumberState(calc, 'display') === "12345")

    clickButton(calc, '6')
    assert(getNumberState(calc, 'value') === "0")
    assert(getNumberState(calc, 'display') === "123456")

    clickButton(calc, '7')
    assert(getNumberState(calc, 'value') === "0")
    assert(getNumberState(calc, 'display') === "1234567")

    clickButton(calc, '8')
    assert(getNumberState(calc, 'value') === "0")
    assert(getNumberState(calc, 'display') === "12345678")

    clickButton(calc, '9')
    assert(getNumberState(calc, 'value') === "0")
    assert(getNumberState(calc, 'display') === "123456789")

    clickButton(calc, '0')
    assert(getNumberState(calc, 'value') === "0")
    assert(getNumberState(calc, 'display') === "1234567890")

    clickButton(calc, '00')
    assert(getNumberState(calc, 'value') === "0")
    assert(getNumberState(calc, 'display') === "123456789000")
  })

  it('should calculate the addition with `+` key.', function () {
    const calc = createCalculator()

    assert(getNumberState(calc, 'value') === "0")
    assert(getNumberState(calc, 'display') === "0")
    assert(calc.state('operator').value === undefined)

    clickButton(calc, '1', '+', '1', '=');
    assert(getNumberState(calc, 'value') === '2')

    clickButton(calc, '+', '5')
    assert(getNumberState(calc, 'display') === "5")
    assert(getNumberState(calc, 'value') === '2')
    clickButton(calc, '+')
    assert(getNumberState(calc, 'display') === '7')
    assert(getNumberState(calc, 'value') === '7')
    assert(calc.state('operator').value === '+')

    clickButton(calc, '1', '00')
    assert(getNumberState(calc, 'display') === "100")
    assert(getNumberState(calc, 'value') === '7')
    clickButton(calc, '=')
    assert(getNumberState(calc, 'display') === '107')
    assert(getNumberState(calc, 'value') === '107')

  })

  it('should calculate the multiplication with `*` key.', function () {
    const calc = createCalculator()

    assert(getNumberState(calc, 'value') === "0")
    assert(getNumberState(calc, 'display') === "0")
    assert(calc.state('operator').value === undefined)

    clickButton(calc, '2', '*', '2', '=');
    assert(getNumberState(calc, 'value') === '4')

    clickButton(calc, '*', '5')
    assert(getNumberState(calc, 'display') === "5")
    assert(getNumberState(calc, 'value') === '4')
    clickButton(calc, '*')
    assert(getNumberState(calc, 'display') === '20')
    assert(getNumberState(calc, 'value') === '20')
    assert(calc.state('operator').value === '*')

    clickButton(calc, '1', '00')
    assert(getNumberState(calc, 'display') === "100")
    assert(getNumberState(calc, 'value') === '20')
    clickButton(calc, '=')
    assert(getNumberState(calc, 'display') === '2000')
    assert(getNumberState(calc, 'value') === '2000')

  })

  it('should calculate the subtraction with `-` key.', function () {
    const calc = createCalculator()

    assert(getNumberState(calc, 'value') === "0")
    assert(getNumberState(calc, 'display') === "0")
    assert(calc.state('operator').value === undefined)

    clickButton(calc, '1', '00', '-', '2', '=');
    assert(getNumberState(calc, 'value') === '98')

    clickButton(calc, '-', '1', '2')
    assert(getNumberState(calc, 'display') === "12")
    assert(getNumberState(calc, 'value') === '98')
    clickButton(calc, '-')
    assert(getNumberState(calc, 'display') === '86')
    assert(getNumberState(calc, 'value') === '86')
    assert(calc.state('operator').value === '-')

    clickButton(calc, '1', '00')
    assert(getNumberState(calc, 'display') === "100")
    assert(getNumberState(calc, 'value') === '86')
    clickButton(calc, '=')
    assert(getNumberState(calc, 'display') === '-14')
    assert(getNumberState(calc, 'value') === '-14')

  })

  it('should calculate the division with `/` key.', function () {
    const calc = createCalculator()

    assert(getNumberState(calc, 'value') === "0")
    assert(getNumberState(calc, 'display') === "0")
    assert(calc.state('operator').value === undefined)

    clickButton(calc, '1', '2', '0', '/', '2', '=');
    assert(getNumberState(calc, 'value') === '60')

    clickButton(calc, '/', '1', '2')
    assert(getNumberState(calc, 'display') === "12")
    assert(getNumberState(calc, 'value') === '60')
    clickButton(calc, '/')
    assert(getNumberState(calc, 'display') === '5')
    assert(getNumberState(calc, 'value') === '5')
    assert(calc.state('operator').value === '/')

    clickButton(calc, '1', '00')
    assert(getNumberState(calc, 'display') === "100")
    assert(getNumberState(calc, 'value') === '5')
    clickButton(calc, '=')
    assert(getNumberState(calc, 'display') === '0.05')
    assert(getNumberState(calc, 'value') === '0.05')

  })

  it('should erase one number with `←` key.', function () {
    const calc = createCalculator()

    assert(getNumberState(calc, 'value') === "0")
    assert(getNumberState(calc, 'display') === "0")
    assert(calc.state('operator').value === undefined)

    clickButton(calc, '1', '←');
    assert(getNumberState(calc, 'value') === "0")
    assert(getNumberState(calc, 'display') === "0")

    clickButton(calc, '1', '+', '1', '=');
    assert(getNumberState(calc, 'display') === "2")
    assert(getNumberState(calc, 'value') === '2')

    clickButton(calc, '*', '1', '00', '00');
    assert(getNumberState(calc, 'display') === "10000")
    assert(getNumberState(calc, 'value') === '2')

    clickButton(calc, '←', '←', '←');
    assert(getNumberState(calc, 'display') === "10")
    assert(getNumberState(calc, 'value') === '2')

    clickButton(calc, '+', '2', '00', '=');
    assert(getNumberState(calc, 'display') === "220")
    assert(getNumberState(calc, 'value') === '220')

    clickButton(calc, '+', '2', '00', '←', '←', '←');
    assert(getNumberState(calc, 'display') === "0")
    assert(getNumberState(calc, 'value') === '220')
    clickButton(calc, '=');
    assert(getNumberState(calc, 'display') === "220")
    assert(getNumberState(calc, 'value') === '220')

    clickButton(calc, 'AC');
    assert(getNumberState(calc, 'value') === "0")
    assert(getNumberState(calc, 'display') === "0")
    assert(calc.state('operator').value === undefined)
    clickButton(calc, '1', '+', '2', '=', '←');
    assert(getNumberState(calc, 'value') === "3")
    assert(getNumberState(calc, 'display') === "3")

    clickButton(calc, 'AC');
    clickButton(calc, '1', '0', '+', '1', '0', '%');
    assert(getNumberState(calc, 'value') === "10")
    assert(getNumberState(calc, 'display') === "10")
    assert(calc.state('unit').value === '%')
    clickButton(calc, '←', '←');
    assert(getNumberState(calc, 'value') === "10")
    assert(getNumberState(calc, 'display') === "0")
    assert(calc.state('unit').value === '%')
    clickButton(calc, '←');
    assert(getNumberState(calc, 'value') === "10")
    assert(getNumberState(calc, 'display') === "0")
    assert(calc.state('unit').value === undefined)
  })

  it('should clear all with `AC` key.', function () {
    const calc = createCalculator()

    assert(getNumberState(calc, 'value') === "0")
    assert(getNumberState(calc, 'display') === "0")
    assert(calc.state('operator').value === undefined)

    clickButton(calc, '1', '0');
    assert(getNumberState(calc, 'value') === "0")
    assert(getNumberState(calc, 'display') === "10")
    assert(calc.state('operator').value === undefined)
    clickButton(calc, 'AC');
    assert(getNumberState(calc, 'value') === "0")
    assert(getNumberState(calc, 'display') === "0")
    assert(calc.state('operator').value === undefined)

    clickButton(calc, '1', '+', '1', '=');
    assert(getNumberState(calc, 'value') === "2")
    assert(getNumberState(calc, 'display') === "2")
    assert(calc.state('operator').value === undefined)
    clickButton(calc, 'AC');
    assert(getNumberState(calc, 'value') === "0")
    assert(getNumberState(calc, 'display') === "0")
    assert(calc.state('operator').value === undefined)

    clickButton(calc, '1', '+', '1', '+');
    assert(getNumberState(calc, 'value') === "2")
    assert(getNumberState(calc, 'display') === "2")
    assert(calc.state('operator').value === '+')
    clickButton(calc, 'AC');
    assert(getNumberState(calc, 'value') === "0")
    assert(getNumberState(calc, 'display') === "0")
    assert(calc.state('operator').value === undefined)

    clickButton(calc, 'AC');
    clickButton(calc, '1', '0', '+', '1', '0', '%');
    assert(getNumberState(calc, 'value') === "10")
    assert(getNumberState(calc, 'display') === "10")
    assert(calc.state('unit').value === '%')
    clickButton(calc, 'AC');
    assert(getNumberState(calc, 'value') === "0")
    assert(getNumberState(calc, 'display') === "0")
    assert(calc.state('unit').value === undefined)
  })

  it('should clear only display with `C` key.', function () {
    const calc = createCalculator()

    assert(getNumberState(calc, 'value') === "0")
    assert(getNumberState(calc, 'display') === "0")
    assert(calc.state('operator').value === undefined)

    clickButton(calc, '1', '0');
    assert(getNumberState(calc, 'value') === "0")
    assert(getNumberState(calc, 'display') === "10")
    assert(calc.state('operator').value === undefined)
    clickButton(calc, 'C');
    assert(getNumberState(calc, 'value') === "0")
    assert(getNumberState(calc, 'display') === "0")
    assert(calc.state('operator').value === undefined)

    clickButton(calc, 'AC');
    clickButton(calc, '1', '0', '+', '1', '0');
    assert(getNumberState(calc, 'value') === "10")
    assert(getNumberState(calc, 'display') === "10")
    assert(calc.state('operator').value === '+')
    clickButton(calc, 'C');
    assert(getNumberState(calc, 'value') === "10")
    assert(getNumberState(calc, 'display') === "0")
    assert(calc.state('operator').value === '+')

    clickButton(calc, 'AC');
    clickButton(calc, '1', '0', '+', '1', '0', '=');
    assert(getNumberState(calc, 'value') === "20")
    assert(getNumberState(calc, 'display') === "20")
    assert(calc.state('operator').value === undefined)
    clickButton(calc, 'C');
    assert(getNumberState(calc, 'value') === "20")
    assert(getNumberState(calc, 'display') === "20")
    assert(calc.state('operator').value === undefined)

    clickButton(calc, 'AC');
    clickButton(calc, '1', '0', '+', '1', '0', '%');
    assert(getNumberState(calc, 'value') === "10")
    assert(getNumberState(calc, 'display') === "10")
    assert(calc.state('unit').value === '%')
    clickButton(calc, 'C');
    assert(getNumberState(calc, 'value') === "10")
    assert(getNumberState(calc, 'display') === "0")
    assert(calc.state('unit').value === undefined)
  })

  it('should calculate percent correctly.', function () {
    const calc = createCalculator()

    assert(getNumberState(calc, 'value') === "0")
    assert(getNumberState(calc, 'display') === "0")
    assert(calc.state('operator').value === undefined)

    clickButton(calc, '1', '00', '+', '8', '%');
    assert(getNumberState(calc, 'value') === "100")
    assert(getNumberState(calc, 'display') === "8")
    assert(calc.state('unit').value === '%')
    clickButton(calc, '=');
    assert(getNumberState(calc, 'value') === "108")
    assert(getNumberState(calc, 'display') === "108")

    clickButton(calc, 'AC');
    clickButton(calc, '1', '00', '-', '1', '0', '%', '=');
    assert(getNumberState(calc, 'value') === "90")
    assert(getNumberState(calc, 'display') === "90")

    clickButton(calc, 'AC');
    clickButton(calc, '1', '00', '*', '3', '0', '%', '=');
    assert(getNumberState(calc, 'value') === "30")
    assert(getNumberState(calc, 'display') === "30")

    clickButton(calc, 'AC');
    clickButton(calc, '1', '00', '/', '8', '0', '%', '=');
    assert(getNumberState(calc, 'value') === "125")
    assert(getNumberState(calc, 'display') === "125")

    clickButton(calc, 'AC');
    clickButton(calc, '6', '0', '%');
    assert(getNumberState(calc, 'value') === "0")
    assert(getNumberState(calc, 'display') === "0.6")
  })

  it('should calculate the decimal correctly.', function () {
    const calc = createCalculator()

    assert(getNumberState(calc, 'value') === "0")
    assert(getNumberState(calc, 'display') === "0")
    assert(calc.state('operator').value === undefined)

    clickButton(calc, '1', '00', '+', '0', '.', '3', '=');
    assert(getNumberState(calc, 'value') === "100.3")
    assert(getNumberState(calc, 'display') === "100.3")

    clickButton(calc, 'AC')
    clickButton(calc, '1', '00', '*', '0', '.', '2', '=')
    assert(getNumberState(calc, 'value') === "20")
    assert(getNumberState(calc, 'display') === "20")

    clickButton(calc, 'AC')
    clickButton(calc, '1', '00', '/', '0', '.', '4', '=')
    assert(getNumberState(calc, 'value') === "250")
    assert(getNumberState(calc, 'display') === "250")

    clickButton(calc, 'AC')
    clickButton(calc, '1', '00', '-', '0', '.', '8', '=')
    assert(getNumberState(calc, 'value') === "99.2")
    assert(getNumberState(calc, 'display') === "99.2")
  })

  it('should be able to change the operator.', function () {
    const calc = createCalculator()

    assert(getNumberState(calc, 'value') === "0")
    assert(getNumberState(calc, 'display') === "0")
    assert(calc.state('operator').value === undefined)

    clickButton(calc, '1', '00', '+', '-', '9', '=');
    assert(getNumberState(calc, 'value') === "91")
    assert(getNumberState(calc, 'display') === "91")

    clickButton(calc, 'AC')
    clickButton(calc, '1', '00', '+', '-', '/', '2', '=');
    assert(getNumberState(calc, 'value') === "50")
    assert(getNumberState(calc, 'display') === "50")
  })

  it('should reset the input of the number after calculation.', function () {
    const calc = createCalculator()

    assert(getNumberState(calc, 'value') === "0")
    assert(getNumberState(calc, 'display') === "0")
    assert(calc.state('operator').value === undefined)

    clickButton(calc, '1', '00', '+', '9', '=');
    assert(getNumberState(calc, 'value') === "109")
    assert(getNumberState(calc, 'display') === "109")

    clickButton(calc, '1');
    assert(getNumberState(calc, 'value') === "109")
    assert(getNumberState(calc, 'display') === "1")
    clickButton(calc, '+', '1', '=');
    assert(getNumberState(calc, 'value') === "2")
    assert(getNumberState(calc, 'display') === "2")

    clickButton(calc, '1', '+', '1', '+', '3');
    assert(getNumberState(calc, 'value') === "2")
    assert(getNumberState(calc, 'display') === "3")
    clickButton(calc, '=');
    assert(getNumberState(calc, 'value') === "5")
    assert(getNumberState(calc, 'display') === "5")
  })

  it('should do the correct calculation even if push many times the operator.', function () {
    const calc = createCalculator()

    assert(getNumberState(calc, 'value') === "0")
    assert(getNumberState(calc, 'display') === "0")
    assert(calc.state('operator').value === undefined)

    clickButton(calc, '1', '00', '+', '+', '+', '-', '9', '=', '=');
    assert(getNumberState(calc, 'value') === "91")
    assert(getNumberState(calc, 'display') === "91")

    clickButton(calc, 'AC')
    clickButton(calc, '1', '00', '*', '*', '*', '-', '9', '=', '=');
    assert(getNumberState(calc, 'value') === "91")
    assert(getNumberState(calc, 'display') === "91")

    clickButton(calc, 'AC')
    clickButton(calc, '1', '00', '-', '-', '-', '-', '9', '=', '=');
    assert(getNumberState(calc, 'value') === "91")
    assert(getNumberState(calc, 'display') === "91")

    clickButton(calc, 'AC')
    clickButton(calc, '1', '00', '/', '/', '/', '-', '9', '=', '=');
    assert(getNumberState(calc, 'value') === "91")
    assert(getNumberState(calc, 'display') === "91")

    clickButton(calc, 'AC')
    clickButton(calc, '1', '00', '/', '/', '/', '-', '9', '%', '%','=', '=');
    assert(getNumberState(calc, 'value') === "91")
    assert(getNumberState(calc, 'display') === "91")
  })
})
