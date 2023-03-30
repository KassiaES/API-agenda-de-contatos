import { NotFound } from './pages/404.page.js'
import { Login } from './pages/login.page.js'
import { Signup } from './pages/signup.page.js'
import { Contacts } from './pages/contacts.page.js'

const ROUTER = {
    "#login": { component: Login, private: false, nome: 'login' },
    "#signup": { component: Signup, private: false, nome: 'signup' },
    "#404": { component: NotFound, private: false, nome: '404' },
    "#contacts": { component: Contacts, private: true, nome: 'contacts' },
    
}

function redirectPage() {
    const root = document.querySelector('#root')
    const route = ROUTER[window.location.hash] || ROUTER['#404']
    
    if(route.private !== undefined) {    

        const ehPrivadoNaoLogado = route.private === true && !sessionStorage.getItem('@token')
        
        if(ehPrivadoNaoLogado) {
            window.location.href = '#login'
            return
        }

        const ehPublicoLogado = route.private === false && !sessionStorage.getItem('@token')
        if(ehPublicoLogado) {
            window.location.href = '#contacts'
            return
        }
    }

    root.innerHTML = null
    root.append(route.component())
}

window.addEventListener('load', () => {

    if(!window.location.hash) {
        window.location.href = "#login"
    }

    redirectPage()
    window.addEventListener('hashchange', redirectPage)
})