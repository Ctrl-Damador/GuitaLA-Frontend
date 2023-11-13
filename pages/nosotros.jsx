import Image from "next/image"
import Layout from "@/Components/layout"
import styles from "../styles/nosotros.module.css"

export default function Nosotros() {
    return (
        <Layout
            title={'Nosotros'}
            description="Sobre nosotros, guitarLA, tienda de musica"
        >
            <main className="contenedor">
                <h2 className="heading">Nosotros</h2>

                <div className={styles.contenido}>
                    <Image src="/img/nosotros.jpg" alt="Imagen sobre nosotros" width={1000} height={800}/>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi finibus porttitor purus ut finibus. Aliquam in turpis posuere, aliquam enim a, pharetra lacus. Suspendisse finibus dolor finibus rutrum vehicula. Nulla consectetur, neque sit amet vestibulum dictum, nisi mi dignissim augue, ac ultrices leo purus ut nunc.</p>

                        <p>Nullam et bibendum tellus, ut luctus est. Ut interdum turpis et nibh dictum tempus ut eu enim. Donec vel nisl ac purus placerat sodales at eu neque. Donec nibh lacus, sodales non turpis ac, suscipit luctus sapien. Proin egestas dui turpis, quis venenatis mauris tristique eget. Morbi tincidunt est a dui gravida, sit amet congue metus malesuada.</p>
                    </div>
                </div>
            </main>
        </Layout>
    )
}
 