import React from 'react';

import OriginalsRow from './OriginalsRow';
import ListRow from './ListRow';

const MovieRow = ({title, items}) => {
    return (
        <div>
            {title === 'Originais Netflix' ? <OriginalsRow title={title} items={items}/> : <ListRow title={title} items={items}/>}
        </div>
    )
}

export default MovieRow;