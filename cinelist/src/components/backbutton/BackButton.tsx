import Link from "next/link";
import styles from "./BackButton.module.css"

export const BackButton = () => {
    return (
        <Link className={styles.back} href="/">Voltar</Link>
    );
}
