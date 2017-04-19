import {App} from '../index';


window.onload = () => {
  var template = ReactDOM.render(
    <App
      locale='ja'
      initialAmount={12300.49}
      className="btn btn-default"
    />,
    document.getElementById('wrapper')
  );
}
