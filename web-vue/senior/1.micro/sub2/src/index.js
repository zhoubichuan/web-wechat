import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

reportWebVitals();

function render(props = {}) {
  const { container } = props
  console.log(container)
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
if (window.__POWERED_BY_QIANKUN__) {
  window.__webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
  console.log('1111111111', window.__webpack_public_path__)
} else {
  console.log('2222222222')
  render()
}

export async function bootstrap(props) {
  console.log(props)
}
export async function mount(props) {
  render(props)
  // props.fns.forEach(fn => fn('加载完成'))
}
export async function unmount() {
  ReactDOM.unmountComponentAtNode(document.getElementById('root'))
}