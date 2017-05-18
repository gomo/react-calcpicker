import React from 'react'
import {CalcPicker, Rect, Action} from '../../../../dist/react-calcpicker'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { tomorrowNightEighties } from 'react-syntax-highlighter/dist/styles'

export default class Buttons extends React.Component
{
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div>
        <section>
          <h3>Demo</h3>
          <CalcPicker
            onChange={val => console.info(val)}
            buttons= {[
              [
                {style: "default", size: {width: 2}, display: <i className="fa fa-bell-o" aria-hidden="true"></i>, action: (calc, btnProps, event) => alert("WOW!!")},
                {style: "primary", display: "÷", action: Action.division, keyDown: e => e.key == '/'},
                {style: "dark", display: "←", action: Action.backspace, keyDown: e => e.key == 'Backspace'},
              ],
              [
                {style: "dark", display: "AC", action: Action.allClear, keyDown: e => e.key == 'Clear'},
                {style: "dark", display: "C", action: Action.clear, keyDown: e => e.key == 'Backspace'},
                {style: "light", display: "%", action: Action.percent, keyDown: e => e.key == '%'},
                {style: "primary", display: "×", action: Action.multiplication, keyDown: e => e.key == '*'},
              ],
              [
                {style: "default", display: "7", action: Action.seven, keyDown: e => e.key == '7'},
                {style: "default", display: "8", action: Action.eight, keyDown: e => e.key == '8'},
                {style: "default", display: "9", action: Action.nine, keyDown: e => e.key == '9'},
                {style: "primary", display: "-", action: Action.minus, keyDown: e => e.key == '-'},
              ],[
                {style: "default", display: "4", action: Action.four, keyDown: e => e.key == '4'},
                {style: "default", display: "5", action: Action.five, keyDown: e => e.key == '5'},
                {style: "default", display: "6", action: Action.six, keyDown: e => e.key == '6'},
                {style: "primary", display: "+", action: Action.plus, keyDown: e => e.key == '+'},
              ],[
                {style: "default", display: "1", action: Action.one, keyDown: e => e.key == '1'},
                {style: "default", display: "2", action: Action.two, keyDown: e => e.key == '2'},
                {style: "default", display: "3", action: Action.three, keyDown: e => e.key == '3'},
              ],[
                {style: "default", size:{width: 2}, display: "0", action: Action.zero, keyDown: e => e.key == '0'},
                {style: "default", display: ".", action: Action.decimal, keyDown: e => e.key == '.'},
                {style: "warning", size:{height: 2}, display: "=", action: Action.enter, keyDown: e => e.key == '=' || e.key == 'Enter'},
              ]
            ]}
          />
        </section>
        <section>
          <h3>Source</h3>
          <SyntaxHighlighter language='javascript' style={tomorrowNightEighties}>
{`<CalcPicker
  onChange={val => console.info(val)}
  buttons= {[
    [
      {style: "default", size: {width: 2}, display: <i className="fa fa-bell-o" aria-hidden="true"></i>, action: (calc, btnProps, event) => alert("WOW!!")},
      {style: "primary", display: "÷", action: Action.division, keyDown: e => e.key == '/'},
      {style: "dark", display: "←", action: Action.backspace, keyDown: e => e.key == 'Backspace'},
    ],
    [
      {style: "dark", display: "AC", action: Action.allClear, keyDown: e => e.key == 'Clear'},
      {style: "dark", display: "C", action: Action.clear, keyDown: e => e.key == 'Backspace'},
      {style: "light", display: "%", action: Action.percent, keyDown: e => e.key == '%'},
      {style: "primary", display: "×", action: Action.multiplication, keyDown: e => e.key == '*'},
    ],
    [
      {style: "default", display: "7", action: Action.seven, keyDown: e => e.key == '7'},
      {style: "default", display: "8", action: Action.eight, keyDown: e => e.key == '8'},
      {style: "default", display: "9", action: Action.nine, keyDown: e => e.key == '9'},
      {style: "primary", display: "-", action: Action.minus, keyDown: e => e.key == '-'},
    ],[
      {style: "default", display: "4", action: Action.four, keyDown: e => e.key == '4'},
      {style: "default", display: "5", action: Action.five, keyDown: e => e.key == '5'},
      {style: "default", display: "6", action: Action.six, keyDown: e => e.key == '6'},
      {style: "primary", display: "+", action: Action.plus, keyDown: e => e.key == '+'},
    ],[
      {style: "default", display: "1", action: Action.one, keyDown: e => e.key == '1'},
      {style: "default", display: "2", action: Action.two, keyDown: e => e.key == '2'},
      {style: "default", display: "3", action: Action.three, keyDown: e => e.key == '3'},
    ],[
      {style: "default", size:{width: 2}, display: "0", action: Action.zero, keyDown: e => e.key == '0'},
      {style: "default", display: ".", action: Action.decimal, keyDown: e => e.key == '.'},
      {style: "warning", size:{height: 2}, display: "=", action: Action.enter, keyDown: e => e.key == '=' || e.key == 'Enter'},
    ]
  ]}
/>`}
          </SyntaxHighlighter>
        </section>
        <section>
          <p>The properties of the button object are as follows.</p>
          <dl className="dl-horizontal">
            <dt>style</dt>
            <dd>
              This is a prepared style. One of [default | primary | light | dark | warning] can be specified.
            </dd>
            <dt>display</dt>
            <dd>
              Text used for symbol of button. HTML tags are also possible.
            </dd>
            <dt>action</dt>
            <dd>
              This is the callback function when the button is pressed. The parameters are (calc, btnProps, event).
            </dd>
            <dt>keyDown</dt>
            <dd>
              This is the callback function when the keyboard is pressed. If return true, called.
            </dd>
            <dt>size</dt>
            <dd>
              You can set the size of the button. Please set the object likes {'{heitht: [ 1 | 2 | 3 | 4 ], width: [ 1 | 2 | 3 | 4 ]}'}.
            </dd>
            <dt>className</dt>
            <dd>
              You can add your own class attribute.
            </dd>
          </dl>
        </section>
      </div>
    );
  }
}
