import { deleteContactService } from "../services/contact.service.js"

const cardContact = document.createElement('div')
cardContact.classList.add('c-card-contact')

const eventos = (contato) => {
   
    const cardContactClone = cardContact.cloneNode(true)

    const [anchorDelete] = cardContactClone.querySelectorAll('a')
    
    anchorDelete.addEventListener('click', (e) => {
        e.preventDefault()
        
        const confirmacao = window.confirm(`Deseja deletar o contato ${contato.nome}?`)
       
        if(confirmacao === true) {
            deleteContactService(contato.id)
                .then(({data}) => {
                    window.alert(data?.msg)
                    window.location.reload()
                })
                .catch((erro) => {
                    console.error(erro)
                })
        }

    })
    
    return cardContactClone
}

export const CardContact = (contato) => {
    cardContact.innerHTML = `
        <p>${contato.nome}</p>
        
        <a href="/#contacts">Deletar</a>
        <a href="/?id-contact=${contato.id}#contact-details">Visualizar</a>
    `

    const cardContactClone = eventos(contato)
    
    return cardContactClone
}