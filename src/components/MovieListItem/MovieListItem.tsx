import { notFoundImage } from "assets";
import { Movie, MoviePoster, MovieTrendsIcon, Released, CustomLink, Title } from "./styles";

interface IProps {
  title: string | null;
  year: string | null;
  poster: string | undefined;
  imdbID: string;
  isTrend?: boolean;
}

export const MovieListItem = ({ title, poster, imdbID, year, isTrend }: IProps) => {
  return (
    <Movie
      initial={{ opacity: 1 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      whileHover={{ scale: 1.1, transition: { delay: 0.2 } }}
    >
      <CustomLink to={`/movies/${imdbID}`}>
        <>
          <MoviePoster src={poster === "N/A" ? notFoundImage : poster} />
          {isTrend && <MovieTrendsIcon />}
        </>
        <Title>{title}</Title>
      </CustomLink>
      <Released>Released: {year}</Released>
    </Movie>
  );
};
