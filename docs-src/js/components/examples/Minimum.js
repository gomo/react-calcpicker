import React from 'react'
import {CalcPicker, Rect, Action} from '../../../../dist/react-calcpicker'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { tomorrowNightEighties } from 'react-syntax-highlighter/dist/styles'

export default class Minimum extends React.Component
{
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div>
        <section>
          <h1>Demo</h1>
          <CalcPicker
            className="btn btn-default"
            onChange={val => console.info(val)}
          />
        </section>
        <section>
          <h1>Source</h1>
          <SyntaxHighlighter language='javascript' style={tomorrowNightEighties}>
{`<CalcPicker
  className="btn btn-default"
  onChange={val => console.info(val)}
/>`}
          </SyntaxHighlighter>
        </section>
      </div>
    );
  }
}
