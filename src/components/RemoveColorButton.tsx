import closeButton from '../assets/x-close.svg';

interface RemoveColorButtonProps {
    onRemove: () => void;
}

const removeColorButton = ({
    onRemove,
}: RemoveColorButtonProps): JSX.Element => {
    return (
        <button className="remove-color" onClick={onRemove}>
            <img src={closeButton} className="close-button" alt="Remove" />
        </button>
    );
};

export default removeColorButton;
