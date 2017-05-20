import React from 'react'
import {CalcPicker, Rect, Action} from '../../../../dist/react-calcpicker'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { tomorrowNightEighties } from 'react-syntax-highlighter/dist/styles'

export default class Positions extends React.Component
{
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div>
        <section className="docs--para-options-cont">
          <h3>Demo</h3>
          <section className="docs-para-options-subcont">
            <h4>Rect.RIGHT_BOTTOM</h4>
            <CalcPicker
              onChange={val => console.log(val)}
              positions={[Rect.RIGHT_BOTTOM]}
            />
          </section>
          <section className="docs-para-options-subcont">
            <h4>Rect.LEFT_BOTTOM</h4>
            <CalcPicker
              onChange={val => console.log(val)}
              positions={[Rect.LEFT_BOTTOM]}
            />
          </section>
          <section className="docs-para-options-subcont">
            <h4>Rect.RIGHT_TOP</h4>
            <CalcPicker
              onChange={val => console.log(val)}
              positions={[Rect.RIGHT_TOP]}
            />
          </section>
          <section className="docs-para-options-subcont">
            <h4>Rect.LEFT_TOP</h4>
            <CalcPicker
              onChange={val => console.log(val)}
              positions={[Rect.LEFT_TOP]}
            />
          </section>
          <section className="docs-para-options-subcont">
            <h4>Rect.WINDOW_CENTER</h4>
            <CalcPicker
              onChange={val => console.log(val)}
              positions={[Rect.WINDOW_CENTER]}
            />
          </section>
        </section>
        <section className="docs--para-options-cont">
          <h3>Source</h3>
          <SyntaxHighlighter language='javascript' style={tomorrowNightEighties}>
{`<CalcPicker
  onChange={val => console.log(val)}
  positions={[Rect.RIGHT_BOTTOM]}
/>
<CalcPicker
  onChange={val => console.log(val)}
  positions={[Rect.LEFT_BOTTOM]}
/>
<CalcPicker
  onChange={val => console.log(val)}
  positions={[Rect.RIGHT_TOP]}
/>
<CalcPicker
  onChange={val => console.log(val)}
  positions={[Rect.LEFT_TOP]}
/>
<CalcPicker
  onChange={val => console.log(val)}
  positions={[Rect.WINDOW_CENTER]}
/>`}
          </SyntaxHighlighter>
        </section>
        <section className="docs--para-options-cont">
          <p>The positions specifies the location of the calculator as an array. Look for the position that is displayed at all on the window and use the one that was found first. If it is not found, look for the position with the widest display area and use it.</p>
        </section>
      </div>
    );
  }
}
