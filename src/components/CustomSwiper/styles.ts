import { motion } from "framer-motion";
import styled from "styled-components";
import { Color } from "ui";
import { Theme } from "ui/theme";

export const MovieContainer = styled(motion.div)`
  max-width: 266px;
  width: 100%;
`;

export const Title = styled.p`
  font-family: Exo 2;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: ${Color.White};
`;

export const MoviePoster = styled.img`
  width: 100%;
  border-radius: 10px;
  height: 357px;

  @media screen and (min-width: 768px) {
    height: 320px;
  }
`;

export const HeaderSwiper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 34px;
`;

export const ArrowContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const NextSlideButton = styled.button<{ $isDark: Theme }>`
  background: ${({ $isDark }) => ($isDark === "dark" ? "none" : Color.White)};
  stroke: ${({ $isDark }) => ($isDark === "dark" ? "none" : Color.White)};
  cursor: pointer;
`;
export const PreviousSlideButton = styled.button<{ $isDark: Theme }>`
  background: ${({ $isDark }) => ($isDark === "dark" ? "none" : Color.White)};
  stroke: ${({ $isDark }) => ($isDark === "dark" ? "none" : Color.White)};
  cursor: pointer;
`;

export const Recommendations = styled.p`
  font-family: Exo 2;
  font-size: 24px;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: 0em;
  color: ${Color.White};
`;
