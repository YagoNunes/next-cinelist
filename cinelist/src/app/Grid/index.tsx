import Cards from "../Cards";
import { Filme } from "../Types/types";
import styles from "./Grid.module.css"

// Essa é a sessão Filmes, essa sessão recebe os filmes e estruturar eles na section

type Props = {
    filmes : Filme[]
            //recebe o Type.ts Filme
}

const Grid = ({filmes} : Props) => {
    return (
        <section className={styles.grid}>
            {filmes.map(filme => <Cards key={filme.id} filme={filme}/>)}
        </section>
    );
}


export default Grid