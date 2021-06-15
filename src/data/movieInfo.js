import basicFetch from "./basicFetch";

const API_KEY = 'ea356b1b726a151525c4c55d336e6879';

const getMovieInfo = async (movieID, type) => {
    let info = {};

    if(movieID){
        if(type === 'tv'){
            info = await basicFetch(`/tv/${movieID}?language=pt-BR&api_key=${API_KEY}`)
        }else{
            info = await basicFetch(`/movie/${movieID}?language=pt-BR&api_key=${API_KEY}`)
        }
    }

    return info
}

export default getMovieInfo