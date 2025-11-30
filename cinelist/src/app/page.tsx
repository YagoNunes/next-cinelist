import RowLateral from "@/components/rowLateral/RowLateral";
import { getTrendindMovies , getNowPlaying , getPopularMovies , getTopMovies } from "./lib/api/services";
import Titles from "./Titles";

//Teste Git

export default async function Home() {

  const Destaques = await getTrendindMovies();
  const EmAlta = await  getNowPlaying();
  const Populares = await getPopularMovies();
  const Top = await getTopMovies();

  return (
    <>
      <Titles titles="Filmes em Destaques"/>
      <RowLateral filmes={Destaques}/>
      <Titles titles="Em Alta"/>
      <RowLateral filmes={EmAlta}/>
      <Titles titles="Populares"/>
      <RowLateral filmes={Populares}/>
      <Titles titles="Top Filmes"/>
      <RowLateral filmes={Top}/>
    </>
  );
}
