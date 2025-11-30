
import styles from "./DetalheFIlme.module.css"
import { notFound } from "next/navigation"
import { getMoviesDetails } from "@/app/lib/api/services"
import { BackButton } from "@/components/backbutton/BackButton"

type Props = {
    params : Promise<{
        id : number
    }>
}

//Faz com que cada pagina que eu ande mude o nome La em cima no navegador. Melhor para alavancar o site
export const generateMetadata = async ({params} : Props) => {
    const {id} = await params;

    //Fazer a chamada da Api
    const details = await getMoviesDetails(id);

    if(!details)
        return

    return {
        title: `${details.title} | Cinelista`,
        descripton: details.overview ,
        
        //Faz com que o link da pagina compartilhada apareça imagem,titlo e descriçao
        openGraph: {
            title: `${details.title} | Cinelista`,
            descripton: details.overview ,
            images: [`{${process.env.NEXT_PUBLIC_TMDB_API_IMG_URL}${details.poster_path}}`]
        }
    }
};

const DetalheFilme = async ({params} : Props) => {

    const {id} = await params;

    //Fazer a chamada da Api
    const details = await getMoviesDetails(id);

    if(!details){
        return notFound()
    }

    const {title , poster_path , overview, vote_average} = details;
    return (
        <>
            <div className={styles.container}>
                <div
                    className={styles.backdrop}
                    style={{
                    backgroundImage: `url(${process.env.NEXT_PUBLIC_TMDB_API_IMG_URL}${poster_path})`,
                    }}
                />

                <BackButton />

                <section className={styles.section}>
                    <figure className={styles.posterWrapper}>
                    <img
                        src={`${process.env.NEXT_PUBLIC_TMDB_API_IMG_URL}${poster_path}`}
                        className={styles.poster}
                        alt={`Poster do Filme ${title}`}
                    />
                    </figure>

                    <article>
                        <h1 className={styles.title}>{title}</h1>
                        <p className={styles.nota}>{vote_average}</p>
                        <p className={styles.description}>{overview}</p>
                    </article>
                </section>
            </div>
        </>
    );
}

export default DetalheFilme