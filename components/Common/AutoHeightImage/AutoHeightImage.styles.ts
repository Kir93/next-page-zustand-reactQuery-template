import styled from 'styled-components';

const AutoHeightImageWrapper = styled.div`
  width: 100%;

  & > span {
    position: unset !important;

    & .auto-height {
      object-fit: contain !important;
      position: relative !important;
      height: auto !important;
    }
  }
`;

const A = {
  AutoHeightImageWrapper,
};

export default A;
