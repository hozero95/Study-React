import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import New from "./pages/New.jsx";
import Diary from "./pages/Diary.jsx";
import Notfound from "./pages/Notfound.jsx";
import Edit from "./pages/Edit.jsx";
import {createContext, useReducer, useRef} from "react";

const mockData = [
    {
        id: 1,
        createdDate: new Date().getTime(),
        emotionId: 1,
        content: "1번 일기 내용"
    },
    {
        id: 2,
        createdDate: new Date().getTime(),
        emotionId: 2,
        content: "2번 일기 내용"
    }
];

const reducer = (state, action) => {
    switch (action.type) {
        case "CREATE":
            return [action.data, ...state];
        case "UPDATE":
            return state.map((item) =>
                String(item.id) === String(action.data.id)
                    ? action.data
                    : item
            );
        case "DELETE":
            return state.filter((item) => String(item.id) !== String(action.id));
    }
};

const DiaryStateContext = createContext(undefined);
const DiaryDispatchContext = createContext(undefined);

const App = () => {
    // noinspection JSCheckFunctionSignatures
    const [data, dispatch] = useReducer(reducer, mockData);
    const idRef = useRef(mockData.length + 1);

    // 새로운 일기 추가
    const onCreate = (createDate, emotionId, content) => {
        // noinspection JSCheckFunctionSignatures
        dispatch({
            type: "CREATE",
            data: {
                id: idRef.current++,
                createDate,
                emotionId,
                content
            }
        });
    };

    // 기존 일기 수정
    const onUpdate = (id, createDate, emotionId, content) => {
        // noinspection JSCheckFunctionSignatures
        dispatch({
            type: "UPDATE",
            data: {
                id,
                createDate,
                emotionId,
                content
            }
        });
    };

    // 기존 일기 삭제
    const onDelete = (id) => {
        // noinspection JSCheckFunctionSignatures
        dispatch({
            type: "DELETE",
            id
        });
    };

    return (
        <>
            <button
                onClick={() => {
                    onCreate(new Date().getTime(), 1, "Hello");
                }}
            >
                일기 추가 테스트
            </button>
            <button
                onClick={() => {
                    onUpdate(1, new Date().getTime(), 3, "수정된 일기입니다.");
                }}
            >
                일기 수정 테스트
            </button>
            <button
                onClick={() => {
                    onDelete(1);
                }}
            >
                일기 삭제 테스트
            </button>

            <DiaryStateContext.Provider value={data}>
                <DiaryDispatchContext.Provider
                    value={{
                        onCreate,
                        onUpdate,
                        onDelete,
                    }}
                >
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/new" element={<New/>}/>
                        <Route path="/diary/:id" element={<Diary/>}/>
                        <Route path="/edit/:id" element={<Edit/>}/>
                        <Route path="*" element={<Notfound/>}/>
                    </Routes>
                </DiaryDispatchContext.Provider>
            </DiaryStateContext.Provider>
        </>
    );
};

export default App;
