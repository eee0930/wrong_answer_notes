import { useState } from "react";
import { Helmet } from "react-helmet";
// components
import CodeEditor from "../components/CodeEditor";
import Question from "../components/Question";

// 1. Reading and parsing selected txt file
// 2. Sending question props to the 'Question' components
// 3. Sending solution props to the 'CodeEditor' components

function LandingNote() {
    const [codeParam, setCodeParam] = useState("n");
    const question = `자연수 <code>n</code>이 매개변수로 주어집니다. <code>n</code>을 <code>x</code>로 나눈 나머지가 1이 되도록 하는 
        가장 작은 자연수 <code>x</code>를 return 하도록 solution 함수를 완성해주세요. 답이 항상 존재함은 증명될 수 있습니다.`;
    const defaultCode = `const solution = (${codeParam}) => {
  let answer = 0;

  return answer;
};
`;
    const [code, setCode] = useState(defaultCode);

    return (<>
        <Helmet>
            <title>title...</title>
        </Helmet>
        <Question question={question} />
        <CodeEditor code={code} />
    </>);
};

export default LandingNote;    