export const addToNominateList = (nominateList, movieToAdd) => {
  const movieIsExist = nominateList.find(movie => movie.imdbID === movieToAdd.imdbID);

  if (!movieIsExist) {
    movieToAdd.is_nominate = true;
    return [...nominateList, movieToAdd];
  } else {
    return nominateList;
  }
}

export const removeFromNominateList = (nominateList, movieToRemove) => {
  const movieIsExist = nominateList.find(movie => movie.imdbID === movieToRemove.imdbID);

  if(movieIsExist) {
    movieToRemove.is_nominate = false;
    return nominateList.filter(movie => movie.imdbID !== movieToRemove.imdbID);
  }
}
