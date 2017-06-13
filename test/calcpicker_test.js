import React from 'react'
import TestUtils from 'react-dom/test-utils'
import assert from 'power-assert'
import { mount, ReactWrapper } from 'enzyme'

import CalcPicker from '../src/js/components/CalcPicker'
import Action from '../src/js/classes/Action'


describe('CalcPicker', () => {
  it('should toggle open state with picker button.', function () {
    const picker = mount(
      <CalcPicker onChange={() => {}} className="foobar" />
    )

    assert(picker.instance().refs.calculator === undefined)

    picker.find('.foobar').simulate('click')

    assert(picker.instance().refs.calculator !== undefined)

    const calc = new ReactWrapper(
      picker.instance().refs.calculator,
      true
    );

    calc.find('.react-calcpicker__calculator-button-close').simulate('click')

    assert(picker.instance().refs.calculator === undefined)
  })
})
