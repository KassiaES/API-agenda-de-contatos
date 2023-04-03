import { CardContact } from "../components/card-contact.component.js"
import { Header } from "../components/header.component.js"
import { getAllContactsService } from "../services/contact.service.js"

const root = document.querySelector('#root')
const contacts = document.createElement('div')
contacts.setAttribute('id', 'p-contacts')

const eventos = () => {
    getAllContactsService()
        .then(({ data }) => {
            const divContatos = contacts.querySelector('#contatos')

            data.forEach((contato) => {
                const cardContact = CardContact(contato)
                divContatos.appendChild(cardContact)
            })
        })
        .catch((e) => {
            console.log(e)
        })
}

export const Contacts = () => {

    const componenteHeader = Header()
    root.append(componenteHeader)

    contacts.innerHTML = `
        <h1>Contatos</h1>
        <br>
        <button>
            <a href="/#add-contact">Adicionar contato</a>
        </button>
        <br>
        <div id="contatos"></div>
    `

    eventos()
    return contacts
}