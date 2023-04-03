import { signupService } from "../services/user.service.js"

const signup = document.createElement('form')
signup.setAttribute('id', 'p-signup')

const eventos = () => {
    signup.addEventListener('submit', (e) => {
        e.preventDefault()

        const spanMensagem = signup.querySelector('span')

        const fd = new FormData(signup)
        const dadosDoFormulario = Object.fromEntries(fd)

        signupService(dadosDoFormulario)
            .then((resposta) => {

                if (resposta.status === 409) {
                    
                    window.alert(`Usuário cadastrado, tente novamente!`) 
                    window.location.reload()
                    
                    setTimeout(() => {
                        spanMensagem.innerText = null
                    }, 3000)
                }
                else if (resposta.status === 200) {
                    window.location.href = '/#login'
                }
            })
            .catch((erro) => {
                spanMensagem.innerText = 'Erro interno, tente novamente mais tarde!'
                console.error(erro)
                window.alert(`Inválido, tente novamente!`) 
                window.location.reload() 
            })
    })
}

export const Signup = () => {
    signup.innerHTML = `
        <h1>Dados para cadastro</h1>
        <br>     
        <input type="text" name="nome" id="nome" placeholder="Seu nome completo" required>
        <input type="email" name="email" id="email" placeholder="E-mail" required>
        <input type="text" name="telefone" id="telelfone" placeholder="Telefone">
        <br> 
        <fieldset>
            <label for="homePhoneType">Casa</label>
            <input type="radio" name="phoneType" id="homePhoneType" value="casa">
            <label for="workPhoneType">Trabalho</label>
            <input type="radio" name="phoneType" id="workPhoneType" value="trabalho">
            <label for="cellPhoneType">Celular</label>
            <input type="radio" name="phoneType" id="cellPhoneType" value="celular">
        </fieldset>
        <br>
        <input type="text" name="logradouro" id="logradouro" placeholder="Endereço">
        <input type="text" name="cidade" id="cidade" placeholder="Cidade">
        <input type="text" name="estado" id="estado" placeholder="Estado">
        <input type="text" name="cep" id="cep" placeholder="CEP">
        <input type="password" name="senha" id="senha" placeholder="Senha" required>
        <input type="password" name="confirmesenha" id="confirmesenha" placeholder="Confirme sua senha" required>
        <button type="submit">Cadastrar</button>
        <br>
        <p>Já possui conta? 
            <a href="/#login">Clique aqui!</a>
        </p>
    `

    eventos()
    return signup
}