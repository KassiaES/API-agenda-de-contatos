import { Login } from './pages/login.page.js'
import { Signup } from './pages/signup.page.js'
import { Contacts } from './pages/contacts.page.js'
import { NotFound } from './pages/404.page.js'
import { AddContact } from './pages/add-contact.page.js'
import { ContactDetails } from './pages/contact-details.js'



const ROUTER = {
    "#login": { component: Login, private: false, nome: 'login' },
    "#signup": { component: Signup, private: false },
    "#contacts": { component: Contacts, private: true, nome: 'contacts' },
    "#404": { component: NotFound, private: false, nome: '404' },
    "#contact-details": { component: ContactDetails, private: true },
    "#add-contact": { component: AddContact, private: true },   
}

function isTokenExpired(token) {
    if (!token) return true
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp
    return (Math.floor((new Date).getTime() / 1000)) >= expiry
}

function redirectPage() {
    const root = document.querySelector('#root')
    const route = ROUTER[window.location.hash] || ROUTER['#404']

    const token = sessionStorage.getItem('@token')
    const ehTokenExpirado = isTokenExpired(token)
    const ehRotaPrivada = route.private === true
    const ehRotaPublica = route.private === false
    const ehRotaPublicaPrivada = route.private !== undefined

    if (!ehRotaPublicaPrivada) {
        if (ehRotaPrivada && ehTokenExpirado) {
            sessionStorage.removeItem('@token')
            sessionStorage.removeItem('@user')
            window.location.href = '/#login'
            return
        }

        if (ehRotaPublica && !ehTokenExpirado) {
            window.location.href = '/#contacts'
            window.location.reload()
            return
        }
    }

    root.innerHTML = null
    root.append(route.component())
}


window.addEventListener('load', () => {
    if (!window.location.hash) {
        window.location.href = '/#login'
    }
    redirectPage()
    window.addEventListener('hashchange', redirectPage)
})