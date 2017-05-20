import React from 'react'
import {CalcPicker, Rect, Action} from '../../../../dist/react-calcpicker'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { tomorrowNightEighties } from 'react-syntax-highlighter/dist/styles'

export default class OnChange extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {result: 0}
  }

  render(){
    return (
      <div>
        <section className="docs--para-options-cont">
          <p>Called by pressing the `=` key. This option is required.</p>
        </section>
        <section className="docs--para-options-cont">
          <h3>Demo</h3>
          <div>Result: {this.state.result}</div>
          <CalcPicker
            onChange={val => this.setState({result: val})}
          />
        </section>
        <section className="docs--para-options-cont">
          <h3>Source</h3>
          <SyntaxHighlighter language='javascript' style={tomorrowNightEighties}>
{`<CalcPicker
  onChange={val => this.setState({result: val})}
/>`}
          </SyntaxHighlighter>
        </section>
      </div>
    );
  }
}
