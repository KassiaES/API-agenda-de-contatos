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

                if(resposta.status === 409) {
                    spanMensagem.innerText = resposta.mensagem

                    setTimeout(() => {
                        spanMensagem.innerText = null
                    }, 3000)
                }
                else if(resposta.status === 200) {
                    window.location.href = '/#login'
                }
            })
            .catch((erro) => {
                spanMensagem.innerText = 'Erro interno, tente novamente mais tarde!'
                console.error(erro)
            })
    })
}

export const Signup = () => {
    signup.innerHTML = `
        
        <br>  
        <p>
            <a href="/#login">Cancelar</a>
        </p>      
        <form name="register">
        <label for="name">Nome completo</label>
        <input type="text" name="name" id="name" required>
        <label for="email">E-mail</label>
        <input type="email" name="email" id="email" required>        
        <label for="phoneNumber">Telefone</label>
        <input type="text" name="phoneNumber" id="phoneNumber">
        <label for="phoneType">tipo de telefone</label>
        <fieldset>
            <label for="homePhoneType">casa</label>
            <input type="radio" name="phoneType" id="homePhoneType" value="casa">
            <label for="workPhoneType">trabalho</label>
            <input type="radio" name="phoneType" id="workPhoneType" value="trabalho">
            <label for="cellPhoneType">celular</label>
            <input type="radio" name="phoneType" id="cellPhoneType" value="celular">
        </fieldset>    
        <br>    
        <label for="logradouro">Endereço</label>
        <input type="text" name="logradouro" id="logradouro">
        <label for="cidade">Cidade</label>
        <input type="text" name="cidade" id="cidade">
        <label for="estado">Estado</label>
        <input type="text" name="estado" id="estado">
        <label for="cep">CEP</label>
        <input type="text" name="cep" id="cep">
        <label for="pais">País</label>
        <input type="text" name="pais" id="pais">
    </form>
        <button type="submit">Cadastrar</button>
        <span></span>
        
        <a href="/#login">Já possui conta? Entre aqui!</a>
    `

    eventos()
    return signup
}