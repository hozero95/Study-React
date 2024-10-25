import {getEmotionImage} from "../util/get-emotion-image.js";
import Button from "./Button.jsx";
import "./DiaryItem.css";
import {useNavigate} from "react-router-dom";

// eslint-disable-next-line react/prop-types
const DiaryItem = ({id, emotionId, createdDate, content}) => {
    const nav = useNavigate();

    // noinspection JSValidateTypes
    return (
        <div className={`DiaryItem DiaryItem_${id}`}>
            <div
                className={`img_section img_section_${emotionId}`}
                onClick={() => nav(`/diary/${id}`)}
            >
                <img src={getEmotionImage(emotionId)} alt={"emotionImage"}/>
            </div>
            <div className={"info_section"}>
                <div className={"created_date"}>
                    {new Date(createdDate).toLocaleDateString()}
                </div>
                <div className={"content"}>
                    {content}
                </div>
            </div>
            <div className={"button_section"}>
                <Button
                    text={"수정하기"}
                    onClick={() => nav(`/edit/${id}`)}
                />
            </div>
        </div>
    );
};

export default DiaryItem;