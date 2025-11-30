
import Grid from "@/app/Grid";
import { getTopMovies } from "@/app/lib/api/services";
import Titles from "@/app/Titles";


const TopFilmes = async () => {

    const filmes = await getTopMovies();
    return (
        <>
            <Titles titles="Top Filmes"/>
            <Grid filmes={filmes}/>
        </>
        
    );
}

export default TopFilmes