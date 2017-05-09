import React from 'react'
import {CalcPicker, Rect, Action} from '../../../dist/react-calcpicker';
export default class DefaultSection extends React.Component
{
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div className="container">
        <CalcPicker
          initialAmount={0}
          currencyFormat={'$ 0,0[.]00'}
          positions={[Rect.RIGHT_BOTTOM, Rect.RIGHT_TOP, Rect.LEFT_BOTTOM, Rect.LEFT_TOP]}
          buttons={[
            [
              {style: "dark", display: <span>AC</span>, action: Action.allClear, keyDown: e => e.key == 'Clear'},
              {style: "dark", display: <span>←</span>, action: Action.backspace, keyDown: e => e.key == 'Backspace'},
              {style: "light", display: <span>%</span>, action: Action.percent, keyDown: e => e.key == '%'},
              {style: "primary", display: <span>÷</span>, action: Action.division, keyDown: e => e.key == '/'},
            ],
            [
              {style: "default", display: <span>7</span>, action: Action.seven, keyDown: e => e.key == '7'},
              {style: "default", display: <span>8</span>, action: Action.eight, keyDown: e => e.key == '8'},
              {style: "default", display: <span>9</span>, action: Action.nine, keyDown: e => e.key == '9'},
              {style: "primary", display: <span>×</span>, action: Action.multiplication, keyDown: e => e.key == '*'},
            ],[
              {style: "default", display: <span>4</span>, action: Action.four, keyDown: e => e.key == '4'},
              {style: "default", display: <span>5</span>, action: Action.five, keyDown: e => e.key == '5'},
              {style: "default", display: <span>6</span>, action: Action.six, keyDown: e => e.key == '6'},
              {style: "primary", display: <span>-</span>, action: Action.minus, keyDown: e => e.key == '-'},
            ],[
              {style: "default", display: <span>1</span>, action: Action.one, keyDown: e => e.key == '1'},
              {style: "default", display: <span>2</span>, action: Action.two, keyDown: e => e.key == '2'},
              {style: "default", display: <span>3</span>, action: Action.three, keyDown: e => e.key == '3'},
              {style: "primary", display: <span>+</span>, action: Action.plus, keyDown: e => e.key == '+'},
            ],[
              {style: "default", display: <span>0</span>, action: Action.zero, keyDown: e => e.key == '0'},
              {style: "default", display: <span>00</span>, action: Action.doubleZero, keyDown: e => e.keyCode == 48 && e.shiftKey},
              {style: "default", display: <span>.</span>, action: Action.decimal, keyDown: e => e.key == '.'},
              {style: "warning", display: <span>=</span>, action: Action.enter, keyDown: e => e.key == '=' || e.key == 'Enter'},
            ]
          ]}
        />
      </div>
    );
  }
}
