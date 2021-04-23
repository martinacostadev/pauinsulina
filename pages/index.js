import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pau Insulina</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h3 className={styles.title}>
          Paula Gil <a href="#">insulina!</a>
        </h3>

        <p className={styles.description}>
          ¿Cuánta insulina aplicar?
        </p>

        <div className={styles.grid}>
          <table className={styles.table}>
            <tr className={styles.titles}>
              <th>Rango</th>
              <th>Miligramos</th>
            </tr>
            <tr className={styles.row}>
              <td className={styles.td}>120-150</td>
              <td className={styles.number}>2</td>
            </tr>
            <tr className={styles.row}>
              <td className={styles.td}>151-200</td>
              <td className={styles.number}>4</td>
            </tr>
            <tr className={styles.row}>
              <td className={styles.td}>201-240</td>
              <td className={styles.number}>6</td>
            </tr>
            <tr className={styles.row}>
              <td className={styles.td}>241-300</td>
              <td className={styles.number}>8</td>
            </tr>
            <tr className={styles.row}>
              <td className={styles.td}>+300</td>
              <td className={styles.number}>10</td>
            </tr>
          </table>
        </div>
      </main>

      <footer className={styles.footer}>
        ♥
      </footer>
    </div>
  )
}
