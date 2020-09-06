export const addToNominateList = (nominateList, movies) => {
  let movieIsExist = nominateList.find(movie => movie.imdbID === movieToAdd.imdbID);

  if (!movieIsExist) {
    movieToAdd.is_nominate = true;
    return [...nominateList, movieToAdd];
  } else {
    return nominateList;
  }
}

export checkIfMovieIsNominate = (nominateList, moviesList) => {
  nominateList.map((movieInNominates) => {
    let movieIsExist = moviesList.find(movie => movie.imdbID === movieInNominates.imdbID);

    if (!movieIsExist) {
      movieIsExist.is_nominate = true;
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
