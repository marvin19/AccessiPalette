import closeButton from '../assets/x-close.svg';

interface RemoveColorButtonProps {
    removeColorBar: () => void;
}

const removeColorButton = ({
    removeColorBar,
}: RemoveColorButtonProps): JSX.Element => {
    return (
        <button className="remove-color" onClick={removeColorBar}>
            <img src={closeButton} className="close-button" alt="Remove" />
        </button>
    );
};

export default removeColorButton;
