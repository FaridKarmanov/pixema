import { MovieListItem } from "components";
import { FavoritesIcon } from "assets";
import { removeFromFavorites } from "store/features";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { getFavorites } from "store/selectors";
import { IMovie } from "types";
import { Buttons, Container, StyledFavoritesList } from "./styles";

export const FavoritesList = () => {
  const dispatch = useAppDispatch();
  const { favorites } = useAppSelector(getFavorites);

  return (
    <StyledFavoritesList>
      {favorites.map(({ year, title, poster, imdbID }: IMovie) => (
        <Container>
          <MovieListItem
            key={imdbID}
            year={year}
            title={title}
            poster={poster}
            imdbID={imdbID}
            isFavorite={true}
          />
          <Buttons onClick={() => dispatch(removeFromFavorites(title))}>
            <FavoritesIcon />
          </Buttons>
        </Container>
      ))}
    </StyledFavoritesList>
  );
};
