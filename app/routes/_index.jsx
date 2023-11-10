import { useLoaderData } from '@remix-run/react'
import { getGuitarras } from '~/models/guitarras.server'
import { getPosts } from '~/models/posts.server'
import stylesGuitarras from '~/styles/guitarras.css'
import ListadoGuitarras from '~/components/listado-guitarras'
import ListadoPosts from '~/components/listado-posts'
import stylesPosts from '~/styles/blog.css'



export function meta() {
    return (
        [
            { title: 'GuitarLA - Tienda de Guitarras' },
            { description: 'GuitarLA - Nuestra colección de guitarras' },
        ]
    )
}

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: stylesGuitarras
        },

        {
            rel: 'stylesheet',
            href: stylesPosts
        }
    ]
}

export async function loader() {

    const [guitarras, posts] = await Promise.all([
        getGuitarras(),
        getPosts()
    ])
    return { 
        guitarras: guitarras.data, 
        posts: posts.data 
    }
}

function Index() {

    const { guitarras, posts } = useLoaderData()

    return (
        <>
            <main className='contenedor'>
                <ListadoGuitarras
                    guitarras={guitarras}
                />
            </main>

            <section className='contenedor'>
                <ListadoPosts
                    posts={posts}
                />
            </section>
        </>
    )
}

export default Index