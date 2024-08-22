/* eslint-disable react/prop-types */
const Button = ({ to, text, className, type, disabled }) => {
    
    if (to) {
        return (
            <a href={to} className={`${className} ${disabled ? 'cursor-not-allowed opacity-50' : ''}`}
                target="_blank"
                rel="noreferrer noopener"
            >{text}</a>
        )
    }
    return (
        <button
            type={type}
            className={`${className} ${disabled ? 'cursor-not-allowed opacity-50' : ''}`}
            disabled={disabled}
            to={to}
        >
            {text}
        </button>
    );
};

export default Button;
