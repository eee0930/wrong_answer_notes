import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    min-height: 100vh;
`;


function Home () {
    return (<>
        <Helmet>
            <title>Wrong Answer Notes</title>
        </Helmet>
        <Container>
            <Link to="notes">notes</Link>
        </Container>
    </>);
}

export default Home;