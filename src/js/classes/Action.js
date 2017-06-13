import Global from './Global'

const Action =  {
  one: function(calc, btnProps, event){
    calc.inputToDisplay('1')
  },
  two: function(calc, btnProps, event){
    calc.inputToDisplay('2')
  },
  three: function(calc, btnProps, event){
    calc.inputToDisplay('3')
  },
  four: function(calc, btnProps, event){
    calc.inputToDisplay('4')
  },
  five: function(calc, btnProps, event){
    calc.inputToDisplay('5')
  },
  six: function(calc, btnProps, event){
    calc.inputToDisplay('6')
  },
  seven: function(calc, btnProps, event){
    calc.inputToDisplay('7')
  },
  eight: function(calc, btnProps, event){
    calc.inputToDisplay('8')
  },
  nine: function(calc, btnProps, event){
    calc.inputToDisplay('9')
  },
  zero: function(calc, btnProps, event){
    calc.inputToDisplay('0')
  },
  doubleZero: function(calc, btnProps, event){
    calc.inputToDisplay('00')
  },
  decimal: function(calc, btnProps, event){
    calc.inputDecimal()
  },
  percent: function(calc, btnProps, event){
    calc.inputPercent(btnProps)
  },
  plus: function(calc, btnProps, event){
    calc.inputOperator('+', btnProps)
  },
  minus: function(calc, btnProps, event){
    calc.inputOperator('-', btnProps)
  },
  multiplication: function(calc, btnProps, event){
    calc.inputOperator('*', btnProps)
  },
  division: function(calc, btnProps, event){
    calc.inputOperator('/', btnProps)
  },
  enter: function(calc, btnProps, event){
    calc.execute(() => {
      calc.fix()
      if(calc.props.closeOnEnterAction){
        calc.close()
      }
    })
  },
  allClear: function(calc, btnProps, event){
    calc.allClear()
  },
  clear: function(calc, btnProps, event){
    calc.clear()
  },
  backspace: function(calc, btnProps, event){
    calc.delete()
  },
}

export default Action;
