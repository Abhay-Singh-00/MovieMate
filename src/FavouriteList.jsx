import React from 'react';
import FavouriteMovie from './FavouriteMovie';

const FavouriteList = (props) => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-center mb-8">Favourite Movies</h2>
            {
                props.favourites.length === 0 
                ? (
                    <h3 className="text-xl text-center text-gray-500 mt-10">No Favourite movie yet!</h3>
                  ) 
                : (
                    <ul className="space-y-6 mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8">
                        {props.favourites.map((movie) => (
                            <FavouriteMovie 
                                key={movie.imdbID} 
                                movie={movie} 
                                removeFavourites={props.removeFavourites} 
                                showModal={props.showModal}
                            />
                        ))}
                    </ul>
                )
            }
        </div>
    );
}

export default FavouriteList;
