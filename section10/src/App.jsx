import './App.css';
import {useCallback, useReducer, useRef} from "react";
import Header from "./components/Header.jsx";
import Editor from "./components/Editor.jsx";
import List from "./components/List.jsx";

const mockData = [
    {
        id: 0,
        isDone: false,
        content: "React 공부하기",
        date: new Date().getTime(),
    },
    {
        id: 1,
        isDone: false,
        content: "빨래하기",
        date: new Date().getTime(),
    },
    {
        id: 2,
        isDone: false,
        content: "노래 연습하기",
        date: new Date().getTime(),
    },
];

function reducer(state, action) {
    switch (action.type) {
        case "CREATE":
            return [...state, action.data];
        case "UPDATE":
            return state.map((item) =>
                item.id === action.targetId
                    ? {...item, isDone: !item.isDone}
                    : item
            );
        case "DELETE":
            return state.filter((item) => item.id !== action.targetId);
        default:
            return state;
    }
}

const App = () => {
    const [todos, dispatch] = useReducer(reducer, mockData);
    const idRef = useRef(mockData.length);

    const onCreate = useCallback((content) => {
        dispatch({
            type: "CREATE",
            data: {
                id: idRef.current++,
                isDone: false,
                content: content,
                date: new Date().getTime(),
            }
        });
    }, []);

    const onUpdate = useCallback((targetId) => {
        dispatch({
            type: "UPDATE",
            targetId: targetId,
        })
    }, []);

    const onDelete = useCallback((targetId) => {
        dispatch({
            type: "DELETE",
            targetId: targetId,
        });
    }, []);

    return (
        <>
            <div className={"App"}>
                {/*<Exam/>*/}
                <Header/>
                <Editor onCreate={onCreate}/>
                <List todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
            </div>
        </>
    );
};

export default App;
