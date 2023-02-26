import { useState } from "react";
import CodeEditor from "../components/CodeEditor";
import { Helmet } from "react-helmet";

// 1. The 'Code Editor Window' component
// 2. The 'Output' components

function LandingNote() {
    const [codeParam, setCodeParam] = useState("");
    const defaultCode = `const solution = (${codeParam}) => {
  let answer = "";
  // Write the solution here.

  return answer;
};
`;

    const [code, setCode] = useState(defaultCode);

    return (<>
        <Helmet>
            <title>title...</title>
        </Helmet>
        <div className="h-4 w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">hey</div>

        <div className="flex flex-row space-x-4 items-start px-4 py-4">
            <div className="flex flex-col w-full h-full justify-start items-end">
                <CodeEditor code={code} />
            </div>
        </div>
    </>);
};

export default LandingNote;    