
import './FilmLibrary.css'
// import './FilmRow.css'
import Film from "../Film/Film"
import {useState, useEffect} from "react"
import { TMDB, TMDB_API_KEY } from "../Data/TMDBFilms";


const SELECTION_CRITERIA = `language=en-US&sort_by=popularity.desc&primary_release_year=2022`
const TMDB_BASE_URL = "https://api.themoviedb.org/3/"
const TMDB_POSTER_BASE_URL = "https://image.tmdb.org/t/p/w780"
const films_data = [...TMDB.films]

function FilmLibrary() {

  // to display numbers and ALL/FAVES
  const [filmData, setFilmData] = useState(films_data)
  const [showAllFilms, setShowAll] = useState(true)
  const [countFaves, setCountFaves] = useState(0)
  const [favesFilmIDs, setFaves] = useState([])

  // data fetched everytime click on ALL
  useEffect(()=>{
    const url = `${TMDB_BASE_URL}discover/movie?api_key=${TMDB_API_KEY}&${SELECTION_CRITERIA}`
    fetch(url)
      .then(response => response.json())
      .then((data) =>setFilmData(data.results))
  },[showAllFilms])


  // Choose show lists
  const showAll = () => {
    setShowAll(true)
  }
  const showFaves = () => {
    setShowAll(false)
  }

  // Toggle Faves
  const handleToggleFaves = (id) => {
    const newFavesFilmIDs = [...favesFilmIDs]
    // if not in FAVES, add
    if (!newFavesFilmIDs.includes(id)){
      newFavesFilmIDs.unshift(id)
    }
    // else: remove
    else{
      const index = newFavesFilmIDs.indexOf(id)
      newFavesFilmIDs.splice(index, 1)
    }
    setFaves([...newFavesFilmIDs])
    const newCountFaves = newFavesFilmIDs.length
    setCountFaves(newCountFaves)
  }

  const AllFilms = filmData.map((film, id) => {
    return (
      <div key={film.id} className='films'>
        <Film
          // id = {film.id}
          // title={film.title}
          {...film}
          src={TMDB_POSTER_BASE_URL + film.poster_path}
          year={film.release_date.slice(0, 4)}
          is_in_faves = {favesFilmIDs.includes(film.id)}
          handleToggleFaves = {handleToggleFaves}
        />
      </div>
    );
  });

  const FavesFilms = filmData
    .filter((film,id) => (favesFilmIDs.includes(film.id)))
    .map((film) => {
    return (
      <div key={film.id} className='films'>
        <Film
          // id = {film.id}
          // title={film.title}
          {...film}
          src={TMDB_POSTER_BASE_URL + film.poster_path}
          year={film.release_date.slice(0, 4)}
          is_in_faves = {favesFilmIDs.includes(film.id)}
          handleToggleFaves = {handleToggleFaves}
        />
      </div>
    );
  });

  return (
    <div className="FilmLibrary">
      {/* Display counts and films lists */}

      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
          <button className="film-list-filter is-active" onClick={showAll}>
            ALL <span className="section-count" >{filmData.length}</span>
          </button>
          <button className="film-list-filter" onClick={showFaves}>
            FAVOURITES <span className="section-count" id="faves_count">{countFaves}</span>
          </button>
        </div>

        <div className="film-container">
          {/* Choose ALL or FAVES */}
            {showAllFilms
              ? AllFilms
              : FavesFilms
            }
        </div>

      </div>
    </div>
  );
}

export default FilmLibrary
