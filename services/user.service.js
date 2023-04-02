const urlBase = "http://localhost:5000/v1/"


const headers = new Headers()
headers.set('content-type', 'application/json')

export const signupService = async (dados) => {
    const url = urlBase + 'user'

    const resposta = await fetch(url, {
        headers,
        method: 'POST',
        body: JSON.stringify(dados)
    })

    return await resposta.json()
}