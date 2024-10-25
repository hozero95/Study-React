import "./EmotionItem.css";
import {getEmotionImage} from "../util/get-emotion-image.js";

// eslint-disable-next-line react/prop-types
const EmotionItem = ({emotionId, emotionName, isSelected, onClick}) => {
    // noinspection JSValidateTypes
    return (
        <div
            className={`EmotionItem ${isSelected ? `EmotionItem_on_${emotionId}` : ""}`}
            onClick={onClick}
        >
            <img className={"emotion_img"} src={getEmotionImage(emotionId)} alt={emotionName} />
            <div className={"emotion_name"}>{emotionName}</div>
        </div>
    );
};

export default EmotionItem;