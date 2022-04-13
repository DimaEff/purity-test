import React from 'react';

interface LogoProps {
    src: string;
}

const Logo: React.FC<LogoProps> = ({src}) => {
    return (
        <img style={{ height: 40 }} src={src} alt="logo"/>
    );
};

export default Logo;