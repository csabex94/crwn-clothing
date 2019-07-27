import React from 'react';
import './custom-button.scss';

const CustomButton = ({ children, inverted, isGoogleSignIn, ...props }) => {

    return (

        <button className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...props}>
            
            {children}

        </button>

    );

};

export default CustomButton;