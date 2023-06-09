import './FilmDetail.css'


function CurrentFilmDetails(props){

  // donot use {} instead of []
  // id is essential as it is used in many places
  const [id, title, backdrop_path, poster_path, overview] = props.showDetail
  // console.log(props.showDetail)
    return (
      <>
        <div className="FilmDetail is-hydrated">
          <figure className="film-backdrop">
            <img src={"https://image.tmdb.org/t/p/w780" + backdrop_path} alt="Baby Driver backdrop" />
            <h1 className="film-title">{title}</h1>
          </figure>

          <div className="film-meta">
            <p className="film-detail-overview">
              <img src={"https://image.tmdb.org/t/p/w780" + poster_path} className="film-detail-poster" alt={title + ' poster'} />
              {overview}
            </p>
          </div>
        </div>
      </>
    );
}

export default CurrentFilmDetails
