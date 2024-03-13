import React from 'react';
import styles from '@/styles/components/buttons/button_primary.module.scss';

interface ButtonProps {
    children: React.ReactNode;
    primary?: boolean;
    href: string
}

const Button: React.FC<ButtonProps> = ({ children, primary = true, href }) => {
    const buttonClassName = primary ? styles.button__primary : styles.button__secondary;

    return (
        <a
            href={href}
            className={buttonClassName} 
        >
            <span className={styles.button__text}>{children}</span>
        </a>
    );
};

export default Button;