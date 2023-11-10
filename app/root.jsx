import { useState, useEffect } from 'react'
import { Meta, Links, Outlet, Scripts, LiveReload } from '@remix-run/react'
import styles from '~/styles/index.css'
import Header from '~/components/header'
import Footer from '~/components/footer'

export function meta() {

    return (
        [
            { charset: 'utf-8' },
            { title: 'GuitarLA - REMIX' },
            { viewport: 'width=device-width,initial-scale=1' }
        ]

    )
}


export function links() {
    return [
        {
            rel: 'stylesheet',
            href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
        },

        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com'
        },

        {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossOrigin: 'true'
        },

        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap'
        },

        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

export default function App() {

    const [carrito, setCarrito] = useState([])
    // UseEffect para guardar en el LS
    useEffect(() => {
        //Comprobación de longitud del arreglo sea distinta de 0 para asi evitar cargar un arreglo vacío en el primer render
        if (carrito?.length === 0) return
        localStorage.setItem('carrito', JSON.stringify(carrito))
    }, [carrito])
    // useEffect para cargar el state con info del LS
    useEffect(() => {
        const carritoLS = JSON.parse(localStorage.getItem('carrito')) ?? []

        setCarrito(carritoLS)
    }, [])

    const agregarCarrito = guitarra => {
        if (carrito.some(guitarraState => guitarraState.id === guitarra.id)) {
            //Vamos a iterar sobre el arreglo para identificar el elemento duplicado
            const carritoActualizado = carrito.map(guitarraState => {
                if (guitarraState.id === guitarra.id) {
                    //Reescribe la cantidad de guitarras
                    guitarraState.cantidad = guitarra.cantidad
                }
                return guitarraState
            })
            //Añade al carrito
            setCarrito(carritoActualizado)
        } else {
            //Se Registra como nuevo, se agrega al carrito
            setCarrito([...carrito, guitarra])
        }
    }

    const actualizarCantidad = guitarra => {
        //Vamos a iterar sobre el arreglo para identificar el elemento a Actualizar
        const carritoActualizado = carrito.map(guitarraState => {
            if (guitarraState.id === guitarra.id) {
                //Reescribe la cantidad de guitarras
                guitarraState.cantidad = guitarra.cantidad
            }
            return guitarraState
        })
        //Añade al carrito
        setCarrito(carritoActualizado)
    }

    const eliminarGuitarra = id => {
        const carritoActualizado = carrito.filter((guitarraState) => guitarraState.id !== id)
        //Comprobación si el carrito queda en 0, guardar en el LS un arreglo vacío
        carritoActualizado.length === 0 && localStorage.setItem('carrito', '[]')
        setCarrito(carritoActualizado)
    }

    return (
        <Document>
            <Outlet
                context={{
                    agregarCarrito,
                    carrito,
                    actualizarCantidad,
                    eliminarGuitarra
                }}
            />
        </Document>
    )
}

function Document({ children }) {
    return (
        <html lang="es">
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                <Header />
                {children}
                <Footer />

                <Scripts />
                <LiveReload />
            </body>
        </html>
    )
}



