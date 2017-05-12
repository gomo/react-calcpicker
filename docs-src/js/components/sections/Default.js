import React from 'react'
import {CalcPicker, Rect, Action} from '../../../../dist/react-calcpicker';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNightEighties } from 'react-syntax-highlighter/dist/styles';

export default class DefaultSection extends React.Component
{
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div>
        <h2>{this.props.title}</h2>
        <div className="docs-sample">
          <h3>Demo</h3>
          <CalcPicker
            className="btn btn-default"
            onChange={val => console.info(val)}
          />
        </div>
        <div className="docs-source">
          <h3>Source</h3>
          <SyntaxHighlighter language='javascript' style={tomorrowNightEighties}>
{`<CalcPicker
  className="btn btn-default"
  onChange={val => console.info(val)}
/>`}
          </SyntaxHighlighter>
        </div>
        <div className="docs-description">
          <h3>Description</h3>
        </div>
      </div>
    );
  }
}
