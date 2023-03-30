const signup = document.createElement('form')
signup.setAttribute('id', 'p-signup')

const eventos = () => {
    signup.addEventListener('submit', (e) => {
        e.preventDefault()

        const fd = new FormData(signup)
        const dadosDoFormulario = Object.fromEntries(fd)

        console.log(dadosDoFormulario)
       
    })
}

export const Signup = () => {
    signup.innerHTML = `
        <label for="nome">Nome completo</label>
        <input type="nome" name="nome">
        <label for="email">E-mail</label>
        <input type="email" name="email">
        <label for="senha">Senha</label>
        <input type="password" name="senha">
        <button type="submit">Cadastrar</button>
    `

    eventos()
    return signup
}
