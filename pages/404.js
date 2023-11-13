import Layout from "@/Components/layout"
import Link from "next/link"

export default function Pagina404() {
    return (
        <Layout
            title="Pagina no encontrada"
        >
            <p className="error">Página no encontrada</p>
            <Link className="error-enlace" href="/">
                Ir a inicio
            </Link>
        </Layout>
    )
}
