const Action =  {
  one: function(calc, btnProps, event){
    btnProps.component.refs.element.focus()
    calc.inputToDisplay('1')
  },
  two: function(calc, btnProps, event){
    btnProps.component.refs.element.focus()
    calc.inputToDisplay('2')
  },
  three: function(calc, btnProps, event){
    btnProps.component.refs.element.focus()
    calc.inputToDisplay('3')
  },
  four: function(calc, btnProps, event){
    btnProps.component.refs.element.focus()
    calc.inputToDisplay('4')
  },
  five: function(calc, btnProps, event){
    btnProps.component.refs.element.focus()
    calc.inputToDisplay('5')
  },
  six: function(calc, btnProps, event){
    btnProps.component.refs.element.focus()
    calc.inputToDisplay('6')
  },
  seven: function(calc, btnProps, event){
    btnProps.component.refs.element.focus()
    calc.inputToDisplay('7')
  },
  eight: function(calc, btnProps, event){
    btnProps.component.refs.element.focus()
    calc.inputToDisplay('8')
  },
  nine: function(calc, btnProps, event){
    btnProps.component.refs.element.focus()
    calc.inputToDisplay('9')
  },
  zero: function(calc, btnProps, event){
    btnProps.component.refs.element.focus()
    calc.inputToDisplay('0')
  },
  doubleZero: function(calc, btnProps, event){
    btnProps.component.refs.element.focus()
    calc.inputToDisplay('00')
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
    calc.execute(() => {
      if(calc.props.closeOnEnterAction){
        calc.close()
      }
    })
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
