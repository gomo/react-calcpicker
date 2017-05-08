import React from 'react'
import DefaultSection from './sections/Default'

export default class Docs extends React.Component
{
  constructor(props) {
    super(props);
    this.sections = [{
        title: "Default",
        component: DefaultSection
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
      <div className="container">
        <h1>React CalcPicker</h1>
        <div style={{position: 'fixed', top: 0, left: 0}}>x: {this.state.x} y: {this.state.y}</div>
        <div className="row">
          <div className="col-md-3">
            <ul>
            {this.sections.map(section => {
              return <li key={section.title}>{section.title}</li>
            })}
            </ul>
          </div>
          <div className="col-md-9">
            {this.sections.map(section => {
              const Component = section.component;
              return (
                <section key={section.title}>
                  <Component />
                </section>
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}
