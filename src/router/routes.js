import Home from '../view/Home'
import About from '../view/About'
import Portfolio from '../view/Portfolio'
import Contact from '../view/Contact'
import Card from '../view/Card'
import Curriculo from '../view/Curriculo'


const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/portfolio', component: Portfolio },
    { path: '/contact', component: Contact },
    { path: '/card', component: Card },
    { path: '/curriculo', component: Curriculo },
    { path: '*', redirect: '/'},
  ]

export default routes