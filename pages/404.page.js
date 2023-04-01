const notFound = document.createElement('div')
notFound.setAttribute('id', 'p-not-found')

export const NotFound = () => {
    notFound.innerHTML = `
        <h1>Página não encontrada</h1>        
        <img src = "https://www.estudopratico.com.br/wp-content/uploads/2018/07/bug-computador.jpg"/>   
        <p></p>     
        <a href="#login"><h2>Ir para o início</h2></a>
    `

    window.location.hash = "#404"
    return notFound
}