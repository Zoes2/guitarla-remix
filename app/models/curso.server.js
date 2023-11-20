export async function getCurso() {
    const respuesta = await fetch('https://guitarla-strapi-i0n1.onrender.com/api/curso?populate=imagen')
    return await respuesta.json()
}