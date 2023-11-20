export async function getGuitarras() {
    const respuesta = await fetch('https://guitarla-strapi-i0n1.onrender.com/api/guitarras?populate=imagen')
    return await respuesta.json()

}


export async function getGuitarra(url) {
    const respuesta = await fetch(`https://guitarla-strapi-i0n1.onrender.com/api/guitarras?filters[url]=${url}&populate=imagen`)
    return await respuesta.json()
}