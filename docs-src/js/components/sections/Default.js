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
        <div>
          <CalcPicker className="btn btn-default" />
        </div>
        <div className="docs-source">
          <SyntaxHighlighter language='javascript' style={tomorrowNightEighties}>
{`<CalcPicker className="btn btn-default" />`}
          </SyntaxHighlighter>
        </div>
      </div>
    );
  }
}
