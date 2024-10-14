import "./Editor.css";
import {useContext, useRef, useState} from "react";
import {TodoDispatchContext} from "../App.jsx";

const Editor = () => {
    const {onCreate} = useContext(TodoDispatchContext);
    const [content, setContent] = useState("");
    const contentRef = useRef();

    const onChangeContent = (e) => {
        setContent(e.target.value);
    };

    const onKeyDown = (e) => {
        if (e.key === "Enter") {
            onSubmit();
        }
    };

    const onSubmit = () => {
        if (content === "") {
            // noinspection JSUnresolvedReference
            contentRef.current.focus();
            return;
        }
        onCreate(content);
        setContent("");
    };

    return (
        <>
            <div className={"Editor"}>
                <input
                    ref={contentRef}
                    value={content}
                    onChange={onChangeContent}
                    onKeyDown={onKeyDown}
                    placeholder={"새로운 Todo..."}
                />
                <button onClick={onSubmit}>추가</button>
            </div>
        </>
    );
};

export default Editor;