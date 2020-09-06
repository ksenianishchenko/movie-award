export const addToNominateList = (nominateList, movies) => {
  let movieIsExist = nominateList.find(movie => movie.imdbID === movieToAdd.imdbID);

  if (!movieIsExist) {
    movieToAdd.is_nominate = true;
    return [...nominateList, movieToAdd];
  } else {
    return nominateList;
  }
}

export const checkIfMovieIsNominate = (nominateList, moviesList) => {
  moviesList.map((movieInMoviesList) => {
    let movieIsExist = nominateList.find(movie => movie.imdbID === movieInMoviesList.imdbID);

    if (movieIsExist) {
      movieInMoviesList.is_nominate = true;
    }
  })
}

export const removeFromNominateList = (nominateList, movieToRemove) => {
  let movieIsExist = nominateList.find(movie => movie.imdbID === movieToRemove.imdbID);

  if(movieIsExist) {
    movieToRemove.is_nominate = false;
    return nominateList.filter(movie => movie.imdbID !== movieToRemove.imdbID);
  }
}
