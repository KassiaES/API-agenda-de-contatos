const root = document.querySelector('#root')
const contacts = document.createElement('div')
contacts.setAttribute('id', 'p-contacts')

const eventos = () => {
    getAllContactsService()
}


export const Contacts = () => {

    const componentHeader = Header()
    root.append(componentHeader)

    contacts.innerHTML = `
    <h1>Contatos</h1>    
    `
    return contacts
}