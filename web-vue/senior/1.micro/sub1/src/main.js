import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'



let install = null

function render(props = {}) {
    const { container } = props
    console.log(container)
    install = createApp(App).use(store).use(router).mount('#vue')
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
    // install?.unmount()
    console.log(install,'install')
}