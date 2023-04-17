import styled from "styled-components";

const Container = styled.div`
  height: 40px;
  background-color: #000000;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 3px;
  cursor: pointer;
  width: 100%;
  overflow: hidden;
`;
const Announcement = () => {
  return (
    <Container>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </Container>
  );
};

export default Announcement;
