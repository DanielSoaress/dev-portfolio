import Home from '../view/Home'
import About from '../view/About'
import Portfolio from '../view/Portfolio'
import Contact from '../view/Contact'
import Card from '../view/Card'


const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/portfolio', component: Portfolio },
    { path: '/contact', component: Contact },
    { path: '/card', component: Card },
    { path: '*', redirect: '/'},
  ]

export default routes