import styled from 'styled-components';

export const ColorBarWrapper = styled.div`
  width: 100vw;
  height: 2px;
  margin: 15px auto;
  background-color: ${(props) => props.color};
`;

const C = {
  ColorBarWrapper,
};

export default C;
