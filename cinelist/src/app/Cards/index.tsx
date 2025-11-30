import Link from "next/link";
import { Filme } from "../Types/types";
import styles from "./Cards.module.css"

type Props = {
    filme : Filme
    //Esse Card é do Type.ts Filme
}

const Cards = ({filme} : Props) => {

    //Desestruturação do Types.ts
    const {id ,poster_path ,title , overview , vote_average} = filme;
    // Se estiver mais do que 200 caracteres eu corto o overview para 150 caracteres : se não aparece normal
    const resume = overview?.length >=200 ? `${overview?.substring(0,150)}...`: overview
    return (
        <div key={id} className={styles.cards}>
            <Link href={`/Filmes/${id}`}>
                <img className={styles.cards__image} 
                src={`${process.env.NEXT_PUBLIC_TMDB_API_IMG_URL}${poster_path}`} 
                alt={`Poster do Fillme ${title}`} width={300} height={200} />
                <div className={styles.cards__sobre}>
                    <h3 className={styles.cards__h3}> {title} </h3>
                    <p className={styles.cards__p}> {resume} </p>
                    <p className={styles.nota}>{vote_average}</p>
                </div>
            </Link>
        </div>
    );
}

export default Cards