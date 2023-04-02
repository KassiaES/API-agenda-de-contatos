const notFound = document.createElement('div')
notFound.setAttribute('id', 'p-not-found')

export const NotFound = () => {
    notFound.innerHTML = `      
    <img src = "https://weeblytutorials.com/wp-content/uploads/2017/05/Weebly-404-Page-Not-Found-Error1.png"/>
    <button type="submit"><a href="#login">Voltar a página de login</a></button>
    `

    window.location.hash = "#404"
    return notFound
}