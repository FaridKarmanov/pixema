import { useEffect } from "react";
import { fetchMovies } from "store/features";
import { useAppDispatch, useAppSelector } from "store/hooks/";
import { LoadingSpinner, MovieListItem } from "components";
import { StyledMovieList } from "./styles";
import { getMovies } from "store/selectors";
import { IMovie } from "types";

export const MovieList = () => {
  const dispatch = useAppDispatch();
  const { isLoading, movies } = useAppSelector(getMovies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <StyledMovieList>
      {movies.map(({ year, title, poster, imdbID }: IMovie) => (
        <MovieListItem key={imdbID} year={year} title={title} poster={poster} imdbID={imdbID} />
      ))}
    </StyledMovieList>
  );
};
