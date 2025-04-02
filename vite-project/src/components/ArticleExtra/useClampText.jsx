import { useState, useEffect, useRef } from "react";

const useClampText = (text, maxLines) => {
    const ref = useRef(null);
    const [clampedText, setClampedText] = useState(text);

    useEffect(() => {
        const checkOverflow = () => {
            if (ref.current) {
                const lineHeight = parseInt(window.getComputedStyle(ref.current).lineHeight, 10);
                const maxHeight = lineHeight * maxLines;

                ref.current.innerText = text;

                if (ref.current.scrollHeight > maxHeight) {
                    let truncated = text;
                    while (ref.current.scrollHeight > maxHeight && truncated.length > 0) {
                        truncated = truncated.slice(0, -1);
                        ref.current.innerText = truncated + "...";
                    }
                    setClampedText(truncated + "...");
                } else {
                    setClampedText(text);
                }
            }
        };

        
        checkOverflow();
        window.addEventListener("resize", checkOverflow);
        return () => window.removeEventListener("resize", checkOverflow);
    }, [text, maxLines]);

    return [clampedText, ref];
};

export default useClampText;
