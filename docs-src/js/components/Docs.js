import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { tomorrowNightEighties } from 'react-syntax-highlighter/dist/styles'

import OnChange from './options/OnChange'
import Buttons from './options/Buttons'
import ClassName from './options/ClassName'
import InitialValue from './options/InitialValue'
import Positions from './options/Positions'
import CloseButton from './options/CloseButton'
import FormatLocale from './options/FormatLocale'
import CloseOnEnterAction from './options/CloseOnEnterAction'
import ZIndex from './options/ZIndex'
import Title from './options/Title'
import ButtonSize from './options/ButtonSize'

export default class Docs extends React.Component
{
  constructor(props) {
    super(props);
    this.options = [{
      title: "onChange",
      component: OnChange
    },{
      title: "className",
      component: ClassName
    },{
      title: "initialValue",
      component: InitialValue
    },{
      title: "buttons",
      component: Buttons
    },{
      title: "buttonWidth, buttonHeight, buttonMargin",
      component: ButtonSize
    },{
      title: "positions",
      component: Positions
    },{
      title: "closeButton",
      component: CloseButton
    },{
      title: "format and locale",
      component: FormatLocale
    },{
      title: "closeOnEnterAction",
      component: CloseOnEnterAction
    },{
      title: "zIndex",
      component: ZIndex
    },{
      title: "title",
      component: Title
    }]

    this.state = {
      x: 0,
      y: 0,
    }

    document.onmousemove = (e) => {
      this.setState({
        x: e.clientX + (window.pageXOffset || document.documentElement.scrollLeft),
        y: e.clientY + (window.pageYOffset || document.documentElement.scrollTop)
      })
    };
  }

  render(){
    return (
      <article className="container">
        <header>
          <div style={{position: 'fixed', top: 0, left: 0}}>x: {this.state.x} y: {this.state.y}</div>
          <h1 className="docs--main-title"><i className="fa fa-calculator" aria-hidden="true"></i> React CalcPicker</h1>
        </header>
        <div className="row">
          <section className="docs-menu col-md-2">
            <section>
              <h1><i className="fa fa-list-ul" aria-hidden="true"></i> Options</h1>
              <ul className="list-unstyled">
              {this.options.map(option => {
                return <li key={option.title}><a href={"#" + option.title.replace(' ', '__')}>{option.title}</a></li>
              })}
              </ul>
            </section>
          </section>
          <section className="col-md-10">
            <article className="docs--para">
              <section>
                <h1><i className="fa fa-cubes" aria-hidden="true"></i> Feature</h1>
                <p>React component for input numbers with calculator.</p>
                <ul>
                  <li>Customizable buttons.</li>
                  <li>Customizable keyboard support.</li>
                  <li>Customizable calculator dialog position.</li>
                </ul>
              </section>
            </article>
            <article className="docs--para">
              <section>
                <h1><i className="fa fa-sign-in" aria-hidden="true"></i> Install and Import</h1>
                <SyntaxHighlighter language='javascript' style={tomorrowNightEighties}>
{`npm install --save react-calcpicker`}
                </SyntaxHighlighter>
              </section>
              <section>
                <SyntaxHighlighter language='javascript' style={tomorrowNightEighties}>
{`import {CalcPicker, Rect, Action} from 'react-calcpicker'`}
                </SyntaxHighlighter>
              </section>
            </article>
            <article className="docs--para">
              <section>
                <h1><i className="fa fa-list-ul" aria-hidden="true"></i> Options</h1>
                {this.options.map(option => {
                  const Component = option.component;
                  return (
                    <section key={option.title} id={option.title.replace(' ', '__')} className="docs--para-options">
                      <h2>{option.title}</h2>
                      <Component />
                    </section>
                  )
                })}
              </section>
            </article>
          </section>
        </div>
      </article>
    );
  }
}
