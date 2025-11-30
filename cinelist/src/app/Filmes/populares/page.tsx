
import Grid from "@/app/Grid";
import { getPopularMovies } from "@/app/lib/api/services";
import Titles from "@/app/Titles";


const Populares = async() => {

    const filmes = await getPopularMovies();
    return (
        <>
            <Titles titles="Populares"/>
            <Grid filmes={filmes}/>
        </>
        
    );
}

export default Populares