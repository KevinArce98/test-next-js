import Link from 'next/link';
import Layout from '../../components/Layout';

const index = ({ data }) => {
    return (
        <Layout title="Usuarios" description="Lista de usuarios">
            <div>
                <h1>Lista de usuarios</h1>
                <Link href="/users/add" passHref>
                    <button type="button" className="btn btn-primary">Ir al formulario</button>
                </Link>

                <table className="table mt-3">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(user => (
                                <tr key={user.id}>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>
                                        <Link href={`/users/${user.id}`} passHref>
                                            <button className="btn btn-info">
                                                Details
                                            </button>
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </Layout>
    )
}

export default index;


export async function getStaticProps() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        return {
            props: {
                data
            }
        }
    } catch (error) {
        console.log(error);
    }
}
