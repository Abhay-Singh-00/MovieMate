import './App.css';
import FavouriteList from './FavouriteList';
import MovieModal from './MovieModal';
import MovieSearch from './MovieSearch';
import { useState } from 'react';

function App() {
  const [favourites, setFavourites] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const showModal = (movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMovie(null);
  };

  const addFavourites = (movie) => {
    setFavourites((prevFavourites) => {
      const updatedFavourites = [...prevFavourites, movie];
      console.log(updatedFavourites); // Logs updated favourites
      return updatedFavourites;
    });
  };

  const removeFavourites = (movie) => {
    const newFavourites = favourites.filter((f) => f.imdbID !== movie.imdbID);
    setFavourites(newFavourites);
  };

  return (
    <>
      <MovieSearch addFavourites={addFavourites} />
      <FavouriteList
        favourites={favourites}
        removeFavourites={removeFavourites}
        showModal={showModal}
      />
      <MovieModal isModalOpen={isModalOpen} movie={selectedMovie} modalClose={closeModal} />
    </>
  );
}

export default App;
