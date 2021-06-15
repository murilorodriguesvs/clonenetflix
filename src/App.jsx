import React, {useEffect, useState} from 'react';

import getHomeList from './data/TMDB'
import getMovieInfo from './data/movieInfo'

import './App.css'

import Header from './components/Header';
import FeaturedMovie from './components/FeaturedMovie';
import MovieRow from './components/MovieRow';

const App = () =>{
    
    const [movieList, setMovieList] = useState([]);
    const [featuredData, setFeaturedData] = useState(null);
    const [blackHeader, setBlackHeader] = useState(false);

    useEffect(()=>{

        const loadAll = async () =>{
            /*Receber Lista de filmes*/
            let list = await getHomeList();
            setMovieList(list);

            /*Receber o Featured*/
            let originals = list.filter(i => i.slug === 'originals');
            let randomMovie = Math.floor(Math.random() * originals[0].items.results.length)
            let chosen = originals[0].items.results[randomMovie]
            let chosenInfo = await getMovieInfo(chosen.id, 'tv');
            setFeaturedData(chosenInfo);
        }
        
        loadAll();

    }, []);

    useEffect(() => {
        const scrollListener = () => {
            if(window.scrollY > 10){
                setBlackHeader(true)
            }else{
                setBlackHeader(false)
            }
        }

        window.addEventListener('scroll', scrollListener);

        return () => {
            window.removeEventListener('scroll', scrollListener)
        }

    }, [])

    return(
        <main className="page">

            <Header black={blackHeader}></Header>

            {featuredData && <FeaturedMovie item={featuredData}/>}

            <section className="lists">
                {movieList.map((item, key) => (
                    <MovieRow title={item.title} key={key} items={item.items}></MovieRow>
                ))}
            </section>
            <footer>
                Feito para treinamento por Murilo Rodrigues<br/>
                Direitos de imagem para Netflix<br/>
                Dados de TMDB
            </footer>

            {movieList.length <= 0 &&
                <div className="loading">
                    <div></div>
                </div>
            }
        </main>
    );
}

export default App