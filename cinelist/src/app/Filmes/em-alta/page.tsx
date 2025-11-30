
import Grid from "@/app/Grid";
import { getNowPlaying } from "@/app/lib/api/services";
import Titles from "@/app/Titles";


const EmAlta = async () => {

    const filmes = await getNowPlaying();
    return (
        <>
            <Titles titles="Em Alta"/>
            <Grid filmes={filmes}/> 
        </>
    );
}

export default EmAlta