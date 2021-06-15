import React from 'react';

import './css/featuredMovie.css'

const FeaturedMovie = ({item}) => {

    let firstDate = new Date(item.first_air_date);

    let description = item.overview
    if(description.length > 200){
        description = description.substring(0, 200)+'...'
    }

    let genres = [];
    for(let i in item.genres){
        genres.push(item.genres[i].name)
    }

    return(
        <section className='featured' style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <h1 className="featured--name">{item.original_name}</h1>
                    <div className="featured--info">
                        <h3 className="featured--points">{item.vote_average * 10} Relevância</h3>
                        <h3 className="featured--year">{firstDate.getFullYear()}</h3>
                        <h3 className="featured--seasons">{item.number_of_seasons} temporada{item.number_of_seasons === 1 ? '' : 's'}</h3>
                    </div>
                    <h2 className="featured--description">{description}</h2>
                    <div className="featured--buttons">
                        <a href={`/watch/${item.id}`} className="featured--watchButton">► Assistir</a>
                        <a href={`/list/add/${item.id}`} className="featured--addButton">+ Minha Lista</a>
                    </div>
                    <div className="featured--genres"><strong>Gêneros:</strong> {genres.join(', ')}</div>
                </div>
            </div>
        </section>
    )
}

export default FeaturedMovie