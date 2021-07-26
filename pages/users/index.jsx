import Link from 'next/link';
import Layout from '../../components/Layout';

const index = () => {
    return (
        <Layout title="Usuarios" description="Lista de usuarios">
            <div>
                <h1>Lista de usuarios</h1>
                <Link href="/users/add" passHref>
                    <button type="button" className="btn btn-primary">Ir al formulario</button>
                </Link>
            </div>
        </Layout>
    )
}

export default index
