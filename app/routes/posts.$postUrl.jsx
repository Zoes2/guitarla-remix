import { useLoaderData, useRouteError, isRouteErrorResponse, Link } from '@remix-run/react'
import { getPost } from '~/models/posts.server'
import styles from '~/styles/blog.css'
import { formatearFecha } from "~/utils/helpers"

export async function loader({ params }) {

    const { postUrl } = params
    const post = await getPost(postUrl)

    if (post.data.length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'Post No Encontrado'
        })
    }

    return post
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
                { title: `GuitarLA - Post No Encontrado` },
                { description: `Posts, venta de guitarras, Post post no encontrado` }
            ]
        )
    }

    return (
        [
            { title: `GuitarLA - ${data.data[0].attributes.titulo}` },
            { description: `Posts, venta de guitarras, Post ${data.data[0].attributes.titulo}` }
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



function Post() {

    const post = useLoaderData()
    const { contenido, imagen, titulo, publishedAt } = post?.data[0]?.attributes

    return (
        <article className='contenedor post mt-3'>
            <img className='imagen' src={imagen?.data?.attributes?.url} alt={`Imagen del Post ${titulo}`} />

            <div className='contenido'>
                <h3>{titulo}</h3>
                <p className='fecha'>{formatearFecha(publishedAt)}</p>
                <p className='texto'>{contenido}</p>
            </div>
        </article>
    )
}

export default Post