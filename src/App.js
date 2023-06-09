

import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom'

import FilmLibrary from './FilmLibrary/FilmLibrary';
import Home from './Pages/Home'
import FilmRow from './Film/FilmRow'
import NoPage from './Pages/NoPage'

// function App() {
//   return (
//     <FilmLibrary/>
//   );
// }



const App = () => {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/films">Films</NavLink>
      </nav>
      <Routes>
        <Route path="/"              element={<Home        />} />
        <Route path="films"          element={<FilmLibrary />} />
        <Route path="/film/:filmID"  element={<FilmRow     />} />
        <Route path="*" element={<NoPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
