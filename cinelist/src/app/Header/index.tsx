import Link from "next/link"
import styles from "./Header.module.css"

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.header__container}>
                <Link href="/">
                    <h3 className={styles.header__cinelist}>Cinelist</h3>
                </Link>
                <nav className={styles.header__nav}>
                    <Link className={styles.header__navLink} href="/">Inicio</Link>
                    <Link className={styles.header__navLink} href="/Filmes/em-alta">Em alta</Link>
                    <Link className={styles.header__navLink} href="/Filmes/populares">Populares</Link>
                    <Link className={styles.header__navLink} href="/Filmes/top-filmes">Top Filmes</Link>
                </nav>
            </div>
        </div>
    )
}

export default Header