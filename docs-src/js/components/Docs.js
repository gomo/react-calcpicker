import React from 'react'
import Minimum from './examples/Minimum'
import CustomButton from './examples/CustomButton'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { tomorrowNightEighties } from 'react-syntax-highlighter/dist/styles'

export default class Docs extends React.Component
{
  constructor(props) {
    super(props);
    this.examples = [{
      title: "Minimum",
      component: Minimum
    },{
      title: "Custom button",
      component: CustomButton
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
          <h1 className="docs--main-title">React CalcPicker</h1>
        </header>
        <div className="row">
          <section className="col-md-2">
            <section>
              <h1><a href="#Install">Install</a></h1>
            </section>
            <section>
              <h1>Examples</h1>
              <ul>
              {this.examples.map(example => {
                return <li key={example.title}><a href={"#" + example.title.replace(' ', '__')}>{example.title}</a></li>
              })}
              </ul>
            </section>
          </section>
          <section className="col-md-10">
            <article className="docs--first-block">
              <section id="Install">
                <h1>Install</h1>
                <SyntaxHighlighter language='javascript' style={tomorrowNightEighties}>
{`npm install --save react-calcpicker`}
                </SyntaxHighlighter>
              </section>
            </article>
            <article className="docs--first-block">
              <section>
                <h1>Examples</h1>
                {this.examples.map(example => {
                  const Component = example.component;
                  return (
                    <section key={example.title} id={example.title.replace(' ', '__')} className="docs--expamples">
                      <h1>{example.title}</h1>
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