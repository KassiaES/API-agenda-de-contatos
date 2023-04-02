import { loginService } from "../services/auth.service.js"
import { Header } from "../components/header.component.js"

const login = document.createElement('form')
login.setAttribute('id', 'p-login')

const eventos = () => {
    login.addEventListener('submit', (e) => {
        e.preventDefault()

        const fd = new FormData(login)
        const dadosDoFormulario = Object.fromEntries(fd)

        loginService(dadosDoFormulario)
            .then(({ data }) => {
                window.sessionStorage.setItem('@token', data.token)
                window.sessionStorage.setItem('@user', JSON.stringify(data))
                window.location.href = '/#contacts'
                return
            })
            .catch((erro) => {
                console.log(erro)
            })
    })
}

export const Login = () => {
    login.innerHTML = `    
        <h1>Agenda de Contatos</h1>
        <br>
        <input type="email" name="email" placeholder="E-mail">
        <input type="password" name="senha" placeholder="Senha">    
        <button type="submit">Login</button>
        <br>
        <p> Não tem conta? 
            <a href="/#signup">Clique aqui!</a>
        </p>
    `

    eventos()
    return login
}
