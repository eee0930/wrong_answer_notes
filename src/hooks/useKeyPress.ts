import React, { useState } from "react";

interface IKey {
    key: string;
}

function useKeyPress(targetKey: string) {
    const [keyPressed, setKeyPressed] = useState(false);

    function downHandler({ key }: IKey) {
        if (key === targetKey) {
            setKeyPressed(true);
        }
    }

    const upHandler = ({ key }: IKey) => {
        if (key === targetKey) {
            setKeyPressed(false);
        }
    };

    React.useEffect(() => {
        document.addEventListener("keydown", downHandler);
        document.addEventListener("keyup", upHandler);

        return () => {
            document.removeEventListener("keydown", downHandler);
            document.removeEventListener("keyup", upHandler);
        };
    });

    return keyPressed;
};

export default useKeyPress;