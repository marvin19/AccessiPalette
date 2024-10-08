import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

interface RemoveColorButtonProps {
    textColor: string;
    removeColorBar: () => void;
}

const removeColorButton = ({
    removeColorBar,
    textColor,
}: RemoveColorButtonProps): JSX.Element => {
    return (
        <button
            className="remove-color"
            onClick={removeColorBar}
            aria-label="Remove color"
        >
            <FontAwesomeIcon icon={faX} style={{ color: textColor }} />
        </button>
    );
};

export default removeColorButton;
