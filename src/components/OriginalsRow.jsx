import React, {useState} from 'react';

import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';


const OriginalsRow = ({title, items}) => {
    const [scrollX, setScrollX] = useState(0)

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2)
        if(x > 0){
            x = 0
        }

        setScrollX(x)
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 150;

        if((window.innerWidth - listW) > x){
            x = (window.innerWidth - listW) - 60;
        }

        setScrollX(x)  
    }

    return (
        <div className="movieRow">
            <h1 className="movieRow--title">{title}</h1>
            <div className='movieRow--left' onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{fontSize: 50}}></NavigateBeforeIcon>
            </div>
            <div className="movieRow--right" onClick={handleRightArrow}>
                <NavigateNextIcon style={{fontSize: 50}}></NavigateNextIcon>
            </div>
            <div className="originalRow--listArea">
                <div className="originalRow--list" style={{
                    width: items.results.length * 300,
                    marginLeft: scrollX
                }}>
                    {items.results.length > 0 && items.results.map((item, key)=>(
                        <div key={key} className="originalRow--item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OriginalsRow;