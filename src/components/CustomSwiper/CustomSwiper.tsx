import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useAppSelector } from "store/hooks";
import {
  ArrowContainer,
  HeaderSwiper,
  MovieContainer,
  MoviePoster,
  NextSlideButton,
  PreviousSlideButton,
  Recommendations,
  Title,
} from "./styles";
import { useWindowSize } from "hooks";
import { LeftArrowIcon, notFoundImage, RightArrowIcon } from "assets";
import { CustomLink } from "components";
import { getMovies, getUserInfo } from "store/selectors";

export const CustomSwiper = () => {
  const { recommendations } = useAppSelector(getMovies);
  const { isDark } = useAppSelector(getUserInfo);

  const { width = 0 } = useWindowSize();

  const getSlide = () => {
    if (width) {
      if (width > 1024) {
        return 3;
      } else if (width > 400) {
        return 2;
      }
    }
    return 1;
  };

  return (
    <>
      <HeaderSwiper>
        <Recommendations>Recommendations</Recommendations>
        <ArrowContainer>
          <PreviousSlideButton $isDark={isDark} className="custom_prev_btn">
            <LeftArrowIcon />
          </PreviousSlideButton>
          <NextSlideButton $isDark={isDark} className="custom_next_btn">
            <RightArrowIcon />
          </NextSlideButton>
        </ArrowContainer>
      </HeaderSwiper>

      <Swiper
        modules={[Navigation]}
        spaceBetween={40}
        freeMode={true}
        slidesPerView={getSlide()}
        centeredSlides={false}
        navigation={{
          nextEl: ".custom_next_btn",
          prevEl: ".custom_prev_btn",
        }}
      >
        {recommendations.map((movie) => {
          return (
            <SwiperSlide>
              <MovieContainer
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                key={movie.imdbID}
              >
                {movie.poster === "N/A" ? (
                  <MoviePoster src={notFoundImage} />
                ) : (
                  <MoviePoster src={movie.poster} />
                )}
                <CustomLink to={`/movies/${movie.imdbID}`}>
                  <Title>{movie.title}</Title>
                </CustomLink>
              </MovieContainer>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
