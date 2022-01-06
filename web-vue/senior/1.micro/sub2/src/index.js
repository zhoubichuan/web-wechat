import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
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
    console.log('1111111111',window.__webpack_public_path__)
} else {
    console.log('2222222222')
    render()
}

export async function bootstrap() {

}
export async function mount(props) {
    render(props)
}
export async function unmount() {
  ReactDOM.unmountComponentAtNode(document.getElementById('root'))
}