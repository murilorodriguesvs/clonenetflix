const API_BASE = 'https://api.themoviedb.org/3';


const basicFetch = async (endpoint) =>{
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = req.json();
    return json;
}

export default basicFetch