import ColorBar from './ColorBar';
import AddNewColor from './AddNewColor';

interface CompareAllProps {
    colorBars: string[];
    selectedMode: string;
    selectedContrast: number;
    addColorBar: () => void;
    handleColorChange: (index: number, newColor: string) => void;
    removeColorBar: (index: number) => void;
}

const CompareAll = ({
    colorBars,
    selectedMode,
    selectedContrast,
    addColorBar,
    handleColorChange,
    removeColorBar,
}: CompareAllProps): JSX.Element => {
    return (
        <div className="color-bars">
            {colorBars.map((color, index) => (
                <div className="color-bar-container" key={index}>
                    <ColorBar
                        color={color}
                        selectedMode={selectedMode}
                        onColorChange={(newColor) => {
                            handleColorChange(index, newColor);
                        }}
                        onRemove={() => {
                            removeColorBar(index);
                        }}
                        allColors={colorBars}
                        selectedContrast={selectedContrast}
                    />
                </div>
            ))}
            <AddNewColor
                addColorBar={addColorBar}
                colorBars={colorBars}
                selectedMode={selectedMode}
            />
        </div>
    );
};

export default CompareAll;
