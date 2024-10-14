import "./TodoItem.css";
import {memo} from "react";

const TodoItem = ({id, isDone, content, date, onUpdate, onDelete}) => {
    const onChangeCheckbox = () => {
        onUpdate(id);
    };

    const onClickDeleteButton = () => {
        onDelete(id);
    }

    return (
        <>
            <div className={"TodoItem"}>
                <input
                    onChange={onChangeCheckbox}
                    checked={isDone}
                    type={"checkbox"}
                />
                <div className={"content"}>{content}</div>
                <div className={"date"}>{new Date(date).toLocaleDateString()}</div>
                <button onClick={onClickDeleteButton}>삭제</button>
            </div>
        </>
    );
};

export default memo(TodoItem);

// export default memo(TodoItem, (prevProps, nextProps) => {
//     // 반환값에 따라, props가 바뀌었는지 안바뀌었는지 판단
//     // T -> Props 바뀌지 않음 -> 리렌더링 X
//     // F -> Props 바뀜 -> 리렌더링 O
//     if (prevProps.id !== nextProps.id) return false;
//     if (prevProps.isDone !== nextProps.isDone) return false;
//     if (prevProps.content !== nextProps.content) return false;
//     if (prevProps.date !== nextProps.date) return false;
//     return true;
// });

// 리액트 최적화
// 1. 기능 우선 개발한 뒤에 최적화 적용
// 2. 반드시 최적화가 필요한 곳에만 적용
//  => 리스트 등의 이유로 갯수가 많아지는 컴포넌트 or 컴포넌트 내에 함수가 너무 많은 컴포넌트