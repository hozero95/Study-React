import './Button.css';

// eslint-disable-next-line react/prop-types
const Button = ({text, type, onClick}) => {
    return (
        <button
            className={`Button Button_${type}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;