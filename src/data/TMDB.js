import basicFetch from "./basicFetch";

const API_KEY = 'ea356b1b726a151525c4c55d336e6879';

/*
    - Originais Netflix
    - Recomendados (treding)
    - Em alta (top rated)
    - ação
    - comédia
    - romance
    - suspense
    - drama
    - documentário
    - animação
*/

const getHomeList = async () => {

    return [
        {
            slug: 'treding',
            title: 'Recomendados',
            items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'toprated',
            title: 'Em Alta',
            items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'originals',
            title: 'Originais Netflix',
            items: await basicFetch(`/discover/tv?with_networks=213&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'action',
            title: 'Ação',
            items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'comedy',
            title: 'Comédia',
            items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'romance',
            title: 'Romance',
            items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'thriller',
            title: 'Suspense',
            items: await basicFetch(`/discover/movie?with_genres=9648&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'sci-fi',
            title: 'Sci-fi',
            items: await basicFetch(`/discover/movie?with_genres=878&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'documentary',
            title: 'Documentário',
            items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'animation',
            title: 'Animação',
            items: await basicFetch(`/discover/movie?with_genres=16&language=pt-BR&api_key=${API_KEY}`)
        },
    ]
}

export default getHomeList