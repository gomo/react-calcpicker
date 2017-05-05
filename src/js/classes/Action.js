const Action =  {
  one: function(calc){
    calc.inputNumber('1')
  },
  two: function(calc){
    calc.inputNumber('2')
  },
  three: function(calc){
    calc.inputNumber('3')
  },
  four: function(calc){
    calc.inputNumber('4')
  },
  five: function(calc){
    calc.inputNumber('5')
  },
  six: function(calc){
    calc.inputNumber('6')
  },
  seven: function(calc){
    calc.inputNumber('7')
  },
  eight: function(calc){
    calc.inputNumber('8')
  },
  nine: function(calc){
    calc.inputNumber('9')
  },
  zero: function(calc){
    calc.inputNumber('0')
  },
  doubleZero: function(calc){
    calc.inputNumber('00')
  },
  decimal: function(calc){
    calc.inputDecimal()
  },
  percent: function(calc, btnProps){
    calc.inputPercent(btnProps)
  },
  plus: function(calc, btnProps){
    calc.inputOperator('+', btnProps)
  },
  minus: function(calc, btnProps){
    calc.inputOperator('-', btnProps)
  },
  multiplication: function(calc, btnProps){
    calc.inputOperator('*', btnProps)
  },
  division: function(calc, btnProps){
    calc.inputOperator('/', btnProps)
  },
  enter: function(calc){
    calc.execute()
  },
  allClear: function(calc){
    calc.allClear()
  },
  clear: function(calc){
    calc.clear()
  },
  backspace: function(calc){
    calc.delete()
  },
}

export default Action;
