import React from 'react';

interface ErrorMessageProps {
    message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) =>
    message !== '' && (
        <div aria-hidden="true" className="error-message">
            {message}
        </div>
    );

export default ErrorMessage;
