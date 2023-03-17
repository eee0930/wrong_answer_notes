import styled from 'styled-components';
import { Markup } from 'interweave';

const QuestionContainer = styled.div`
    line-height: 1.8;
    word-wrap: break-word;
    word-break: normal;
    font-weight: 400;
    letter-spacing: -0.1px;
    color: #B2C0CC;
`;

interface IQuestion {
    question: string;
}

function Question({ question }: IQuestion) {
    
    return (<>
        <QuestionContainer>
            <Markup content={question} />
        </QuestionContainer>
    </>);
}

export default Question;