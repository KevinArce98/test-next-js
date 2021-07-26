import Layout from "../../components/Layout";


const Details = ({user}) => {
    return (
        <Layout>
            {user.name}
        </Layout>
    )
}

export default Details


export async function getStaticPaths() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        const paths = data.map(({ id }) => ({ params: { id: `${id}` } }));
        return {
            paths,
            fallback: false
        }
    } catch (error) {
        console.log(error);
    }
}

export async function getStaticProps({ params }) {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users/' + params.id);
        const data = await res.json();
        return {
            props: {
                user:data
            }
        }
    } catch (error) {
        console.log(error);
    }
}
