import { Filme } from "@/app/Types/types"
import tmdbApi from "./axios"

type Data = {
    results : Filme[]
}

export const getTrendindMovies = async () => {
    //Chama o restante da rota da minha api 
    const res = await tmdbApi.get<Data>("/trending/movie/week?language=pt-BR");

    return res.data.results;
}
    //Chama um id do tipo number, chama Promise Filme(types.ts) ou indefinido se não acha um filme!
export const getMoviesDetails = async (id : number) : Promise<Filme | undefined> => {
    //Chama o restante da rota da minha api 
    const res = await tmdbApi.get<Filme>(`/movie/${id}language=pt-BR`);

    return res.data;
}

export const getNowPlaying = async () => {
    //Chama o restante da rota da minha api 
    const res = await tmdbApi.get<Data>("/movie/now_playing?language=pt-BR");

    return res.data.results;
}

export const getPopularMovies = async () => {
    //Chama o restante da rota da minha api 
    const res = await tmdbApi.get<Data>("/person/popular?language=pt-BR");

    return res.data.results;
}
export const getTopMovies = async () => {
    //Chama o restante da rota da minha api 
    const res = await tmdbApi.get<Data>("/person/popular?language=pt-BR");

    return res.data.results;
}