import { createApp } from 'vue'
import App from './App.vue'
import './styles/global.css'
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'


const app = createApp(App)

app.component('HeaderComponent', HeaderComponent)
app.component('FooterComponen', FooterComponent)

app.mount('#app')


