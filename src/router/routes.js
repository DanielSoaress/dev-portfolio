import Home from '../view/Home'
import About from '../view/About'
import Portfolio from '../view/Portfolio'
import Contact from '../view/Contact'

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/portfolio', component: Portfolio },
    { path: '/contact', component: Contact },
    { path: '*', redirect: '/'},
  ]

export default routes