import React from 'react';
import styles from '@/styles/components/buttons/whatsapp_button.module.scss';
import { FaTelegram } from "react-icons/fa";


interface ButtonProps {
    children: React.ReactNode;
    href: string;
}

const TelegramButton: React.FC<ButtonProps> = ({children, href}) => {
    return (
        <a 
            className={`${styles.button} ${styles.telegram_button}`}
            href={href} target="_blank"
        >
            
            {children}
            <FaTelegram
            style={{
                fontSize: '4rem',
                margin: '1rem'
            }}/>
        </a>
    );
};

export default TelegramButton;