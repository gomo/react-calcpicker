import {App, Rect} from '../index';


window.onload = () => {
  var template = ReactDOM.render(
    <App
      locale='ja'
      initialAmount={0}
      currencyFormat={'$0,0[.]00'}
      className="btn btn-default"
      positions={[Rect.RIGHT_BOTTOM, Rect.RIGHT_TOP, Rect.LEFT_BOTTOM, Rect.LEFT_TOP]}
    />,
    document.getElementById('wrapper')
  );
}
