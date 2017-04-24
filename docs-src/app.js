import {App} from '../index';


window.onload = () => {
  var template = ReactDOM.render(
    <App
      locale='ja'
      initialAmount={12300.493495}
      currencyFormat={'$0,0[.]00'}
      className="btn btn-default"
      positions={['left-bottom', 'left-top', 'right-bottom', 'right-top']}
    />,
    document.getElementById('wrapper')
  );
}
