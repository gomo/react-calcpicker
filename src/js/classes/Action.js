const Action =  {
  one: function(calc, btnProps, event){
    btnProps.component.refs.element.focus()
    calc.inputNumber('1')
  },
  two: function(calc, btnProps, event){
    btnProps.component.refs.element.focus()
    calc.inputNumber('2')
  },
  three: function(calc, btnProps, event){
    btnProps.component.refs.element.focus()
    calc.inputNumber('3')
  },
  four: function(calc, btnProps, event){
    btnProps.component.refs.element.focus()
    calc.inputNumber('4')
  },
  five: function(calc, btnProps, event){
    btnProps.component.refs.element.focus()
    calc.inputNumber('5')
  },
  six: function(calc, btnProps, event){
    btnProps.component.refs.element.focus()
    calc.inputNumber('6')
  },
  seven: function(calc, btnProps, event){
    btnProps.component.refs.element.focus()
    calc.inputNumber('7')
  },
  eight: function(calc, btnProps, event){
    btnProps.component.refs.element.focus()
    calc.inputNumber('8')
  },
  nine: function(calc, btnProps, event){
    btnProps.component.refs.element.focus()
    calc.inputNumber('9')
  },
  zero: function(calc, btnProps, event){
    btnProps.component.refs.element.focus()
    calc.inputNumber('0')
  },
  doubleZero: function(calc, btnProps, event){
    btnProps.component.refs.element.focus()
    calc.inputNumber('00')
  },
  decimal: function(calc, btnProps, event){
    btnProps.component.refs.element.focus()
    calc.inputDecimal()
  },
  percent: function(calc, btnProps, event){
    btnProps.component.refs.element.focus()
    calc.inputPercent(btnProps)
  },
  plus: function(calc, btnProps, event){
    btnProps.component.refs.element.focus()
    calc.inputOperator('+', btnProps)
  },
  minus: function(calc, btnProps, event){
    btnProps.component.refs.element.focus()
    calc.inputOperator('-', btnProps)
  },
  multiplication: function(calc, btnProps, event){
    btnProps.component.refs.element.focus()
    calc.inputOperator('*', btnProps)
  },
  division: function(calc, btnProps, event){
    btnProps.component.refs.element.focus()
    calc.inputOperator('/', btnProps)
  },
  enter: function(calc, btnProps, event){
    btnProps.component.refs.element.focus()
    calc.execute()
  },
  allClear: function(calc, btnProps, event){
    btnProps.component.refs.element.focus()
    calc.allClear()
  },
  clear: function(calc, btnProps, event){
    btnProps.component.refs.element.focus()
    calc.clear()
  },
  backspace: function(calc, btnProps, event){
    btnProps.component.refs.element.focus()
    calc.delete()
  },
}

export default Action;
