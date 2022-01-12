import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

let app = null

function render(props = {}) {
    const { container } = props
    console.log(container)
    app = createApp(App)
    app.use(store)
    app.use(router)
    app.mount('#vue')
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
    app.use(props.ui);
    // props.fns.forEach(fn => fn('加载完成'))
}
export async function unmount() {
    app.unmount()
    console.log(app, 'app')
}