import React from 'react'
import {CurrencyCalculator, Rect, Action} from '../../../dist/react-currency-calculator';
export default class DefaultSection extends React.Component
{
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div className="container">
        <CurrencyCalculator
          initialAmount={0}
          currencyFormat={'$0,0[.]00'}
          positions={[Rect.RIGHT_BOTTOM, Rect.RIGHT_TOP, Rect.LEFT_BOTTOM, Rect.LEFT_TOP]}
          buttons={[
            [
              {style: "dark", display: <span>AC</span>, action: Action.allClear},
              {style: "dark", display: <span>←</span>, action: Action.backspace},
              {style: "light", display: <span>%</span>, action: Action.percent},
              {style: "primary", display: <span>÷</span>, action: Action.division},
            ],
            [
              {style: "default", display: <span>7</span>, action: Action.seven},
              {style: "default", display: <span>8</span>, action: Action.eight},
              {style: "default", display: <span>9</span>, action: Action.nine},
              {style: "primary", display: <span>×</span>, action: Action.multiplication},
            ],[
              {style: "default", display: <span>4</span>, action: Action.four},
              {style: "default", display: <span>5</span>, action: Action.five},
              {style: "default", display: <span>6</span>, action: Action.six},
              {style: "primary", display: <span>-</span>, action: Action.minus},
            ],[
              {style: "default", display: <span>1</span>, action: Action.one},
              {style: "default", display: <span>2</span>, action: Action.two},
              {style: "default", display: <span>3</span>, action: Action.three},
              {style: "primary", display: <span>+</span>, action: Action.plus},
            ],[
              {style: "default", display: <span>0</span>, action: Action.zero},
              {style: "default", display: <span>00</span>, action: Action.doubleZero},
              {style: "default", display: <span>.</span>, action: Action.decimal},
              {style: "warning", display: <span>=</span>, action: Action.enter},
            ]
          ]}
        />
      </div>
    );
  }
}
