import {Component} from 'react'
import currency from '../currency'

export default class App extends Component
{
  constructor(props) {
    super(props);
    currency.locale(props.locale)
  }

  componentWillReceiveProps(nextProps){
    if(this.props.locale != nextProps.locale){
      currency.locale(nextProps.locale)
    }
  }

  render(){
    return (
      <div>
        <div>{currency(this.props.amount).format()}</div>
      </div>
    );
  }
}

App.propTypes = {

}
