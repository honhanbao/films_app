// import './FilmRow.css'

import { Link } from 'react-router-dom'

function Film(props){

  const handleToggleFaves = () => {
    props.handleToggleFaves(props.id)
  }

  // const handleDetail = () => {
  //   props.handleDetail(props.id)
  // }

  return(
    <div>
        <div className="FilmRow">
        <img src={props.src} alt="{film title} film poster" />
        <div className="film-summary">
          <h3>{props.title}</h3>
          <p>{props.year}</p>
          {/* <p>In FAVES: {String(props.is_in_faves)}</p> */}
          <div className="actions">
            <button className="action" onClick={handleToggleFaves}>
              <span className="material-icons">Favourite</span>
            </button>
            {/* <button className="action" onClick={handleDetail}>
              <span className="material-icons">read_more</span>
            </button> */}
            <Link to={`/film/${props.id}`} className="action">
              <span className="material-icons">Detail</span>
            </Link>

          </div>
        </div>
        </div>
    </div>
  )
}

export default Film
