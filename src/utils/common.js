const movieTypeToReduxStateConverter = (movieType) => {
  let convertedMovieType = movieType;
  const breakPoints = [];
  for (let index = 0; index < movieType.length; index++) {
    if (movieType.charAt(index) === "_") breakPoints.push(index);
  }
  for (let index of breakPoints) {
    if (index + 1 > movieType.length) continue;
    convertedMovieType =
      convertedMovieType.substring(0, index + 1) +
      convertedMovieType.charAt(index + 1).toUpperCase() +
      convertedMovieType.substring(index + 2);
  }
  convertedMovieType = convertedMovieType.replace(/_/g, "");
  convertedMovieType += "Movies";
  return convertedMovieType;
};

export { movieTypeToReduxStateConverter };
