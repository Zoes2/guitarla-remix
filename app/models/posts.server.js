export async function getPosts() {
    const respuesta = await fetch('http://127.0.0.1:1337/api/posts?populate=imagen')
    return await respuesta.json()
}