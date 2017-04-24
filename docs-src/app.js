import {App} from '../index';


window.onload = () => {
  var template = ReactDOM.render(
    <App
      locale='ja'
      initialAmount={12300.493495}
      currencyFormat={'$0,0[.]00'}
      className="btn btn-default"
      positions={['right-bottom', 'left-bottom', 'right-top', 'left-top']}
    />,
    document.getElementById('wrapper')
  );
}
