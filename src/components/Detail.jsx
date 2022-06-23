import styled from 'styled-components';

function Detail() {
  return <Container>Detail</Container>;
}

const Container = styled.div`
  position: relative;
  min-height: calc(100vh-230px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`;

export default Detail;
