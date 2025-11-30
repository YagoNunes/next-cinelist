
import styles from "./Titles.module.css"

type Props = {
    titles : string
}

const Titles = ({titles} : Props) => {
    return (
        <h2 className={styles.title}> {titles} </h2>
    );
}

export default Titles