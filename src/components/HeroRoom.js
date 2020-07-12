import styled from "styled-components";
import defaultImg from "../images/room.jpg";

const HeroRoom = styled.header`
  min-height: 70vh;
  /* background: url(${defaultImg}); */
  background: url(${props => (props.img ? props.img : defaultImg)});
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default HeroRoom;