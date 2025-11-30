import axios from "axios";

const tmdbApi = axios.create({
    //Parametro de acesso do Node chamado process
    baseURL: process.env.TMDB_API_URL,
    headers: {
        //Informação Sensivél da API tmdb
        Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
        "Content-Type": "application/json"
    }

});

export default tmdbApi