import React from 'react';

interface SectionTitleProps {
    title: string;
    selectedContrast?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
    title,
    selectedContrast,
}) => {
    return (
        <h2>
            {title} {selectedContrast}
        </h2>
    );
};

export default SectionTitle;
