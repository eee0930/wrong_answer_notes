import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";

const Container = styled.div`
  padding: 15px 0;
  min-height: 100vh;
  @media only screen and (min-width: 1200px) {
    padding: 30px 0;
  }
`;

function App() {
  return (
    <div>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </div>
  );
}

export default App;
