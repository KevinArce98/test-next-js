import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'


const Home = () => {
	return (
		<Layout>
			<main className={styles.main}>
				<h1 className={styles.title}>
					Welcome to <a href="https://nextjs.org">Next.js!</a>
				</h1>

				<p className={styles.description}>
					Testing Next.js
				</p>
			</main>
		</Layout>
	)
}

export default Home;