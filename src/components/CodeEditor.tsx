import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CodeMirror from '@uiw/react-codemirror';
import { ViewUpdate } from '@codemirror/view';
import { javascript } from '@codemirror/lang-javascript';
import { githubDark } from '@uiw/codemirror-theme-github';
import OutputWindow from './OutputWindow';
import OutputDetails from './OutputDetails';
import useKeyPress from '../hooks/useKeyPress';

const extensions = [javascript({ jsx: true })];
const RAPID_API_URL = process.env.REACT_APP_RAPID_API_URL;
const RAPID_API_HOST = process.env.REACT_APP_RAPID_API_HOST;
const RAPID_API_KEY = process.env.REACT_APP_RAPID_API_KEY;
const CONTENT_TYPE = "application/json";


interface ICodeMirror {
    code : string;
}

/**
 * 사용자에게 각 코드 element에 스타일이 입혀진 에디터를 보여주기 위해 사용
 * @param codeValue default로 들어갈 코드 
 * @returns 에디터에 입력한 value
 */
function CodeEditor({code} : ICodeMirror) {
    const [solutionCode, setSolutionCode] = useState(code);
    const [outputDetails, setOutputDetails] = useState(null || "");
    const [processing, setProcessing] = useState(null || false);
    const enterPress = useKeyPress("Enter");
    const ctrlPress = useKeyPress("Control");

    useEffect(() => {
        if (enterPress && ctrlPress) {
            console.log("enterPress", enterPress);
            console.log("ctrlPress", ctrlPress);
            handleCompile();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ctrlPress, enterPress]);
    
    const handleCodeChange = React.useCallback((value :string, viewUpdate: ViewUpdate) => {
        setSolutionCode(value);
    }, []);

    const handleCompile = () => {
        const confirmAnswers = `
            ${solutionCode}
            console.log(solution(12));
        `;
        setProcessing(true);
        const formData = {
            language_id: 63,
            // encode source code in base64
            source_code: btoa(confirmAnswers),
        };
        const options = {
            method: "POST",
            url: `${RAPID_API_URL}`,
            params: { base64_encoded: "true", fields: "*" },
            headers: {
                "content-type": CONTENT_TYPE,
                "Content-Type": CONTENT_TYPE,
                "X-RapidAPI-Host": RAPID_API_HOST,
                "X-RapidAPI-Key": RAPID_API_KEY,
            },
            data: formData,
        };

        axios
            .request(options)
            .then(function (response) {
                const token = response.data.token;
                checkStatus(token);
            })
            .catch((err) => {
                let error = err.response ? err.response.data : err;
                setProcessing(false);
                console.log(error);
        });
    };

    const checkStatus = async (token: string) => {
        const options = {
            method: "GET",
            url: `${RAPID_API_URL}/${token}`,
            params: { base64_encoded: "true", fields: "*" },
            headers: {
                "X-RapidAPI-Host": RAPID_API_HOST,
                "X-RapidAPI-Key": RAPID_API_KEY,
            },
        };
        try {
            let response = await axios.request(options);
            let statusId = response.data.status?.id;

            // Processed - we have a result
            if (statusId === 1 || statusId === 2) {
                // still processing
                setTimeout(() => {
                    checkStatus(token)
                }, 2000)
                return
            } else {
                setProcessing(false)
                setOutputDetails(response.data)
                return
            }
        } catch (err) {
            console.log("err", err);
            setProcessing(false);
        }
    };

    return (<>
        <CodeMirror
            value={solutionCode}
            height="100%"
            theme={githubDark}
            extensions={extensions}
            onChange={handleCodeChange}
        />
        <div className="right-container flex flex-shrink-0 w-[30%] flex-col">
            <OutputWindow outputDetails={outputDetails} />
            <div className="flex flex-col items-end">
                <button
                    onClick={handleCompile}
                    disabled={!code}
                >
                    {processing ? "Processing..." : "Compile and Execute"}
                </button>
            </div>
            {outputDetails && <OutputDetails outputDetails={outputDetails} />}
        </div>
    </>);
}

export default CodeEditor;