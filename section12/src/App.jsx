import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import New from "./pages/New.jsx";
import Diary from "./pages/Diary.jsx";
import Notfound from "./pages/Notfound.jsx";
import Button from "./components/Button.jsx";
import Header from "./components/Header.jsx";
import Edit from "./pages/Edit.jsx";

// 1. "/": 모든 일기를 조회하는 Home 페이지
// 2. "/new": 새로운 일기를 작성하는 New 페이지
// 3. "/diary": 일기를 상세히 조회하는 Diary 페이지
const App = () => {
    return (
        <>
            <Header
                title={"Header"}
                leftChild={<Button text={"Left"}/>}
                rightChild={<Button text={"Right"}/>}
            />

            <Button
                text={"123"}
                onClick={() => {
                    console.log("123번 버튼 클릭!");
                }}
            />
            <Button
                text={"123"}
                type={"POSITIVE"}
                onClick={() => {
                    console.log("123번 버튼 클릭!");
                }}
            />
            <Button
                text={"123"}
                type={"NEGATIVE"}
                onClick={() => {
                    console.log("123번 버튼 클릭!");
                }}
            />

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/new" element={<New/>}/>
                <Route path="/diary/:id" element={<Diary/>}/>
                <Route path="/edit/:id" element={<Edit/>}/>
                <Route path="*" element={<Notfound/>}/>
            </Routes>
        </>
    );
};

export default App;
