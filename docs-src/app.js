import {App} from '../index';


window.onload = () => {
  var template = ReactDOM.render(
    <App
      locale='ja'
      amount={12300.49}
    />,
    document.getElementById('wrapper')
  );
}
