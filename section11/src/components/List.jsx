import "./List.css";
import TodoItem from "./TodoItem.jsx";
import {useContext, useMemo, useState} from "react";
import {TodoStateContext} from "../App.jsx";

const List = () => {
    const todos = useContext(TodoStateContext);
    const [search, setSearch] = useState("");

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    const getFilteredData = () => {
        if (search === "") {
            return todos;
        }
        return todos.filter((todo) => todo.content.toLowerCase().includes(search.toLowerCase()));
    };

    const getAnalyzedData = () => {
        const totalCount = todos.length;
        const doneCount = todos.filter(todo => todo.isDone).length;
        const notDoneCount = totalCount - doneCount;

        return {
            totalCount,
            doneCount,
            notDoneCount,
        }
    };

    const {totalCount, doneCount, notDoneCount} = useMemo(() => {
        const totalCount = todos.length;
        const doneCount = todos.filter(todo => todo.isDone).length;
        const notDoneCount = totalCount - doneCount;

        return {
            totalCount,
            doneCount,
            notDoneCount,
        }
    }, [todos]);

    return (
        <>
            <div className={"List"}>
                <h4>Todo List 🌱</h4>
                <div>
                    <div>totalCount: {totalCount}</div>
                    <div>doneCount: {doneCount}</div>
                    <div>notDoneCount: {notDoneCount}</div>
                </div>
                <input value={search} onChange={onChangeSearch} placeholder={"검색어를 입력하세요"}/>
                <div className={"todos_wrapper"}>
                    {
                        getFilteredData().map(todo => {
                            return (
                                <TodoItem key={todo.id} {...todo}/>
                            );
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default List;