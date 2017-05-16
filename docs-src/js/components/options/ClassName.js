import React from 'react'
import {CalcPicker, Rect, Action} from '../../../../dist/react-calcpicker'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { tomorrowNightEighties } from 'react-syntax-highlighter/dist/styles'

export default class ClassName extends React.Component
{
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div>
        <section className="docs--para-options-cont">
          <h1>Demo</h1>
          <CalcPicker
            className="btn btn-default"
            onChange={val => console.log(val)}
          />
        </section>
        <section className="docs--para-options-cont">
          <h1>Source</h1>
          <SyntaxHighlighter language='javascript' style={tomorrowNightEighties}>
{`<CalcPicker
  className="btn btn-default"
  onChange={val => console.log(val)}
/>`}
          </SyntaxHighlighter>
        </section>
        <section className="docs--para-options-cont">
          <p>You can add a class attribute to a button tag with className option.</p>
        </section>
      </div>
    );
  }
}
