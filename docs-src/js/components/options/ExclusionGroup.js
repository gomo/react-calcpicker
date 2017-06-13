import React from 'react'
import {CalcPicker, Rect, Action} from '../../../../dist/react-calcpicker'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { tomorrowNightEighties } from 'react-syntax-highlighter/dist/styles'

export default class ExclusionGroup extends React.Component
{
  constructor(props) {
    super(props);
    this.group = []
  }

  render(){

    return (
      <div>
        <section className="docs--para-options-cont">
          <p>If you pass an array reference to exclusionGroup, the calcpicker that have the same reference opens exclusively.</p>
        </section>
        <section className="docs--para-options-cont">
          <h3>Demo</h3>
          <CalcPicker
            onChange={val => console.log(val)}
            closeOnOutsideClick={false}
            exclusionGroup={this.group}
          />
          &nbsp;
          <CalcPicker
            onChange={val => console.log(val)}
            closeOnOutsideClick={false}
            exclusionGroup={this.group}
          />
          &nbsp;
          <CalcPicker
            onChange={val => console.log(val)}
            closeOnOutsideClick={false}
            exclusionGroup={this.group}
          />
        </section>
        <section className="docs--para-options-cont">
          <h3>Source</h3>
          <SyntaxHighlighter language='javascript' style={tomorrowNightEighties}>
{`<CalcPicker
  onChange={val => console.log(val)}
  closeOnOutsideClick={false}
  exclusionGroup={group}
/>
<CalcPicker
  onChange={val => console.log(val)}
  closeOnOutsideClick={false}
  exclusionGroup={group}
/>
<CalcPicker
  onChange={val => console.log(val)}
  closeOnOutsideClick={false}
  exclusionGroup={group}
/>`}
          </SyntaxHighlighter>
        </section>
      </div>
    );
  }
}
