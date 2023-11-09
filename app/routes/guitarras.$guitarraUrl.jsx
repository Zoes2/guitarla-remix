import { useLoaderData, useRouteError, isRouteErrorResponse, Link } from '@remix-run/react'
import { getGuitarra } from '~/models/guitarras.server'
import styles from '~/styles/guitarras.css'

export async function loader({ params }) {

    const { guitarraUrl } = params
    const guitarra = await getGuitarra(guitarraUrl)

    if (guitarra.data.length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'Guitarra No Encontrada'
        })
    }


    return guitarra
}
/** Manejo de Errores */

export function ErrorBoundary() {
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        return (
            <div>
                <p className='error'>
                    {error.status} {error.statusText}
                </p>
                <Link className='error-enlace' to='/'>Tal vez quieras volver a la página principal</Link>
            </div>
        );
    }
}

export function meta({ data }) {

    if (!data ) {
        return (
            [
                { title: `GuitarLA - Guitarra No Encontrada` },
                { description: `Guitarras, venta de guitarras, guitarra guitarra no encontrada` }
            ]
        )
    }

    return (
        [
            { title: `GuitarLA - ${data.data[0].attributes.nombre}` },
            { description: `Guitarras, venta de guitarras, guitarra ${data.data[0].attributes.nombre}` }
        ]
    )

}

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}



function Guitarra() {

    const guitarra = useLoaderData()
    const { nombre, descripcion, imagen, precio } = guitarra.data[0].attributes

    return (
        <main className='contenedor guitarra'>
            <img src={imagen.data.attributes.url} alt={`Imagen de la guitarra ${nombre}`} />

            <div className='contenido'>
                <h3>{nombre}</h3>
                <p className='texto'>{descripcion}</p>
                <p className='precio'>$ {precio}</p>
            </div>
        </main>
    )
}

export default Guitarra