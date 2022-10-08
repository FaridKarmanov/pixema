import styled from "styled-components";
import { Color } from "ui";

export const StyledFavoritesList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, minmax(208px, 266px));
    grid-template-rows: auto;
    grid-gap: 32px;
  }

  @media screen and (min-width: 940px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 60px;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (min-width: 1440px) {
    grid-column: 2/3;
    grid-gap: 50px;
    padding-left: 238px;
  }

  @media screen and (min-width: 1920px) {
    grid-template-columns: repeat(5, 266px);
    grid-gap: 40px;
  }
`;

export const Buttons = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  width: 266px;
  border-radius: 10px;
  border: 1px solid ${Color.Border};
  background: ${Color.Graphite};
  fill: ${Color.Primary};
  stroke: ${Color.Primary};
  cursor: pointer;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
