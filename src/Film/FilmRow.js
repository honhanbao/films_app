import '../FilmDetail/FilmDetail.css'
import { TMDB, TMDB_API_KEY } from "../Data/TMDBFilms";
import {useState, useEffect} from "react"
import { Link, useParams } from "react-router-dom"


const TMDB_BASE_URL = "https://api.themoviedb.org/3/"
const TMDB_POSTER_BASE_URL = "https://image.tmdb.org/t/p/w780"


function FilmRow(){

    let params = useParams()

    const [currentDetail, setDetail] = useState({})

    useEffect(() => {
        const url = `${TMDB_BASE_URL}movie/${params.filmID}?api_key=${TMDB_API_KEY}&language=en-US`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => setDetail(data));
        }, []);

    const detail = [currentDetail.id, currentDetail.title, currentDetail.backdrop_path, currentDetail.poster_path, currentDetail.overview]
    const [id, title, backdrop_path, poster_path, overview] = detail

    return (
    <>
        <div className="FilmDetail is-hydrated">
        <figure className="film-backdrop">
            <img src={TMDB_POSTER_BASE_URL + backdrop_path} alt={`${title} backdrop`} />
            <h1 className="film-title">{title}</h1>
        </figure>

        <div className="film-meta">
            <p className="film-detail-overview">
            <img src={"https://image.tmdb.org/t/p/w780" + poster_path} className="film-detail-poster" alt={title + ' poster'} />
            {overview}
            </p>
        </div>
        
        {/* <Link to="/films">Back to Films</Link> */}
        </div>
    </>
    );
}

export default FilmRow