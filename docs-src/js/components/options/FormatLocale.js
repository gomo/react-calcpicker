import React from 'react'
import {CalcPicker, Rect, Action} from '../../../../dist/react-calcpicker'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { tomorrowNightEighties } from 'react-syntax-highlighter/dist/styles'

export default class Template extends React.Component
{
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div>
        <section className="docs--para-options-cont">
          <p>You can use the <a href="http://numeraljs.com/">Numeral.js</a> <a href="http://numeraljs.com/#format">fomat</a> and <a href="http://numeraljs.com/#locales">locale</a> to change the format inside the picker button.</p>
        </section>
        <section className="docs--para-options-cont">
          <h3>Demo</h3>
          <CalcPicker
            onChange={val => console.log(val)}
            format="$ 0,0"
            locale="ja"
          />
        </section>
        <section className="docs--para-options-cont">
          <h3>Source</h3>
          <SyntaxHighlighter language='javascript' style={tomorrowNightEighties}>
{`<CalcPicker
  onChange={val => console.log(val)}
  format="$ 0,0"
  locale="ja"
/>`}
          </SyntaxHighlighter>
        </section>
      </div>
    );
  }
}
