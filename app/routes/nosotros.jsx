import imagen from "../../public/img/nosotros.jpg";
import styles from '~/styles/nosotros.css'

export function meta() {
    return (
        [
            { title: 'GuitarLA - Sobre Nosotros' },
            { description: 'Venta de guitarras, blog de música' },
        ]

    )
}

export function links() {
    return[
        {
            rel: 'stylesheet',
            href: styles
        },

        {
            rel: 'preload',
            href: imagen,
            as: 'image'
        }
    ]
}



function Nosotros() {
    return (
        <main className="contenedor nosotros">
            <h2 className="heading">Nosotros</h2>

            <div className="contenido">
                <img src={imagen} alt="imagen sobre nosotros" />

                <div>
                    <p>
                        Donec leo dolor, sagittis non diam pretium, pulvinar egestas nibh.
                        Morbi in ullamcorper nibh. Etiam dapibus sem ullamcorper quam
                        congue, nec vulputate est porta. In interdum, est ut imperdiet
                        rutrum, justo leo lacinia orci, eu dictum dui elit sit amet augue.
                        Integer non mi turpis. Aenean in sem ipsum. Pellentesque in
                        tristique metus, sed consectetur turpis. Morbi sodales sollicitudin
                        luctus. Suspendisse ultrices quam nec nibh facilisis, nec mollis
                        justo aliquet. Vestibulum erat felis, mattis nec hendrerit sit amet,
                        commodo in turpis. Mauris tincidunt nisi vitae suscipit mollis.
                        Fusce consectetur suscipit porttitor. Etiam quis turpis non augue
                        aliquam imperdiet id eu ligula. Phasellus et ultricies tortor. Nunc
                        ligula enim, dictum a nisi sed, posuere blandit arcu. Morbi mollis
                        diam faucibus est finibus, quis facilisis ligula facilisis.
                    </p>

                    <p>
                        Donec leo dolor, sagittis non diam pretium, pulvinar egestas nibh.
                        Morbi in ullamcorper nibh. Etiam dapibus sem ullamcorper quam
                        congue, nec vulputate est porta. In interdum, est ut imperdiet
                        rutrum, justo leo lacinia orci, eu dictum dui elit sit amet augue.
                        Integer non mi turpis. Aenean in sem ipsum. Pellentesque in
                        tristique metus, sed consectetur turpis. Morbi sodales sollicitudin
                        luctus. Suspendisse ultrices quam nec nibh facilisis, nec mollis
                        justo aliquet. Vestibulum erat felis, mattis nec hendrerit sit amet,
                        commodo in turpis. Mauris tincidunt nisi vitae suscipit mollis.
                        Fusce consectetur suscipit porttitor. Etiam quis turpis non augue
                        aliquam imperdiet id eu ligula. Phasellus et ultricies tortor. Nunc
                        ligula enim, dictum a nisi sed, posuere blandit arcu. Morbi mollis
                        diam faucibus est finibus, quis facilisis ligula facilisis.
                    </p>
                </div>
            </div>
        </main>
    );
}

export default Nosotros;
