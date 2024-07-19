import React from 'react';

const Toolbar = (): JSX.Element => {
    return (
        <div className="toolbar-banner">
            <div className="toolbar-inside-banner">
                <h2>Toolbar:</h2>
                <div className="toolbar-tools">
                    <input type="checkbox" id="drag-and-drop" />
                    <label htmlFor="drag-and-drop">Enable drag and Drop</label>
                </div>
            </div>
        </div>
    );
};

export default Toolbar;
