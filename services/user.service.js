const urlBase = "http://localhost:5000/v1/"

export const signupService = async (dados) => {
    const url = urlBase + 'user'
    const headers = new Headers()
    headers.set('Content-Type', 'application/json')

    const resposta = await fetch(url, {
        headers,
        method: 'POST',
        body: JSON.stringify(dados)
    })

    return await resposta.json()
}