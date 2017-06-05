import React from 'react'
import {CalcPicker, Rect, Action} from '../../../../dist/react-calcpicker'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { tomorrowNightEighties } from 'react-syntax-highlighter/dist/styles'

export default class ButtonSize extends React.Component
{
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div>
        <section className="docs--para-options-cont">
          <p>You can change the button size with buttonWidth, buttonHeight, buttonMargin.</p>
        </section>
        <section className="docs--para-options-cont">
          <h3>Demo</h3>
          <CalcPicker
            onChange={val => console.log(val)}
            buttonWidth={62}
            buttonHeight={42}
            buttonMargin={5}
          />
        </section>
        <section className="docs--para-options-cont">
          <h3>Source</h3>
          <SyntaxHighlighter language='javascript' style={tomorrowNightEighties}>
{`<CalcPicker
  onChange={val => console.log(val)}
  buttonWidth={62}
  buttonHeight={42}
  buttonMargin={5}
/>`}
          </SyntaxHighlighter>
        </section>
      </div>
    );
  }
}
