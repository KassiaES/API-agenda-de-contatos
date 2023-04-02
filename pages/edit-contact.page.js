import { Header } from "../components/header.component.js"
import { editContactService, getContactService } from "../services/contact.service.js"

const root = document.querySelector('#root')
const editContact = document.createElement('form')
editContact.setAttribute('id', 'p-edit-contact')

const eventos = () => {

    const url = new URL(window.location.href)
    const params = url.searchParams
    const idContato = params.get('id-contact')

    getContactService(idContato)
        .then(({ data }) => {
            contactDetails.innerHTML += `
                <h2>${data.nome}</h2>
                <p>Apelido: ${data.apelido}</p>
                <p>Email: ${data.email}</p>
                <p>Observação: ${data.notas}</p>
                <hr/>
                <h3>Endereço</h3>
                <p>Logradouro: ${data.endereco.logradouro}</p>
                
                <hr/>
                <h3>Telefone</h3>
            `

            data.telefones.forEach((telefone) => {
                contactDetails.innerHTML += `
                    <p>Tipo: ${telefone.tipo}</p>
                    <p>Numero: ${telefone.numero}</p>
                    <br>
                `
            })
        })
        .catch((e) => {
            console.log(e)
        })


}

export const EditContact = () => {
    const componenteHeader = Header()
    root.append(componenteHeader)

    editContact.innerHTML = `
        <div id="cabecalho">
            <h1>Contato</h1>
            <a href="/?#contacts">Voltar para contatos</a>
        </div>
        <fieldset>
            <legend>Dados pessoais</legend>
            <input placeholder="Nome" value="${data.nome}" name="nome" type="text" required/>
            <input placeholder="Apelido" name="apelido" type="text" />
            <input placeholder="E-mail" name="email" type="email" />
            <textarea placeholder="Nota" name="notas" /></textarea>
        </fieldset>
        <fieldset>
            <legend>Endereço</legend>
            <input placeholder="Logradouro" name="logradouro" type="text" />
            <input placeholder="Cidade" name="cidade" type="text" />
            <input placeholder="Estado" name="estado" type="text" />
            <input placeholder="CEP" name="cep" type="text" />
            <input placeholder="País" name="pais" type="text" />
        </fieldset>
            
        <fieldset>
            <legend>Telefones</legend>
            <select name="tipo-telefone-1">
                <option value="casa">Casa</option>
                <option value="trabalho">Trabalho</option>
                <option value="celular">Celular</option>
            </select>
            <input name="numero-1" placeholder="Insira o número aqui..." type="phone" />
            <select name="tipo-telefone-2">
                <option value="casa">Casa</option>
                <option value="trabalho">Trabalho</option>
                <option value="celular">Celular</option>
            </select>            
            <input name="numero-2" placeholder="Insira o número aqui..." type="phone" />
            <select name="tipo-telefone-3">
                <option value="casa">Casa</option>
                <option value="trabalho">Trabalho</option>
                <option value="celular">Celular</option>
            </select>
            <input name="numero-3" placeholder="Insira o número aqui..." type="phone" />
        </fieldset>
        <button>Atualizar</button>
    `

    eventos()
    return editContact
}