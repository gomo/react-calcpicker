import React from 'react'
import TestUtils from 'react-dom/test-utils'
import assert from 'power-assert'

import Adapter from 'enzyme-adapter-react-16'
import { mount, shallow, configure, ReactWrapper } from 'enzyme'
configure({adapter: new Adapter()})

import CalcPicker from '../src/js/components/CalcPicker'
import Action from '../src/js/classes/Action'


describe('CalcPicker', () => {
  it('should toggle open state with picker button.', function () {
    const picker = mount(
      <CalcPicker onChange={() => {}} className="foobar" />
    )
    
    assert(picker.instance().calculatorRef.current === null)
    picker.find('button.foobar').simulate('click')

    assert(picker.instance().calculatorRef.current !== null)
    const calcElem = document.getElementsByClassName("react-calcpicker__calculator-button-close")[0]
    calcElem.click()

    assert(picker.instance().calculatorRef.current === null)
  })

  it('should update its display when the initialValue property is updated.', function () {
    const picker = mount(
      <CalcPicker onChange={() => {}} className="foobar" initialValue={10000}  />
    )

    assert(picker.state('value') === 10000)
    assert(picker.find('button').text() === '10,000')

    picker.setProps({initialValue: 12000})
    assert(picker.state('value') === 12000)
    assert(picker.find('button').text() === '12,000')
  })
})
