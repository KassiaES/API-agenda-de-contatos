import { loginService } from "../services/auth.service.js"

const login = document.createElement('form')
login.setAttribute('id', 'p-login')

const eventos = () => {
    login.addEventListener('submit', (e) => {
        e.preventDefault()

        const fd = new FormData(login)
        const dadosDoFormulario = Object.fromEntries(fd)

        loginService(dadosDoFormulario)
            .then(({data}) => {
                console.log(data.nome)
            })
            .catch((erro) => {
                console.log(erro)
            })
    })
}

export const Login = () => {
    login.innerHTML = `
        <label for="email">E-mail</label>
        <input type="email" name="email">
        <label for="senha">Senha</label>
        <input type="password" name="senha">        
        <br>
        <p>
            Não tem conta? <a href="#signup">crie aqui</a>
        </p>
    `

    eventos()
    return login
}
