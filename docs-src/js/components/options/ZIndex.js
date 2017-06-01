import React from 'react'
import {CalcPicker, Rect, Action} from '../../../../dist/react-calcpicker'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { tomorrowNightEighties } from 'react-syntax-highlighter/dist/styles'

export default class ZIndex extends React.Component
{
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div>
        <section className="docs--para-options-cont">
          <p>You can control z-index.</p>
        </section>
        <section className="docs--para-options-cont">
          <h3>Demo</h3>
          <CalcPicker
            onChange={val => console.log(val)}
            positions={[Rect.RIGHT_BOTTOM]}
            zIndex={1000}
          />
          <div style={{
            position: 'relative',
            zIndex: 999,
            padding: "20px",
            border:"1px solid #999",
            borderRadius: "5px",
            margin: '10px 0',
            backgroundColor: "#eee"
          }}>z-index: 999</div>
        </section>
        <section className="docs--para-options-cont">
          <h3>Source</h3>
          <SyntaxHighlighter language='javascript' style={tomorrowNightEighties}>
{`<CalcPicker
  onChange={val => console.log(val)}
  positions={[Rect.RIGHT_BOTTOM]}
  zIndex={1000}
/>`}
          </SyntaxHighlighter>
        </section>
      </div>
    );
  }
}
