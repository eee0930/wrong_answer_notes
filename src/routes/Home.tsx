import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    width: 60vw;
    margin: 0 auto;
`;
const TableContainer = styled.div`
    background-color: ${props => props.theme.black.darker};
`;
const TableCol = styled.div`
    padding: 9px 12px;
    a {
        display: block;
        width: 100%;
        font-size: 16px;
    }
`;
const TitleRow = styled.div`  
    background-color: ${props => props.theme.black.lighter};
    font-size: 13px;
`;
const ContentRow = styled.div`
    font-size: 15px;
    &:hover {
        background-color: ${props => props.theme.black.veryDark};
    }
`;
const LevelCol = styled(TableCol)`
    color: #80d686;
`;


function Home () {
    return (<>
        <Helmet>
            <title>Wrong Answer Notes</title>
        </Helmet>
        <Container>
            <TableContainer>
                <TitleRow className="row">
                    <TableCol className="col-1 text-center">No</TableCol>
                    <TableCol className="col">TITLE</TableCol>
                    <TableCol className="col-2 text-center">LEVEL</TableCol>
                    <TableCol className="col-2 text-center">DATE</TableCol>
                </TitleRow>
                <ContentRow className="row">
                    <TableCol className="col-1 text-center">1</TableCol>
                    <TableCol className="col">
                        <Link to="notes/23">notes</Link>
                    </TableCol>
                    <LevelCol className="col-2 text-center">Lv. 1</LevelCol>
                    <TableCol className="col-2 text-center">
                        2023-02-25
                    </TableCol>
                </ContentRow>
                <ContentRow className="row">
                    <TableCol className="col-1 text-center">2</TableCol>
                    <TableCol className="col">
                        <Link to="notes/23">notes</Link>
                    </TableCol>
                    <LevelCol className="col-2 text-center">Lv. 1</LevelCol>
                    <TableCol className="col-2 text-center">
                        2023-02-25
                    </TableCol>
                </ContentRow>

                <ContentRow className="row">
                    <TableCol className="col-1 text-center">2</TableCol>
                    <TableCol className="col">
                    </TableCol>
                    <LevelCol className="col-2 text-center">Lv. 1</LevelCol>
                    <TableCol className="col-2 text-center">
                        2023-02-25
                    </TableCol>
                </ContentRow>
            </TableContainer>
        </Container>
    </>);
}

export default Home;